# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A client-side DICOM anonymiser (npm package `dicomanon`) used by Radiopaedia to strip patient-identifying metadata before DICOM images are uploaded. All anonymisation runs in-browser; no data leaves the client. Because the output is trusted to be patient-safe, correctness of the whitelist policy is the central concern of this codebase.

## Commands

- `npm install` — install dependencies
- `npm test` — run the Jest suite (ts-jest, tests are `src/*.test.ts`)
- `npx jest src/Anon.test.ts` — run a single test file
- `npx jest -t "blanks Patient's Age"` — run tests matching a name
- `npm run typecheck` — `tsc --noEmit` (tsconfig is strict: `noUnusedLocals`, `noImplicitReturns`, etc.)
- `npm run build` — bundle `src/` into `lib/` (esbuild ESM + CJS) and emit type declarations
- `npm start` — esbuild dev server on :8080 serving the `docs/` browser demo (bundles `src/browser.ts` → `docs/js/main.js`)

## Build artifact is committed

`lib/` is the compiled output but is **tracked in git** and consumed by package `exports`. After changing anything in `src/`, run `npm run build` and commit the regenerated `lib/` alongside your source changes. Tests run against `src/` (Jest ignores `lib/`), but downstream consumers import `lib/`.

## Pipeline

The public API (`src/index.ts`) exposes a read → anonymise → validate → write flow:

```
Message.readFile(buffer) → DicomDict { dict, meta }
Anonymize(dict)          → anonymised TagDict (throws AnonymizationError on failure)
Validator(dict)          → IValidatorWarning[] by tag
dicomDict.write(dict)    → ArrayBuffer
```

A `TagDict` is `{ [tagId: string]: { vr, Value } }` where `tagId` is the 8-hex-digit group+element (e.g. `"00080016"` is SOP Class UID, used to select the policy).

## Architecture

- **`src/Policies.ts`** — the whitelist. This is the heart of the project and where most anonymisation changes happen. Policies are built compositionally: small `*ModulePolicy()` functions (one per DICOM module) each return an `IPolicy` mapping tagId → `{ action, description, ... }`. SOP-class policies (e.g. `ctImagePolicy`) combine modules via `addPolicies(...)` (later policies override earlier ones). `policyFor(sopClassUid)` layers the class-specific policy on top of `catchAllWhitelistPolicy()`; unknown SOP classes fall back to the catch-all. The `default` rule is `remove`, so **a tag is dropped unless a policy explicitly keeps/regenerates/replaces it**.
- **`src/Anon.ts`** — applies a policy to a dict. Actions: `keep` (copy), `remove` (omit), `replace` (set policy's `value`), `regenerate` (new UID via `hash` of the old UID — deterministic, preserves cross-file relationships like frame-of-reference — or `random`). Regenerated UIDs use the prefix `1.2.826.0.1.3680043.10.341.`. After applying, it re-validates and **throws `AnonymizationError` if any level-1 warning remains** — it never returns a dataset, and never stamps `PatientIdentityRemoved` (`00120062`) `YES`, unless de-identification was complete. This refuse-don't-leak behaviour is a hard invariant; preserve it.
- **`src/Validator.ts`** — per-VR sanity checks returning `IValidatorWarning{ level, text }`. Level 1 = fatal (would leak identity / invalid de-id), 2 = possible leak, 3 = abnormality. `supportedSOPClasses()` lists explicitly-supported classes. Note this list and the `policydict` in `Policies.ts` are maintained separately — keep them consistent when adding a SOP class.
- **`src/Message.ts`, `src/BufferStream.ts`, `src/Tag.ts`, `src/ValueRepresentation.ts`** — the DICOM binary read/write layer (parse transfer syntaxes, endianness, VR encoding/decoding). Adapted from generic DICOM tooling; touch only when dealing with serialization, not anonymisation policy.
- **`src/dictionary.ts`, `src/TagData.ts`** — large generated lookup tables (DICOM data dictionary / UID registry). Do not hand-edit.
- **`src/MetaDictionary.ts`** — tag-name punctuation/normalization helpers.

## Conventions

- Tag IDs are 8 uppercase hex digits (group+element), no comma. Group with an **odd** first 4 hex (last bit set) = private tag; these are removed unless explicitly known and required.
- New anonymisation rules belong in `Policies.ts` as a `keep`/`replace` entry with a human-readable `description`; prefer blanking (type-2 → empty value) or removing over retaining derived/bucketed patient data (see the age/weight tests in `Anon.test.ts`).
- `fixtures/*.dcm` are real-ish DICOM files used by tests; `spec/roundtrip.ts` and `stages/` support manual read→anon→write round-trip debugging.
