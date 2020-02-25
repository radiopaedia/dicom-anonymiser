var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { WriteBufferStream, ReadBufferStream } from './BufferStream';
import DicomMessage from "./Message";
import Tag from './Tag';
function rtrim(str) {
    return str.replace(/\s*$/g, '');
}
export function tagFromNumbers(group, element) {
    return new Tag(((group << 16) | element) >>> 0);
}
function readTag(stream) {
    var group = stream.readUint16(), element = stream.readUint16();
    var tag = tagFromNumbers(group, element);
    return tag;
}
var binaryVRs = ["FL", "FD", "SL", "SS", "UL", "US", "AT"];
var explicitVRList = ["OB", "OW", "OF", "SQ", "UC", "UR", "UT", "UN"];
var singleVRs = ["SQ", "OF", "OW", "OB", "UN"];
var ValueRepresentation = /** @class */ (function () {
    function ValueRepresentation(type, value) {
        if (value === void 0) { value = undefined; }
        this.type = type;
        this.multi = false;
        this.maxLength = 0;
        this.noMultiple = false;
    }
    ValueRepresentation.prototype.isBinary = function () {
        return binaryVRs.indexOf(this.type) != -1;
    };
    ValueRepresentation.prototype.allowMultiple = function () {
        return !this.isBinary() && singleVRs.indexOf(this.type) == -1;
    };
    ValueRepresentation.prototype.isExplicit = function () {
        return explicitVRList.indexOf(this.type) != -1;
    };
    ValueRepresentation.prototype.read = function (stream, length, syntax) {
        if (this.fixed && this.maxLength) {
            if (!length)
                return this.defaultValue;
            if (this.maxLength != length)
                console.log("Invalid length for fixed length tag, vr " + this.type + ", length " + this.maxLength + " != " + length);
        }
        return this.readBytes(stream, length, syntax);
    };
    ValueRepresentation.prototype.readBytes = function (stream, length, _syntax) {
        return stream.readString(length);
    };
    ValueRepresentation.prototype.readNullPaddedString = function (stream, length) {
        if (!length)
            return "";
        var str = stream.readString(length - 1);
        if (stream.readUint8() != 0) {
            stream.increment(-1);
            str += stream.readString(1);
        }
        return str;
    };
    ValueRepresentation.prototype.writeFilledString = function (stream, value, length) {
        if (this.maxLength && length < this.maxLength && length >= 0) {
            var written = 0;
            if (length > 0)
                written += stream.writeString(value);
            var zeroLength = this.maxLength - length;
            written += stream.writeHex(this.fillWith.repeat(zeroLength));
            return written;
        }
        else if (length == this.maxLength) {
            return stream.writeString(value);
        }
        else {
            throw "Length mismatch";
        }
    };
    ValueRepresentation.prototype.write = function (stream, type) {
        var valueArgs = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            valueArgs[_i - 2] = arguments[_i];
        }
        var args = Array.from(arguments);
        if (args[2] === null || args[2] === "" || args[2] === undefined) {
            return [stream.writeString("")];
        }
        else {
            var written_1 = [];
            var func_1 = stream["write" + type];
            if (Array.isArray(valueArgs[0])) {
                if (valueArgs[0].length < 1) {
                    written_1.push(0);
                }
                else {
                    var self = this;
                    valueArgs[0].forEach(function (v, k) {
                        if (self.allowMultiple() && k > 0) {
                            stream.writeHex("5C");
                            //byteCount++;
                        }
                        var singularArgs = [v].concat(valueArgs.slice(1));
                        var byteCount = func_1.apply(stream, singularArgs);
                        written_1.push(byteCount);
                    });
                }
            }
            else {
                written_1.push(func_1.apply(stream, valueArgs));
            }
            return written_1;
        }
    };
    ValueRepresentation.prototype.writeBytes = function (stream, value, lengths, isEncapsulated) {
        if (isEncapsulated === void 0) { isEncapsulated = false; }
        var valid = true, valarr = Array.isArray(value) ? value : [value], total = 0;
        for (var i = 0; i < valarr.length; i++) {
            var checkValue = valarr[i];
            var checklen = lengths[i], isString = false, displaylen = checklen;
            if (this.checkLength && typeof checkValue == "string") {
                valid = this.checkLength(checkValue);
            }
            else if (this.maxCharLength && typeof checkValue == "string") {
                var check = this.maxCharLength; //, checklen = checkValue.length;
                valid = checkValue.length <= check;
                displaylen = checkValue.length;
                isString = true;
            }
            else if (this.maxLength) {
                valid = checklen <= this.maxLength;
            }
            var errmsg = "Value exceeds max length, vr: " + this.type + ", value: " + checkValue + ", length: " + displaylen;
            if (!valid) {
                if (isString)
                    console.log(errmsg);
                else
                    throw new Error(errmsg);
            }
            total += checklen;
        }
        if (this.allowMultiple()) {
            total += valarr.length ? valarr.length - 1 : 0;
        }
        //check for odd
        var written = total;
        if (total & 1) {
            stream.writeHex(this.padByte);
            written++;
        }
        return written;
    };
    ValueRepresentation.createByTypeString = function (type) {
        var vr;
        if (type == "AE")
            vr = new ApplicationEntity();
        else if (type == "AS")
            vr = new AgeString();
        else if (type == "AT")
            vr = new AttributeTag();
        else if (type == "CS")
            vr = new CodeString();
        else if (type == "DA")
            vr = new DateValue(null);
        else if (type == "DS")
            vr = new DecimalString();
        else if (type == "DT")
            vr = new DateTime();
        else if (type == "FL")
            vr = new FloatingPointSingle();
        else if (type == "FD")
            vr = new FloatingPointDouble();
        else if (type == "IS")
            vr = new IntegerString();
        else if (type == "LO")
            vr = new LongString();
        else if (type == "LT")
            vr = new LongText();
        else if (type == "OB")
            vr = new OtherByteString();
        // else if (type == "OD") vr = new OtherDoubleString();
        // else if (type == "OF") vr = new OtherFloatString();
        else if (type == "OW")
            vr = new OtherWordString();
        else if (type == "PN")
            vr = new PersonName();
        else if (type == "SH")
            vr = new ShortString();
        else if (type == "SL")
            vr = new SignedLong();
        else if (type == "SQ")
            vr = new SequenceOfItems();
        else if (type == "SS")
            vr = new SignedShort();
        else if (type == "ST")
            vr = new ShortText();
        else if (type == "TM")
            vr = new TimeValue();
        else if (type == "UC")
            vr = new UnlimitedCharacters();
        else if (type == "UI")
            vr = new UniqueIdentifier();
        else if (type == "UL")
            vr = new UnsignedLong();
        else if (type == "UN")
            vr = new UnknownValue();
        else if (type == "UR")
            vr = new UniversalResource();
        else if (type == "US")
            vr = new UnsignedShort();
        else if (type == "UT")
            vr = new UnlimitedText();
        else
            throw "Invalid vr type " + type;
        return vr;
    };
    return ValueRepresentation;
}());
export default ValueRepresentation;
var StringRepresentation = /** @class */ (function (_super) {
    __extends(StringRepresentation, _super);
    function StringRepresentation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringRepresentation.prototype.readBytes = function (stream, length, _syntax) {
        return stream.readString(length);
    };
    StringRepresentation.prototype.writeBytes = function (stream, value, syntax, isEncapsulated) {
        var written = _super.prototype.write.call(this, stream, "String", value);
        return _super.prototype.writeBytes.call(this, stream, value, written);
    };
    return StringRepresentation;
}(ValueRepresentation));
export { StringRepresentation };
var BinaryRepresentation = /** @class */ (function (_super) {
    __extends(BinaryRepresentation, _super);
    function BinaryRepresentation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BinaryRepresentation.prototype.writeBytes = function (stream, value, syntax, isEncapsulated) {
        if (isEncapsulated) {
            var fragmentSize = 1024 * 20, frames = value.length;
            var startOffset = [];
            var binaryStream = new WriteBufferStream(1024 * 1024 * 20, stream.isLittleEndian);
            for (var i = 0; i < frames; i++) {
                startOffset.push(binaryStream.size);
                var frameBuffer = value[i], frameStream = new ReadBufferStream(frameBuffer), fragmentsLength = Math.ceil(frameStream.size / fragmentSize);
                for (var j = 0, fragmentStart = 0; j < fragmentsLength; j++) {
                    var fragmentEnd = fragmentStart + fragmentSize;
                    if (j == fragmentsLength - 1) {
                        fragmentEnd = frameStream.size;
                    }
                    var fragStream = new ReadBufferStream(frameStream.getBuffer(fragmentStart, fragmentEnd));
                    fragmentStart = fragmentEnd;
                    binaryStream.writeUint16(0xfffe);
                    binaryStream.writeUint16(0xe000);
                    binaryStream.writeUint32(fragStream.size);
                    binaryStream.concat(fragStream);
                }
            }
            stream.writeUint16(0xfffe);
            stream.writeUint16(0xe000);
            stream.writeUint32(startOffset.length * 4);
            for (var i = 0; i < startOffset.length; i++) {
                stream.writeUint32(startOffset[i]);
            }
            stream.concat(binaryStream);
            stream.writeUint16(0xfffe);
            stream.writeUint16(0xe0dd);
            stream.writeUint32(0x0);
            var written = 8 + binaryStream.size + startOffset.length * 4 + 8;
            if (written & 1) {
                stream.writeHex(this.padByte);
                written++;
            }
            return 0xffffffff;
        }
        else {
            var binaryData = value[0], binaryStream = new ReadBufferStream(binaryData);
            stream.concat(binaryStream);
            return _super.prototype.writeBytes.call(this, stream, binaryData, [binaryStream.size]);
        }
    };
    BinaryRepresentation.prototype.readBytes = function (stream, length, _syntax) {
        if (length == 0xffffffff) {
            var itemTagValue = Tag.readTag(stream), frames = [];
            if (itemTagValue.is(0xfffee000)) {
                var itemLength = stream.readUint32(), numOfFrames = 1, offsets = [];
                if (itemLength > 0x0) {
                    //has frames
                    numOfFrames = itemLength / 4;
                    var i = 0;
                    while (i++ < numOfFrames) {
                        offsets.push(stream.readUint32());
                    }
                }
                else {
                    offsets = [0];
                }
                var nextTag = Tag.readTag(stream), fragmentStream = null, start = 4, frameOffset = offsets.shift();
                while (nextTag.is(0xfffee000)) {
                    if (frameOffset == start) {
                        frameOffset = offsets.shift();
                        if (fragmentStream !== null) {
                            frames.push(fragmentStream.buffer);
                            fragmentStream = null;
                        }
                    }
                    var frameItemLength = stream.readUint32(), thisStream = stream.more(frameItemLength);
                    if (fragmentStream === null) {
                        fragmentStream = thisStream;
                    }
                    else {
                        fragmentStream.concat(thisStream);
                    }
                    nextTag = Tag.readTag(stream);
                    start += 4 + frameItemLength;
                }
                if (fragmentStream !== null) {
                    frames.push(fragmentStream.buffer);
                }
                stream.readUint32();
            }
            else {
                throw new Error("Item tag not found after undefined binary length");
            }
            return frames;
        }
        else {
            var bytes;
            /*if (this.type == 'OW') {
                bytes = stream.readUint16Array(length);
            } else if (this.type == 'OB') {
                bytes = stream.readUint8Array(length);
            }*/
            bytes = stream.more(length).buffer;
            return [bytes];
        }
    };
    return BinaryRepresentation;
}(ValueRepresentation));
export { BinaryRepresentation };
var ApplicationEntity = /** @class */ (function (_super) {
    __extends(ApplicationEntity, _super);
    function ApplicationEntity() {
        var _this = _super.call(this, "AE") || this;
        _this.maxLength = 16;
        _this.padByte = "20";
        _this.fillWith = "20";
        return _this;
    }
    ApplicationEntity.prototype.readBytes = function (stream, length, _syntax) {
        return stream.readString(length).trim();
    };
    return ApplicationEntity;
}(StringRepresentation));
export { ApplicationEntity };
var CodeString = /** @class */ (function (_super) {
    __extends(CodeString, _super);
    function CodeString() {
        var _this = _super.call(this, "CS") || this;
        _this.maxLength = 16;
        _this.padByte = "20";
        return _this;
    }
    ;
    CodeString.prototype.readBytes = function (stream, length, _syntax) {
        //return this.readNullPaddedString(stream, length).trim();
        return stream.readString(length).trim();
    };
    return CodeString;
}(StringRepresentation));
export { CodeString };
var AgeString = /** @class */ (function (_super) {
    __extends(AgeString, _super);
    function AgeString() {
        var _this = _super.call(this, "AS") || this;
        _this.maxLength = 4;
        _this.padByte = "20";
        _this.fixed = true;
        _this.defaultValue = "";
        return _this;
    }
    return AgeString;
}(StringRepresentation));
export { AgeString };
var AttributeTag = /** @class */ (function (_super) {
    __extends(AttributeTag, _super);
    function AttributeTag() {
        var _this = _super.call(this, "AT") || this;
        _this.maxLength = 4;
        _this.valueLength = 4;
        _this.padByte = "00";
        _this.fixed = true;
        return _this;
    }
    ;
    AttributeTag.prototype.readBytes = function (stream, length, _syntax) {
        var group = stream.readUint16(), element = stream.readUint16();
        return tagFromNumbers(group, element).value;
    };
    AttributeTag.prototype.writeBytes = function (stream, value) {
        return _super.prototype.writeBytes.call(this, stream, value, _super.prototype.write.call(this, stream, "Uint32", value));
    };
    return AttributeTag;
}(ValueRepresentation));
export { AttributeTag };
var DateValue = /** @class */ (function (_super) {
    __extends(DateValue, _super);
    function DateValue(value) {
        var _this = _super.call(this, "DA", value) || this;
        _this.maxLength = 18;
        _this.padByte = "20";
        //this.fixed = true;
        _this.defaultValue = "";
        return _this;
    }
    return DateValue;
}(StringRepresentation));
export { DateValue };
var DecimalString = /** @class */ (function (_super) {
    __extends(DecimalString, _super);
    function DecimalString() {
        var _this = _super.call(this, "DS") || this;
        _this.maxLength = 16;
        _this.padByte = "20";
        return _this;
    }
    DecimalString.prototype.readBytes = function (stream, length, _syntax) {
        //return this.readNullPaddedString(stream, length).trim();
        return stream.readString(length).trim();
    };
    return DecimalString;
}(StringRepresentation));
export { DecimalString };
var DateTime = /** @class */ (function (_super) {
    __extends(DateTime, _super);
    function DateTime() {
        var _this = _super.call(this, "DT") || this;
        _this.maxLength = 26;
        _this.padByte = "20";
        return _this;
    }
    return DateTime;
}(StringRepresentation));
export { DateTime };
var FloatingPointSingle = /** @class */ (function (_super) {
    __extends(FloatingPointSingle, _super);
    function FloatingPointSingle() {
        var _this = _super.call(this, "FL") || this;
        _this.maxLength = 4;
        _this.padByte = "00";
        _this.fixed = true;
        _this.defaultValue = 0.0;
        return _this;
    }
    FloatingPointSingle.prototype.readBytes = function (stream, length, _syntax) {
        return stream.readFloat();
    };
    FloatingPointSingle.prototype.writeBytes = function (stream, value) {
        return _super.prototype.writeBytes.call(this, stream, value, _super.prototype.write.call(this, stream, "Float", value));
    };
    return FloatingPointSingle;
}(ValueRepresentation));
export { FloatingPointSingle };
var FloatingPointDouble = /** @class */ (function (_super) {
    __extends(FloatingPointDouble, _super);
    function FloatingPointDouble() {
        var _this = _super.call(this, "FD") || this;
        _this.maxLength = 8;
        _this.padByte = "00";
        _this.fixed = true;
        _this.defaultValue = 0.0;
        return _this;
    }
    FloatingPointDouble.prototype.readBytes = function (stream, length, _syntax) {
        return stream.readDouble();
    };
    FloatingPointDouble.prototype.writeBytes = function (stream, value) {
        return _super.prototype.writeBytes.call(this, stream, value, _super.prototype.write.call(this, stream, "Double", value));
    };
    return FloatingPointDouble;
}(ValueRepresentation));
export { FloatingPointDouble };
var IntegerString = /** @class */ (function (_super) {
    __extends(IntegerString, _super);
    function IntegerString() {
        var _this = _super.call(this, "IS") || this;
        _this.maxLength = 12;
        _this.padByte = "20";
        return _this;
    }
    IntegerString.prototype.readBytes = function (stream, length, _syntax) {
        //return this.readNullPaddedString(stream, length);
        return stream.readString(length).trim();
    };
    return IntegerString;
}(StringRepresentation));
export { IntegerString };
var LongString = /** @class */ (function (_super) {
    __extends(LongString, _super);
    function LongString() {
        var _this = _super.call(this, "LO") || this;
        _this.maxCharLength = 64;
        _this.padByte = "20";
        return _this;
    }
    LongString.prototype.readBytes = function (stream, length, _syntax) {
        //return this.readNullPaddedString(stream, length).trim();
        return stream.readString(length).trim();
    };
    return LongString;
}(StringRepresentation));
export { LongString };
var LongText = /** @class */ (function (_super) {
    __extends(LongText, _super);
    function LongText() {
        var _this = _super.call(this, "LT") || this;
        _this.maxCharLength = 10240;
        _this.padByte = "20";
        return _this;
    }
    LongText.prototype.readBytes = function (stream, length, _syntax) {
        //return rtrim(this.readNullPaddedString(stream, length));
        return rtrim(stream.readString(length));
    };
    return LongText;
}(StringRepresentation));
export { LongText };
var PersonName = /** @class */ (function (_super) {
    __extends(PersonName, _super);
    function PersonName() {
        var _this = _super.call(this, "PN") || this;
        _this.maxLength = undefined;
        _this.padByte = "20";
        _this.checkLength = function (value) {
            var cmps = value.split(/\^/);
            for (var i in cmps) {
                var cmp = cmps[i];
                if (cmp.length > 64)
                    return false;
            }
            return true;
        };
        return _this;
    }
    PersonName.prototype.readBytes = function (stream, length, _syntax) {
        //return rtrim(this.readNullPaddedString(stream, length));
        return rtrim(stream.readString(length));
    };
    return PersonName;
}(StringRepresentation));
export { PersonName };
var ShortString = /** @class */ (function (_super) {
    __extends(ShortString, _super);
    function ShortString() {
        var _this = _super.call(this, "SH") || this;
        _this.maxCharLength = 16;
        _this.padByte = "20";
        return _this;
    }
    ShortString.prototype.readBytes = function (stream, length, _syntax) {
        //return this.readNullPaddedString(stream, length).trim();
        return stream.readString(length).trim();
    };
    return ShortString;
}(StringRepresentation));
export { ShortString };
var SignedLong = /** @class */ (function (_super) {
    __extends(SignedLong, _super);
    function SignedLong() {
        var _this = _super.call(this, "SL") || this;
        _this.maxLength = 4;
        _this.padByte = "00";
        _this.fixed = true;
        _this.defaultValue = 0;
        return _this;
    }
    SignedLong.prototype.readBytes = function (stream, length, _syntax) {
        return stream.readInt32();
    };
    SignedLong.prototype.writeBytes = function (stream, value) {
        return _super.prototype.writeBytes.call(this, stream, value, _super.prototype.write.call(this, stream, 'Int32', value));
    };
    return SignedLong;
}(ValueRepresentation));
export { SignedLong };
var SequenceOfItems = /** @class */ (function (_super) {
    __extends(SequenceOfItems, _super);
    function SequenceOfItems() {
        var _this = _super.call(this, "SQ") || this;
        _this.maxLength = undefined;
        _this.padByte = "00";
        _this.noMultiple = true;
        return _this;
    }
    SequenceOfItems.prototype.readBytes = function (stream, sqlength, syntax) {
        if (sqlength == 0x0) {
            return []; //contains no dataset
        }
        else {
            var undefLength = sqlength == 0xffffffff, elements = [], read = 0;
            while (true) {
                var tag = readTag(stream);
                read += 4;
                if (tag.is(0xfffee0dd)) {
                    stream.readUint32();
                    break;
                }
                else if (!undefLength && (read == sqlength)) {
                    break;
                }
                else if (tag.is(0xfffee000)) {
                    var length_1 = stream.readUint32();
                    read += 4;
                    var itemStream = null, toRead = 0, undef = length_1 == 0xffffffff;
                    if (undef) {
                        var stack = 0;
                        while (1) {
                            var g = stream.readUint16();
                            if (g == 0xfffe) {
                                var ge = stream.readUint16();
                                if (ge == 0xe00d) {
                                    stack--;
                                    if (stack < 0) {
                                        stream.increment(4);
                                        read += 8;
                                        break;
                                    }
                                    else {
                                        toRead += 4;
                                    }
                                }
                                else if (ge == 0xe000) {
                                    stack++;
                                    toRead += 4;
                                }
                                else {
                                    toRead += 2;
                                    stream.increment(-2);
                                }
                            }
                            else {
                                toRead += 2;
                            }
                        }
                    }
                    else {
                        toRead = length_1;
                    }
                    if (toRead) {
                        stream.increment(undef ? (-toRead - 8) : 0);
                        itemStream = stream.more(toRead); //parseElements
                        read += toRead;
                        if (undef)
                            stream.increment(8);
                        var items = DicomMessage.read(itemStream, syntax);
                        elements.push(items);
                    }
                    if (!undefLength && (read == sqlength)) {
                        break;
                    }
                }
            }
            return elements;
        }
    };
    SequenceOfItems.prototype.writeBytes = function (stream, value, syntax) {
        // var startOffset = stream.offset,
        var written = 0;
        if (value) {
            for (var i = 0; i < value.length; i++) {
                var item = value[i];
                _super.prototype.write.call(this, stream, "Uint16", 0xfffe);
                _super.prototype.write.call(this, stream, "Uint16", 0xe000);
                _super.prototype.write.call(this, stream, "Uint32", 0xffffffff);
                written += DicomMessage.write(item, stream, syntax);
                _super.prototype.write.call(this, stream, "Uint16", 0xfffe);
                _super.prototype.write.call(this, stream, "Uint16", 0xe00d);
                _super.prototype.write.call(this, stream, "Uint32", 0x00000000);
                written += 16;
            }
        }
        _super.prototype.write.call(this, stream, "Uint16", 0xfffe);
        _super.prototype.write.call(this, stream, "Uint16", 0xe0dd);
        _super.prototype.write.call(this, stream, "Uint32", 0x00000000);
        written += 8;
        // var totalLength = stream.offset - startOffset;
        return _super.prototype.writeBytes.call(this, stream, value, [written]);
    };
    return SequenceOfItems;
}(ValueRepresentation));
export { SequenceOfItems };
var SignedShort = /** @class */ (function (_super) {
    __extends(SignedShort, _super);
    function SignedShort() {
        var _this = _super.call(this, "SS") || this;
        _this.maxLength = 2;
        _this.valueLength = 2;
        _this.padByte = "00";
        _this.fixed = true;
        _this.defaultValue = 0;
        return _this;
    }
    SignedShort.prototype.readBytes = function (stream, length, _syntax) {
        return stream.readInt16();
    };
    SignedShort.prototype.writeBytes = function (stream, value) {
        return _super.prototype.writeBytes.call(this, stream, value, _super.prototype.write.call(this, stream, "Int16", value));
    };
    return SignedShort;
}(ValueRepresentation));
export { SignedShort };
var ShortText = /** @class */ (function (_super) {
    __extends(ShortText, _super);
    function ShortText() {
        var _this = _super.call(this, "ST") || this;
        _this.maxCharLength = 1024;
        _this.padByte = "20";
        return _this;
    }
    ShortText.prototype.readBytes = function (stream, length, _syntax) {
        //return rtrim(this.readNullPaddedString(stream, length));
        return rtrim(stream.readString(length));
    };
    return ShortText;
}(StringRepresentation));
export { ShortText };
var TimeValue = /** @class */ (function (_super) {
    __extends(TimeValue, _super);
    function TimeValue() {
        var _this = _super.call(this, "TM") || this;
        _this.maxLength = 14;
        _this.padByte = "20";
        return _this;
    }
    TimeValue.prototype.readBytes = function (stream, length, _syntax) {
        return rtrim(stream.readString(length));
    };
    return TimeValue;
}(StringRepresentation));
export { TimeValue };
var UnlimitedCharacters = /** @class */ (function (_super) {
    __extends(UnlimitedCharacters, _super);
    function UnlimitedCharacters() {
        var _this = _super.call(this, "UC") || this;
        _this.maxLength = undefined;
        _this.multi = true;
        _this.padByte = "20";
        return _this;
    }
    UnlimitedCharacters.prototype.readBytes = function (stream, length, _syntax) {
        return rtrim(stream.readString(length));
    };
    return UnlimitedCharacters;
}(StringRepresentation));
export { UnlimitedCharacters };
var UnlimitedText = /** @class */ (function (_super) {
    __extends(UnlimitedText, _super);
    function UnlimitedText() {
        var _this = _super.call(this, "UT") || this;
        _this.maxLength = undefined;
        _this.padByte = "20";
        return _this;
    }
    UnlimitedText.prototype.readBytes = function (stream, length, _syntax) {
        //return this.readNullPaddedString(stream, length);
        return rtrim(stream.readString(length));
    };
    return UnlimitedText;
}(StringRepresentation));
export { UnlimitedText };
var UnsignedShort = /** @class */ (function (_super) {
    __extends(UnsignedShort, _super);
    function UnsignedShort() {
        var _this = _super.call(this, "US") || this;
        _this.maxLength = 2;
        _this.padByte = "00";
        _this.fixed = true;
        _this.defaultValue = 0;
        return _this;
    }
    UnsignedShort.prototype.readBytes = function (stream, length, _syntax) {
        return stream.readUint16();
    };
    UnsignedShort.prototype.writeBytes = function (stream, value) {
        return _super.prototype.writeBytes.call(this, stream, value, _super.prototype.write.call(this, stream, "Uint16", value));
    };
    return UnsignedShort;
}(ValueRepresentation));
export { UnsignedShort };
var UnsignedLong = /** @class */ (function (_super) {
    __extends(UnsignedLong, _super);
    function UnsignedLong() {
        var _this = _super.call(this, "UL") || this;
        _this.maxLength = 4;
        _this.padByte = "00";
        _this.fixed = true;
        _this.defaultValue = 0;
        return _this;
    }
    UnsignedLong.prototype.readBytes = function (stream, length, _syntax) {
        return stream.readUint32();
    };
    UnsignedLong.prototype.writeBytes = function (stream, value) {
        return _super.prototype.writeBytes.call(this, stream, value, _super.prototype.write.call(this, stream, "Uint32", value));
    };
    return UnsignedLong;
}(ValueRepresentation));
export { UnsignedLong };
var UniqueIdentifier = /** @class */ (function (_super) {
    __extends(UniqueIdentifier, _super);
    function UniqueIdentifier() {
        var _this = _super.call(this, "UI") || this;
        _this.maxLength = 64;
        _this.padByte = "00";
        return _this;
    }
    UniqueIdentifier.prototype.readBytes = function (stream, length, _syntax) {
        return this.readNullPaddedString(stream, length);
    };
    return UniqueIdentifier;
}(StringRepresentation));
export { UniqueIdentifier };
var UniversalResource = /** @class */ (function (_super) {
    __extends(UniversalResource, _super);
    function UniversalResource() {
        var _this = _super.call(this, "UR") || this;
        _this.maxLength = undefined;
        _this.padByte = "20";
        return _this;
    }
    UniversalResource.prototype.readBytes = function (stream, length, _syntax) {
        return stream.readString(length);
    };
    return UniversalResource;
}(StringRepresentation));
export { UniversalResource };
var UnknownValue = /** @class */ (function (_super) {
    __extends(UnknownValue, _super);
    function UnknownValue() {
        var _this = _super.call(this, "UN") || this;
        _this.maxLength = undefined;
        _this.padByte = "00";
        _this.noMultiple = true;
        return _this;
    }
    UnknownValue.prototype.readBytes = function (stream, length, _syntax) {
        return stream.readString(length);
    };
    return UnknownValue;
}(StringRepresentation));
export { UnknownValue };
var OtherWordString = /** @class */ (function (_super) {
    __extends(OtherWordString, _super);
    function OtherWordString() {
        var _this = _super.call(this, "OW") || this;
        _this.maxLength = undefined;
        _this.padByte = "00";
        _this.noMultiple = true;
        return _this;
    }
    return OtherWordString;
}(BinaryRepresentation));
export { OtherWordString };
var OtherByteString = /** @class */ (function (_super) {
    __extends(OtherByteString, _super);
    function OtherByteString() {
        var _this = _super.call(this, "OB") || this;
        _this.maxLength = undefined;
        _this.padByte = "00";
        _this.noMultiple = true;
        return _this;
    }
    return OtherByteString;
}(BinaryRepresentation));
export { OtherByteString };
//# sourceMappingURL=ValueRepresentation.js.map