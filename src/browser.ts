import * as dcmio from './index';
import {saveAs} from "file-saver";
if (typeof window != 'undefined') {
  // @ts-ignore
  window.dcmio = dcmio
  // @ts-ignore
  window.saveAs = saveAs
}
