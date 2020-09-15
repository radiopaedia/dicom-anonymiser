import { WriteBufferStream } from './BufferStream';
import DicomMessage from './Message';
var fs = require('fs');
describe('Message tests...', function () {
    it('Try to write binary bits...', function () {
        fs.mkdir('stages', function () { return undefined; });
        function readFileBuffer(path) {
            var b = fs.readFileSync(path);
            return b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
        }
        function readDcm(buf, stage) {
            var dcm = DicomMessage.readFile(buf);
            var written = dcm.write(dcm.dict);
            fs.writeFileSync("stages/" + stage + "-raw", Buffer.from(written));
            return {
                dcm: dcm, written: written
            };
        }
        // Note: This test will fail if there's no test.dcm file in the current directory (base dir of the repo).
        var inBuffer = readFileBuffer('test.dcm');
        //console.log('---------------- First Read');
        var first = readDcm(inBuffer, 'first');
        //console.log('---------------- Second Read');
        var second = readDcm(first.written, 'second');
        //console.log('---------------- Third Read');
        var third = readDcm(second.written, 'third');
        var wbs = new WriteBufferStream(first.dcm.dict['7FE00010'].Value[0].byteLength);
        DicomMessage.writeTagObject(wbs, '7FE00010', first.dcm.dict['7FE00010'].vr, first.dcm.dict['7FE00010'].Value, "1.2.840.10008.1.2.1");
        expect(third.written.byteLength).toEqual(second.written.byteLength);
    });
});
//# sourceMappingURL=Message.test.js.map