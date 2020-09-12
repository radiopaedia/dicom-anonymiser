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
    
        let inBuffer = readFileBuffer('C:\\code\\dicomanon-1\\1.dcm');
        let first = readDcm(inBuffer, 'first');
        let second = readDcm(first.written, 'second');

        let wbs = new WriteBufferStream(first.dcm.dict['7FE00010'].Value[0].byteLength);
        DicomMessage.writeTagObject(wbs, '7FE00010', first.dcm.dict['7FE00010'].vr, first.dcm.dict['7FE00010'].Value, "1.2.840.10008.1.2.1");
        console.log(first.written.byteLength)
        console.log(second.written.byteLength)

  });
});