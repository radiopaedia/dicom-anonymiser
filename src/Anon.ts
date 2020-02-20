import policy from './DefaultPolicy';
import sjcl from './sjcl.sha512';
// Prefix from Medical Connections
const UIDPREFIX = "1.2.826.0.1.3680043.10.341.";
// We want to keep the hash algorithm the same to preserve references.

/**
* A hashed UID will make sure there's no information hidden in the UID
* but will maintain relationships between dicoms (e.g. same frame of reference)
*/
function hashedUid(oldUid, force=false) {
    var prefix =  UIDPREFIX + "512.";
    if (!oldUid.startsWith(prefix) || force) {
        var bits = sjcl.hash.sha512.hash(oldUid);
        return  prefix + Math.abs(bits[0]) + "." + Math.abs(bits[1]);
    } else {
        return oldUid;
    }
};

/**
* This will generate a random UID
*/
function randomUid() {
    var rando = Math.floor(Math.random() * 99999999999999999999);
    return UIDPREFIX + "777." + rando;
};

//CMHM new function to check that what is in fields is proper
//below are fields that are kept
// the psuedocode fot what I am going to add is this: 
// if a field, for exmaple "00080060" contains ("CT" or "MRI" or "Xray" or "flouro" or "US" or "ultrasound" in the DICOM language- must check:
//     "action":"keep"
// else 
// //     "action":"remove"
// OBVIOUSLY I NEED TO CHECK that CT and MRI are not hashed or encoded or entered as Numbers or , or or,or
// // "00080016": {"action":"keep", "description":"SOP Class UID"},
// The following are additional fields to check:
// "00080060": { "description":"Modality"},
// "00080008": { "description":"Image Type"},
// "00080005": {"description":"Specific Character Set"},
// "00180095": { "description":"Pixel Bandwidth"},
// "00280002": { "description":"Samples per Pixel"},
// "00280004": { "description":"Photometric Interpretation"},
// "00280010": { "description":"Rows"},
// "00280011": { "description":"Columns"},
// "00280030": { "description":"Pixel Spacing"},
// "00280100": {"description":"Bits Allocated"},
// "00280101": { "description":"Bits Stored"},
// "00280103": {"description":"Pixel Representation"},
// "00280106": {"description":"Smallest Image Pixel Value"},
// "00280107": {" "description":"Largest Image Pixel Value"},
// "00281050": {"description":"Window Center"},
// "00281051": {"description":"Window Width"},
// "00281052": {"description":"Rescale Intercept"},
// "00281053": { "description":"Rescale Slope"},
// "00281055": { "description":"Window Center & Width Explanation"},
// "00180015": { "description":"Body Part Examined"},
// "00180020": { "description":"Scanning Sequence"},
// "00180021": { "description":"Sequence Variant"},
// "00180022": { "description":"Scan Options"},
// "00180050": { "description":"Slice Thickness"},
// "00185100": { "description":"Patient Position"},
// "00200032": { "description":"Image Position (Patient)"},
// "00201041": { "description":"Slice Location"},
// // and also lt's check about the actual pixel data. perhaps even in later versions for steganography
// "00280102": { "description":"High Bit, required to decode pixel data"},
// "7FE00010": { "description":"Pixel Data"}, 
//
// TODO: Test that there's no personal data stored outside the "Value" for a
// given tag. This should be the case, and we're making the assumption that the
// user is not maliciously trying to hide data.
export default function anonymize(dict) {
    var newDict = {};
    for(const key of Object.keys(dict)) {
        // Use default action or action specified in policy
    //CONSIDER MOVING NEXT LINE OUTSIDE THE LOOP! (CMHM)
        var rule = policy["default"];
        //what happens if key is not in policy? ??? (CMHM)
        if (key in policy) { rule = policy[key]; }
        var action = rule["action"];
        // For keep actions we can just pass the tag accross...
        if (action == "keep") {
            newDict[key] = dict[key];
        // TODO: I'm going to assume we're only regenerating UIDs and they
        // always have a VM (multiplicity) of 1, which may be a bad assumption
        } else if (action == "regenerate") {
            var oldTag = cloneTag(dict[key]);
            if (rule["method"] == "random") {
                oldTag["Value"] = [randomUid()];
            } else if (rule["method"] == "hash") {
                oldTag["Value"] = [hashedUid(oldTag["Value"][0])];
            }
            newDict[key] = oldTag;
        // Then to remove we're just not going to add anything for now.
        // There could be different methods to remove (e.g. just clear the value)
        } else if (action == "remove") {
        // Replacement can be used for tags that require a value..
        } else if (action == "replace") {
            oldTag = cloneTag(dict[key]);
            // We're assuming the policy is correct for VR, etc.
            oldTag["Value"] = rule["value"];
            newDict[key] = oldTag;
        }
    }

    return newDict;
};

const cloneTag = function(oldTag) {
    return {
        Value: [...oldTag.Value],
        vr: "" + oldTag.vr,
    };
}

