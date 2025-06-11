import DicomMessage from "./Message";
var fs = require("fs");
var DICOM_FIXTURE = "fixtures/TestPattern_JPEG-Baseline_YBRFull.dcm";
describe("Message tests...", function () {
    it("Try to write binary bits...", function () {
        fs.mkdir("stages", function () { return undefined; });
        function readFileBuffer(path) {
            var b = fs.readFileSync(path);
            return b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
        }
        function readDcm(buf, stage) {
            var dcm = DicomMessage.readFile(buf);
            var written = dcm.write(dcm.dict);
            fs.writeFileSync("stages/".concat(stage, "-raw"), Buffer.from(written));
            return {
                dcm: dcm,
                written: written,
            };
        }
        var inBuffer = readFileBuffer(DICOM_FIXTURE);
        //console.log('---------------- First Read');
        var first = readDcm(inBuffer, "first");
        //console.log('---------------- Second Read');
        var second = readDcm(first.written, "second");
        //console.log('---------------- Third Read');
        var third = readDcm(second.written, "third");
        expect(third.written.byteLength).toEqual(second.written.byteLength);
    });
});
//# sourceMappingURL=Message.test.js.map