import TagData from "./TagData";
export function supportedSOPClasses() {
    return [
        "1.2.840.10008.5.1.4.1.1.1.1",
        "1.2.840.10008.5.1.4.1.1.1.1.1",
        "1.2.840.10008.5.1.4.1.1.1.2",
        "1.2.840.10008.5.1.4.1.1.1.2.1",
        "1.2.840.10008.5.1.4.1.1.2",
        //"1.2.840.10008.5.1.4.1.1.2.1", // Enhanced CT Image
        //"1.2.840.10008.5.1.4.1.1.2.2", // Legacy Converted Enhanced CT Image
        "1.2.840.10008.5.1.4.1.1.3.1",
        "1.2.840.10008.5.1.4.1.1.4",
        //"1.2.840.10008.5.1.4.1.1.4.1", // Enhanced MR Image
        "1.2.840.10008.5.1.4.1.1.4.2",
        //"1.2.840.10008.5.1.4.1.1.4.3", // Enhanced MR Color Image
        "1.2.840.10008.5.1.4.1.1.6.1",
        "1.2.840.10008.5.1.4.1.1.12.1",
        //"1.2.840.10008.5.1.4.1.1.12.1.1", // Enhanced XA Image
        "1.2.840.10008.5.1.4.1.1.12.2",
        "1.2.840.10008.5.1.4.1.1.13.1.1",
        "1.2.840.10008.5.1.4.1.1.20",
        "1.2.840.10008.5.1.4.1.1.128",
    ];
}
function validateAplicationEntityVR(tag) {
    //let values = tag["Value"];
    var warnings = Array();
    // This is a pretty broadly defined VR
    return warnings;
}
// We shouldn't see age string values in anonymized datasets.
function validateAgeStringVR(tag) {
    var values = tag.Value;
    var warnings = Array();
    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        if (typeof value === "string" && value.length > 0 && !value.match(/^\d{1-3}Y$/)) {
            warnings.push({
                level: 1,
                text: "Anonymised data should not include age data.",
            });
        }
    }
    return warnings;
}
function validateAttributeTagVR(tag) {
    var values = tag["Value"];
    var warnings = Array();
    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        if (typeof value === "string" && !(value in TagData)) {
            warnings.push({
                level: 3,
                text: values[i] + " was not an expected attribute tag.",
            });
        }
    }
    return warnings;
}
function validateCodeStringVR(tag) {
    var values = tag["Value"];
    var warnings = Array();
    for (var i = 0; i < values.length; i++) {
        // Code string values should be uppercase.
        var value = values[i];
        if (typeof value === "string" && /[a-z]/.test(value)) {
            warnings.push({
                level: 3,
                text: values[i] + " is not an expected value for codestring",
            });
        }
    }
    return warnings;
}
//YYYYMMDD
function validateDateVR(tag) {
    var values = tag["Value"];
    var warnings = Array();
    for (var i = 0; i < values.length; i++) {
        // Code string values should be uppercase.
        if (values[i] != "19700101") {
            warnings.push({
                level: 2,
                text: values[i] +
                    " is a date that has not been replaced with 19700101 by the policy. This may include personal information",
            });
        }
    }
    return warnings;
}
function validateDecimalStringVR(tag) {
    var values = tag["Value"];
    var warnings = Array();
    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        // Valid chars are 0-9, e, E - +
        // Just a quick test for bad chars.
        if (typeof value === "string" && (/[a-d]/.test(value) ||
            /[f-z]/.test(value) ||
            /[A-D]/.test(value) ||
            /[F-Z]/.test(value))) {
            warnings.push({
                level: 3,
                text: value + " is not an expected value for a decimal string",
            });
        }
    }
    return warnings;
}
function validateDateTimeVR(tag) {
    var values = tag["Value"];
    var warnings = Array();
    for (var i = 0; i < values.length; i++) {
        // Code string values should be uppercase.
        if (values[i] != "19700101000000.000000") {
            warnings.push({
                level: 2,
                text: values[i] +
                    " is a datetime that has not been replaced with 19700101000000.000000 by the policy. This may include personal information",
            });
        }
    }
    return warnings;
}
function validateFloatingPointSingleVR(tag) {
    //TODO (Probably a cast?)
    return Array();
}
function validateFloatingPointDoubleVR(tag) {
    //TODO (Probably a cast?)
    return Array();
}
function validateIntegerStringVR(tag) {
    var warnings = Array();
    var values = tag["Value"];
    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        // Valid chars are 0-9, e, E - +
        // Just a quick test for bad chars.
        if (typeof value === "string" && (/[a-d]/.test(value) ||
            /[f-z]/.test(value) ||
            /[A-D]/.test(value) ||
            /[F-Z]/.test(value))) {
            warnings.push({
                level: 3,
                text: value + " is not an expected value for a integer string",
            });
        }
    }
    return warnings;
}
function validateLongStringVR(tag) {
    var warnings = Array();
    var values = tag["Value"];
    for (var i = 0; i < values.length; i++) {
        // Valid chars are 0-9, e, E - +
        // Just a quick test for bad chars.
        warnings.push({
            level: 4,
            text: "Long strings may include personal data.",
        });
    }
    return warnings;
}
/// The "Other X" types are all (by design) pretty wide open byte streams with
/// arbitrary encoding schemes. Not much we can do to check...
function validateOtherByteVR(tag) {
    return Array();
}
function validateOtherDoubleStringVR(tag) {
    return Array();
}
function validateOtherFloatStringVR(tag) {
    return Array();
}
function validateOtherWordStringVR(tag) {
    return Array();
}
function validatePersonNameVR(tag) {
    var values = tag["Value"];
    var warnings = Array();
    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        if (typeof value === "string" && value.length > 0) {
            warnings.push({
                level: 1,
                text: value +
                    " is a person name and should not be included in Anonymised data",
            });
        }
    }
    return warnings;
}
function validateShortStringVR(tag) {
    var values = tag["Value"];
    var warnings = Array();
    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        if (typeof value === "string" && value.trim.length > 16) {
            warnings.push({
                level: 3,
                text: values[i] + " has more data than expected for a short string.",
            });
        }
    }
    return warnings;
}
function validateSignedLongVR(tag) {
    //TODO (Probably a cast?)
    return Array();
}
function validateSequenceVR(tag) {
    //Not going to get into recurssive structures...
    return Array();
}
function validateSignedShortVR(tag) {
    //TODO (Probably a cast?)
    return Array();
}
function validateShortTextVR(tag) {
    var values = tag["Value"];
    var warnings = Array();
    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        if (typeof value === "string" && value.trim.length > 1024) {
            warnings.push({
                level: 3,
                text: values[i] + " has more data than expected for a short text.",
            });
        }
    }
    return warnings;
}
function validateTimeVR(tag) {
    var values = tag["Value"];
    var warnings = Array();
    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        // Just a quick test for bad chars.
        if ((typeof value === "string") && (/[a-d]/.test(value) ||
            /[f-z]/.test(value) ||
            /[A-D]/.test(value) ||
            /[F-Z]/.test(value))) {
            warnings.push({
                level: 3,
                text: value + " is not an expected value for a time string",
            });
        }
    }
    return warnings;
}
function validateUIDVR(tag) {
    var values = tag["Value"];
    var warnings = Array();
    for (var i = 0; i < values.length; i++) {
        // Just a quick test for bad chars.
        var value = values[i];
        if ((typeof value === "string") && (/[a-z]/.test(value) || /[A-Z]/.test(value))) {
            warnings.push({
                level: 3,
                text: value + " is not an expected value for a UID",
            });
        }
    }
    return warnings;
}
function validateUnsignedLongVR(tag) {
    //TODO (Probably a cast?)
    return Array();
}
function validateUnsignedShortVR(tag) {
    //TODO (Probably a cast?)
    return Array();
}
function validateUndefinedVR(tag) {
    var warnings = Array();
    warnings.push({ level: 3, text: "Tag's VR field is undefined" });
    return warnings;
}
//function checkMultiplicity(tag): IValidatorWarning[]{
//  //TODO
//  return  Array<IValidatorWarning>();
//};
var validateDict = {
    AE: validateAplicationEntityVR,
    AS: validateAgeStringVR,
    AR: validateAttributeTagVR,
    CS: validateCodeStringVR,
    DA: validateDateVR,
    DS: validateDecimalStringVR,
    DT: validateDateTimeVR,
    FL: validateFloatingPointSingleVR,
    FD: validateFloatingPointDoubleVR,
    IS: validateIntegerStringVR,
    LO: validateLongStringVR,
    OB: validateOtherByteVR,
    OD: validateOtherDoubleStringVR,
    OF: validateOtherFloatStringVR,
    OW: validateOtherWordStringVR,
    PN: validatePersonNameVR,
    SH: validateShortStringVR,
    SL: validateSignedLongVR,
    SQ: validateSequenceVR,
    SS: validateSignedShortVR,
    ST: validateShortTextVR,
    TM: validateTimeVR,
    UI: validateUIDVR,
    UL: validateUnsignedLongVR,
    US: validateUnsignedShortVR,
    undefined: validateUndefinedVR,
};
export default function validate(dcm) {
    var warnings = {};
    for (var _i = 0, _a = Object.keys(dcm); _i < _a.length; _i++) {
        var key = _a[_i];
        var vrKey = dcm[key]["vr"];
        if (validateDict[vrKey]) {
            var warningsList = validateDict[vrKey](dcm[key]);
            warnings[key] = warningsList;
            // Check if the annotations are burnt in:
            if (key == "00280301") {
                var values = dcm[key]["Value"];
                for (var i = 0; i < values.length; i++) {
                    // Just a quick test for bad chars.
                    if (values[i] != "NO") {
                        warnings["00280301"] = [
                            {
                                level: 1,
                                text: "Image contains burnt-in annotations which cannot be anonymized.",
                            },
                        ];
                    }
                }
            }
            // Check if the there are recognizable features
            if (key == "00280302") {
                var values = dcm[key]["Value"];
                for (var i = 0; i < values.length; i++) {
                    // Just a quick test for bad chars.
                    if (values[i] == "YES") {
                        warnings["00280302"] = [
                            {
                                level: 1,
                                text: "Image contains recognizable visual features which cannot be anonymized.",
                            },
                        ];
                    }
                }
            }
            // Check if the there are recognizable features
            if (key == "00120062") {
                var values = dcm[key]["Value"];
                for (var i = 0; i < values.length; i++) {
                    // Just a quick test for bad chars.
                    if (values[i] == "NO") {
                        warnings["00120062"] = [
                            { level: 1, text: "Image has not had personal data removed." },
                        ];
                    }
                }
            }
        }
    }
    return warnings;
}
//# sourceMappingURL=Validator.js.map