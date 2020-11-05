import * as dcmio from "./index";
// @ts-expect-error no typedef for file-saver
import { saveAs } from "file-saver";
if (typeof window != "undefined") {
  // @ts-ignore
  window.dicomanon = { dcmio, saveAs };
}
