import * as dcmio from './index';
import { saveAs } from "file-saver";
if (typeof window != 'undefined') {
    // @ts-ignore
    window.dicomanon = { dcmio: dcmio, saveAs: saveAs };
}
//# sourceMappingURL=browser.js.map