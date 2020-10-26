import { BufferStream, WriteBufferStream, ReadBufferStream } from './BufferStream';
import DicomMessage from './Message';
const fs = require('fs');


describe('Message tests...', () => {
  it('Try to write binary bits...', () => {
    fs.mkdir('stages', () => undefined)

        function readFileBuffer(path) {
            const b = fs.readFileSync(path)
            return b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
        }

        function readDcm(buf, stage) {
        let dcm = DicomMessage.readFile(buf);
        let written = dcm.write(dcm.dict, );
        fs.writeFileSync(`stages/${stage}-raw`, Buffer.from(written))
            return {
                dcm, written
            }
        }
        // Note: This test will fail if there's no test.dcm file in the current directory (base dir of the repo).
        let inBuffer = readFileBuffer('test.dcm');
        //console.log('---------------- First Read');
        let first = readDcm(inBuffer, 'first');
        //console.log('---------------- Second Read');
        let second = readDcm(first.written, 'second');
        //console.log('---------------- Third Read');
        let third = readDcm(second.written, 'third');

        expect(third.written.byteLength).toEqual(second.written.byteLength);
  });

});