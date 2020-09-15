import { BufferStream, WriteBufferStream, ReadBufferStream } from './BufferStream';
describe('BufferStream tests...', function () {
    it('Create a buffer and more till the end', function () {
        var buf = new BufferStream(21 * 1024, true);
        buf.more(21 * 1024);
        expect(buf.size).toEqual(21 * 1024);
    });
    it('Write a simple string and read it back', function () {
        var wbuf = new WriteBufferStream(8);
        wbuf.writeString('12345678');
        var rbuf = new ReadBufferStream(wbuf.getBuffer());
        expect(rbuf.readString(8)).toEqual('12345678');
    });
    it('Test concat method', function () {
        // Create some write buffers and add them together.
        var wbuf = new WriteBufferStream(8);
        wbuf.writeString('12345678');
        var wbuf2 = new WriteBufferStream(8);
        wbuf.writeString('9ABCDEF0');
        wbuf.concat(wbuf2);
        var wbuf3 = new WriteBufferStream(4);
        wbuf3.writeUint32(69);
        wbuf.concat(wbuf3);
        var rbuf = new ReadBufferStream(wbuf.getBuffer());
        expect(rbuf.readString(16)).toEqual('123456789ABCDEF0');
        expect(rbuf.readUint32()).toEqual(69);
    });
    it('Check the checkSize method', function () {
        var wbuf = new WriteBufferStream(1);
        // checkSize should expand the array to fit what I'm putting down... 
        wbuf.checkSize(8);
        wbuf.writeString('12345678');
        var rbuf = new ReadBufferStream(wbuf.getBuffer());
        expect(rbuf.readString(8)).toEqual('12345678');
    });
    it('Read and write hex values', function () {
        var wbuf = new WriteBufferStream(16);
        wbuf.writeHex('0102030405060708090A0B0C0D0E0F10');
        // checkSize should expand the array to fit what I'm putting down... 
        var rbuf = new ReadBufferStream(wbuf.getBuffer());
        expect(rbuf.readHex(16)).toEqual('0102030405060708090A0B0C0D0E0F10');
    });
    //   it('should resolve with false for invalid token', async () => {
    //     const response = await user.auth('invalidToken')
    //     expect(response).toEqual({success: false})
    //   })
});
//# sourceMappingURL=BufferStream.test.js.map