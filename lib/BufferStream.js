var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//http://jonisalonen.com/2012/from-utf-16-to-utf-8-in-javascript/
export function toUTF8Array(str) {
    var utf8 = [];
    for (var i = 0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80)
            utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | (charcode >> 12), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charcode =
                0x10000 + (((charcode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
            utf8.push(0xf0 | (charcode >> 18), 0x80 | ((charcode >> 12) & 0x3f), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
        }
    }
    return utf8;
}
function toInt(val) {
    if (isNaN(val)) {
        throw new Error("Not a number: " + val);
    }
    else if (typeof val == "string") {
        return parseInt(val);
    }
    else
        return val;
}
function toFloat(val) {
    if (isNaN(val)) {
        throw new Error("Not a number: " + val);
    }
    else if (typeof val == "string") {
        return parseFloat(val);
    }
    else
        return val;
}
var BufferStream = /** @class */ (function () {
    function BufferStream(sizeOrBuffer, littleEndian) {
        this.buffer =
            typeof sizeOrBuffer == "number"
                ? new ArrayBuffer(sizeOrBuffer)
                : sizeOrBuffer;
        if (!this.buffer) {
            this.buffer = new ArrayBuffer(0);
        }
        this.view = new DataView(this.buffer);
        this.offset = 0;
        this.isLittleEndian = littleEndian || false;
        this.size = 0;
    }
    BufferStream.prototype.setEndian = function (isLittle) {
        this.isLittleEndian = isLittle;
    };
    BufferStream.prototype.writeUint8 = function (value) {
        this.checkSize(1);
        this.view.setUint8(this.offset, toInt(value));
        return this.increment(1);
    };
    BufferStream.prototype.writeInt8 = function (value) {
        this.checkSize(1);
        this.view.setInt8(this.offset, toInt(value));
        return this.increment(1);
    };
    BufferStream.prototype.writeUint16 = function (value) {
        this.checkSize(2);
        this.view.setUint16(this.offset, toInt(value), this.isLittleEndian);
        return this.increment(2);
    };
    BufferStream.prototype.writeInt16 = function (value) {
        this.checkSize(2);
        this.view.setInt16(this.offset, toInt(value), this.isLittleEndian);
        return this.increment(2);
    };
    BufferStream.prototype.writeUint32 = function (value) {
        this.checkSize(4);
        this.view.setUint32(this.offset, toInt(value), this.isLittleEndian);
        return this.increment(4);
    };
    BufferStream.prototype.writeInt32 = function (value) {
        this.checkSize(4);
        this.view.setInt32(this.offset, toInt(value), this.isLittleEndian);
        return this.increment(4);
    };
    BufferStream.prototype.writeFloat = function (value) {
        this.checkSize(4);
        this.view.setFloat32(this.offset, toFloat(value), this.isLittleEndian);
        return this.increment(4);
    };
    BufferStream.prototype.writeDouble = function (value) {
        this.checkSize(8);
        this.view.setFloat64(this.offset, toFloat(value), this.isLittleEndian);
        return this.increment(8);
    };
    BufferStream.prototype.writeString = function (value) {
        value = value || "";
        var utf8 = toUTF8Array(value), bytelen = utf8.length;
        this.checkSize(bytelen);
        var startOffset = this.offset;
        for (var i = 0; i < bytelen; i++) {
            this.view.setUint8(startOffset, utf8[i]);
            startOffset++;
        }
        return this.increment(bytelen);
    };
    BufferStream.prototype.writeHex = function (value) {
        //console.log('writeHex: ' + value );
        var len = value.length, blen = len / 2, startOffset = this.offset;
        this.checkSize(blen);
        for (var i = 0; i < len; i += 2) {
            var code = parseInt(value[i], 16), nextCode;
            if (i == len - 1) {
                nextCode = null;
            }
            else {
                nextCode = parseInt(value[i + 1], 16);
            }
            if (nextCode !== null) {
                code = (code << 4) | nextCode;
            }
            this.view.setUint8(startOffset, code);
            startOffset++;
        }
        return this.increment(blen);
    };
    BufferStream.prototype.readUint32 = function () {
        var val = this.view.getUint32(this.offset, this.isLittleEndian);
        this.increment(4);
        return val;
    };
    BufferStream.prototype.readUint16 = function () {
        var val = this.view.getUint16(this.offset, this.isLittleEndian);
        this.increment(2);
        return val;
    };
    BufferStream.prototype.readUint8 = function () {
        var val = this.view.getUint8(this.offset);
        this.increment(1);
        return val;
    };
    BufferStream.prototype.readUint8Array = function (length) {
        var arr = new Uint8Array(this.buffer, this.offset, length);
        this.increment(length);
        return arr;
    };
    BufferStream.prototype.readUint16Array = function (length) {
        var sixlen = length / 2, arr = new Uint16Array(sixlen), i = 0;
        while (i++ < sixlen) {
            arr[i] = this.view.getUint16(this.offset, this.isLittleEndian);
            this.offset += 2;
        }
        return arr;
    };
    BufferStream.prototype.readInt8 = function () {
        var val = this.view.getInt8(this.offset);
        this.increment(1);
        return val;
    };
    BufferStream.prototype.readInt16 = function () {
        var val = this.view.getInt16(this.offset, this.isLittleEndian);
        this.increment(2);
        return val;
    };
    BufferStream.prototype.readInt32 = function () {
        var val = this.view.getInt32(this.offset, this.isLittleEndian);
        this.increment(4);
        return val;
    };
    BufferStream.prototype.readFloat = function () {
        var val = this.view.getFloat32(this.offset, this.isLittleEndian);
        this.increment(4);
        return val;
    };
    BufferStream.prototype.readDouble = function () {
        var val = this.view.getFloat64(this.offset, this.isLittleEndian);
        this.increment(8);
        return val;
    };
    BufferStream.prototype.readString = function (length) {
        var string = "";
        var numOfMulti = length, index = 0;
        while (index++ < numOfMulti) {
            var charCode = this.readUint8();
            string += String.fromCharCode(charCode);
        }
        return string;
    };
    BufferStream.prototype.readHex = function (length) {
        var hexString = "";
        for (var i = 0; i < length; i++) {
            var hexChar = this.readUint8().toString(16);
            if (hexChar.length < 2) {
                hexChar = "0" + hexChar;
            }
            hexString += hexChar;
        }
        return hexString.toUpperCase();
    };
    BufferStream.prototype.checkSize = function (step) {
        var byteLength = this.buffer.byteLength;
        if (this.offset + step <= byteLength) {
            return;
        }
        while (this.offset + step > byteLength) {
            byteLength *= 2;
        }
        var dst = new ArrayBuffer(byteLength);
        new Uint8Array(dst).set(new Uint8Array(this.buffer));
        this.buffer = dst;
        this.view = new DataView(this.buffer);
    };
    BufferStream.prototype.concat = function (stream) {
        this.checkSize(stream.size);
        var int8 = new Uint8Array(this.buffer);
        int8.set(new Uint8Array(stream.buffer, 0, stream.size), this.offset);
        this.size += stream.size;
        this.offset += stream.size;
    };
    BufferStream.prototype.increment = function (step) {
        this.offset += step;
        if (this.offset > this.size) {
            this.size = this.offset;
        }
        return step;
    };
    BufferStream.prototype.getBuffer = function (start, end) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = 0; }
        if (!start && !end) {
            start = 0;
            end = this.size;
        }
        return this.buffer.slice(start, end);
    };
    BufferStream.prototype.more = function (length) {
        if (this.offset + length > this.buffer.byteLength) {
            throw new Error("Request more than currently allocated buffer");
        }
        var newBuf = this.buffer.slice(this.offset, this.offset + length);
        this.increment(length);
        return new ReadBufferStream(newBuf);
    };
    BufferStream.prototype.reset = function () {
        this.offset = 0;
        return this;
    };
    BufferStream.prototype.end = function () {
        return this.offset >= this.buffer.byteLength;
    };
    BufferStream.prototype.toEnd = function () {
        this.offset = this.buffer.byteLength;
    };
    return BufferStream;
}());
export { BufferStream };
var ReadBufferStream = /** @class */ (function (_super) {
    __extends(ReadBufferStream, _super);
    function ReadBufferStream(buffer, littleEndian) {
        if (littleEndian === void 0) { littleEndian = false; }
        var _this = _super.call(this, buffer, littleEndian) || this;
        _this.size = _this.buffer.byteLength;
        return _this;
    }
    return ReadBufferStream;
}(BufferStream));
export { ReadBufferStream };
var WriteBufferStream = /** @class */ (function (_super) {
    __extends(WriteBufferStream, _super);
    function WriteBufferStream(buffer, littleEndian) {
        if (littleEndian === void 0) { littleEndian = false; }
        var _this = _super.call(this, buffer, littleEndian) || this;
        _this.size = 0;
        return _this;
    }
    return WriteBufferStream;
}(BufferStream));
export { WriteBufferStream };
//# sourceMappingURL=BufferStream.js.map