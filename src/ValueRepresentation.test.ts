import { BufferStream, WriteBufferStream, ReadBufferStream } from './BufferStream';
import { BinaryRepresentation, OtherByteString } from './ValueRepresentation';


describe('BinaryRepresentation tests...', () => {
  it('Try to write binary bits...', () => {
    const vr = new OtherByteString();
    const buf = new BufferStream(16*2^8, true);
    const b1 = new BufferStream(16, true);
    const b2 = new BufferStream(16, true);
    b1.writeString('1234567890ABCEF');
    b2.writeString('1234567890ABCEF');
    vr.writeBytes(buf, {b1, b2}, 'Who cares?', true);
    
  });
});