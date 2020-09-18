var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import policyFor from './Policies';
import sjcl from './sjcl.sha512';
import Validator from './Validator';
// Prefix from Medical Connections
var UIDPREFIX = "1.2.826.0.1.3680043.10.341.";
// We want to keep the hash algorithm the same to preserve references.
function bucketAge(oldAge) {
    var _a, _b;
    if (oldAge.vr == "AS" && ((_a = oldAge.Value[0]) === null || _a === void 0 ? void 0 : _a.length) == 4) {
        // handle age-string like 011M for 11 months old
        var ageStep = oldAge.Value[0].slice(3, 4);
        var ageNum = parseInt(oldAge.Value[0].slice(0, 3));
        if (ageStep == 'Y') {
            // Values lower than 90 years are 'not identifying', per
            // https://www.hhs.gov/hipaa/for-professionals/privacy/special-topics/de-identification/index.html
            // Values over 90 may be considered identifying information.
            if (ageNum > 90) {
                ageNum = 90;
            }
            return (ageNum + "Y").padStart(4, '0');
        }
        if (ageStep == 'M') {
            // No more precision than 'years' allowed.
            ageNum = Math.round(ageNum / 12);
            return (ageNum + "Y").padStart(4, '0');
        }
        if (ageStep == 'W') {
            // No more precision than 'years' allowed.
            ageNum = Math.round(ageNum / 52);
            return (ageNum + "Y").padStart(4, '0');
        }
        if (ageStep == 'D') {
            // No more precision than 'years' allowed.
            ageNum = Math.round(ageNum / 365);
            return (ageNum + "Y").padStart(4, '0');
        }
        return "";
    }
    if (oldAge.vr == "DA") {
        // handle date string
        if (((_b = oldAge.Value[0]) === null || _b === void 0 ? void 0 : _b.length) != 8) {
            return "";
        }
        // Replace month/day with zeroes
        return oldAge.Value[0].slice(0, 4) + "0000";
    }
    return "";
}
;
/**
* A hashed UID will make sure there's no information hidden in the UID
* but will maintain relationships between dicoms (e.g. same frame of reference)
*/
function hashedUid(oldUid, force) {
    if (force === void 0) { force = false; }
    var prefix = UIDPREFIX + "512.";
    if (!oldUid.startsWith(prefix) || force) {
        var bits = sjcl.hash.sha512.hash(oldUid);
        return prefix + Math.abs(bits[0]) + "." + Math.abs(bits[1]);
    }
    else {
        return oldUid;
    }
}
;
/**
* This will generate a random UID
*/
function randomUid() {
    var rando = Math.floor(Math.random() * 99999999999999999999);
    return UIDPREFIX + "777." + rando;
}
;
/**
* Generate a randomised Patient ID which of <= 8 chars
*/
function randomPatientID() {
    var max = Math.pow(36, 8);
    var id = (Math.floor(Math.random() * max)).toString(36).toUpperCase();
    return id;
}
;
function applyPolicy(dcm, policy) {
    var newDcm = {};
    for (var _i = 0, _a = Object.keys(dcm); _i < _a.length; _i++) {
        var key = _a[_i];
        // Use default action or action specified in policy
        var rule = policy["default"];
        if (key in policy) {
            rule = policy[key];
        }
        var action = rule["action"];
        // For keep actions we can just pass the tag accross...
        if (action == "keep") {
            newDcm[key] = dcm[key];
            // TODO: I'm going to assume we're only regenerating UIDs and they
            // always have a VM (multiplicity) of 1, which may be a bad assumption
        }
        else if (action == "regenerate") {
            var oldTag = cloneTag(dcm[key]);
            if (rule["method"] == "random") {
                oldTag["Value"] = [randomUid()];
            }
            else if (rule["method"] == "age") {
                oldTag["Value"] = [bucketAge(oldTag)];
            }
            else if (rule["method"] == "hash") {
                oldTag["Value"] = [hashedUid(oldTag["Value"][0])];
            }
            newDcm[key] = oldTag;
            // Then to remove we're just not going to add anything for now.
            // There could be different methods to remove (e.g. just clear the value)
        }
        else if (action == "remove") {
            // Replacement can be used for tags that require a value..
        }
        else if (action == "replace" && rule["value"]) {
            oldTag = cloneTag(dcm[key]);
            // We're assuming the policy is correct for VR, etc.
            oldTag["Value"] = rule["value"];
            newDcm[key] = oldTag;
        }
    }
    return newDcm;
}
;
// This is the main anonymization function.
export default function anonymize(dcm) {
    // Get the policy for this SOP Class
    var sopClassUid = dcm['00080016'];
    var policy = policyFor(sopClassUid["Value"][0]);
    // Apply the anonymization policy.
    var newDcm = applyPolicy(dcm, policy);
    // Check that we don't have ay dealbreaker warnings...
    var warnings = Validator(newDcm);
    var worked = true;
    for (var _i = 0, _a = Object.keys(warnings); _i < _a.length; _i++) {
        var key = _a[_i];
        for (var _b = 0, _c = warnings[key]; _b < _c.length; _b++) {
            var warning = _c[_b];
            worked = worked && warning.level > 1;
        }
    }
    // Add Patient Identity Removed tag (0012,0062)
    if (worked) {
        newDcm["00120062"] = { vr: "CS", Value: ["YES"] };
    }
    else {
        newDcm["00120062"] = { vr: "CS", Value: ["NO"] };
    }
    // Add Patient Identity Removal Method tag (0012,0062)
    newDcm["00120063"] = { vr: "LO", Value: ["Radiopaedia Dicom Anonymizer. github.com/radiopaedia/dicomanon"] };
    ;
    //var warnings = validate(newDcm);
    return newDcm;
}
;
function cloneTag(oldTag) {
    return {
        Value: __spreadArrays(oldTag.Value),
        vr: "" + oldTag.vr,
    };
}
//# sourceMappingURL=Anon.js.map