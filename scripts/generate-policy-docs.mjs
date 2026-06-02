// Generates the "What is removed and what is kept" tables in README.md
// directly from the policy in src/Policies.ts, so the documentation cannot
// drift from (or hallucinate) the actual policy. Run with `npm run update-readme`
// after changing the policy.
//
// The tables cover the whole policy — tags that are blanked/replaced,
// regenerated, explicitly removed, and kept — for the catch-all policy (the
// union of every module policy, applied to unrecognised SOP Classes). Each
// row's description is the canonical DICOM tag name from src/TagData.ts, so the
// "Description" column reads as a consistent label and never restates the
// action that the surrounding sentence already conveys.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { transformSync } from "esbuild";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const policiesPath = path.join(root, "src", "Policies.ts");
const tagDataPath = path.join(root, "src", "TagData.ts");
const readmePath = path.join(root, "README.md");

// Transpile a standalone (import-free) TS module and import the result from an
// in-memory data URL — no build step or temp files.
async function importStandaloneTs(filePath) {
  const { code } = transformSync(readFileSync(filePath, "utf8"), {
    loader: "ts",
    format: "esm",
  });
  const dataUrl =
    "data:text/javascript;base64," + Buffer.from(code).toString("base64");
  return (await import(dataUrl)).default;
}

const BEGIN = "<!-- BEGIN GENERATED POLICY TABLES: regenerate with `npm run update-readme` -->";
const END = "<!-- END GENERATED POLICY TABLES -->";

const policyFor = await importStandaloneTs(policiesPath);
const tagData = await importStandaloneTs(tagDataPath);

// An unrecognised SOP Class UID yields the catch-all whitelist union.
const policy = policyFor("__catch_all__");

const formatTag = (id) =>
  `(${id.slice(0, 4).toUpperCase()},${id.slice(4).toUpperCase()})`;
const escape = (text) => text.replace(/\|/g, "\\|").trim();

// TagData keys are inconsistently cased (mostly upper, but some hex-letter
// keys are lower), so index by an upper-cased key for a stable lookup.
const tagNames = new Map(
  Object.entries(tagData).map(([id, entry]) => [id.toUpperCase(), entry.name])
);

// The canonical DICOM tag name is the description; fall back to the policy's
// own description for any tag the dictionary doesn't carry.
function describe(id, rule) {
  return tagNames.get(id.toUpperCase()) ?? rule.description;
}

function table(action) {
  return Object.entries(policy)
    .filter(([id, rule]) => id !== "default" && rule.action === action)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(
      ([id, rule]) => `| \`${formatTag(id)}\` | ${escape(describe(id, rule))} |`
    );
}

const sections = [
  {
    heading: "### Patient/identifying fields that are blanked or replaced",
    intro: (n) =>
      `These ${n} tags are emptied (or set to a fixed non-identifying value ` +
      `such as a zeroed date) rather than passed through. Note that ` +
      `**patient age, weight and size are blanked** — they are not retained ` +
      `in any form.`,
    rows: table("replace"),
  },
  {
    heading: "### UIDs that are regenerated",
    intro: () =>
      "Structural UIDs are rewritten with a cryptographically secure SHA-512 " +
      "hash (prefixed `1.2.826.0.1.3680043.10.341.`) so the study/series/" +
      "frame structure is preserved across files without carrying the " +
      "originals:",
    rows: table("regenerate"),
  },
  {
    heading: "### Sequences explicitly removed",
    intro: () =>
      "These are dropped explicitly (on top of the remove-by-default rule) " +
      "because they nest UIDs or identifying sub-items the tool does not " +
      "rewrite:",
    rows: table("remove"),
  },
  {
    heading: "### Tags kept unchanged",
    intro: (n) =>
      `The following ${n} tags are retained because they are technical ` +
      `imaging/acquisition metadata with no patient-identifying content. ` +
      `Any tag not listed here is removed.`,
    rows: table("keep"),
  },
];

const body = sections
  .map(({ heading, intro, rows }) =>
    [
      heading,
      "",
      intro(rows.length),
      "",
      "| Tag | Description |",
      "| --- | --- |",
      ...rows,
    ].join("\n")
  )
  .join("\n\n");

const generated = `${BEGIN}\n\n${body}\n\n${END}`;

const readme = readFileSync(readmePath, "utf8");
const begin = readme.indexOf(BEGIN);
const end = readme.indexOf(END);
if (begin === -1 || end === -1) {
  throw new Error(
    "Could not find the begin/end markers in README.md — " +
      "add them around the generated policy tables first."
  );
}

const updated =
  readme.slice(0, begin) + generated + readme.slice(end + END.length);
writeFileSync(readmePath, updated);

const counts = sections
  .map((s) => `${s.rows.length} ${s.heading.replace("### ", "")}`)
  .join(", ");
console.log(`Wrote README.md policy tables: ${counts}.`);
