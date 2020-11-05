import { BufferStream } from "./BufferStream";
import { IMPLICIT_LITTLE_ENDIAN } from "./Message";
import { OtherByteString } from "./ValueRepresentation";
describe("BinaryRepresentation tests...", function () {
    it("Try to write binary bits...", function () {
        var vr = new OtherByteString();
        var buf = new BufferStream((16 * 2) ^ 8, true);
        var b1 = new BufferStream(16, true);
        var b2 = new BufferStream(16, true);
        b1.writeString("1234567890ABCEF");
        b2.writeString("1234567890ABCEF");
        vr.writeBytes(buf, [b1.buffer, b2.buffer], IMPLICIT_LITTLE_ENDIAN, true);
    });
});
//# sourceMappingURL=ValueRepresentation.test.js.map