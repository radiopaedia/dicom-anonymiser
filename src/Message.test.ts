import DicomMessage from "./Message";
const fs = require("fs");

const DICOM_FIXTURE = "fixtures/TestPattern_JPEG-Baseline_YBRFull.dcm"

describe("Message tests...", () => {
  it("Try to write binary bits...", () => {
    fs.mkdir("stages", () => undefined);

    function readFileBuffer(path: string) {
      const b = fs.readFileSync(path);
      return b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
    }

    function readDcm(buf: ArrayBuffer, stage: string) {
      let dcm = DicomMessage.readFile(buf);
      let written = dcm.write(dcm.dict);
      fs.writeFileSync(`stages/${stage}-raw`, Buffer.from(written));
      return {
        dcm,
        written,
      };
    }
    let inBuffer = readFileBuffer(DICOM_FIXTURE);
    //console.log('---------------- First Read');
    let first = readDcm(inBuffer, "first");
    //console.log('---------------- Second Read');
    let second = readDcm(first.written, "second");
    //console.log('---------------- Third Read');
    let third = readDcm(second.written, "third");

    expect(third.written.byteLength).toEqual(second.written.byteLength);
  });
});
