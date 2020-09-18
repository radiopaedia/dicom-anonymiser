import policyFor, { IPolicy } from './Policies';
import sjcl from './sjcl.sha512';
import Validator from './Validator'
import {CodeString, LongString} from './ValueRepresentation'
import DicomDict, { TagValue } from './Message'

// Prefix from Medical Connections
const UIDPREFIX = "1.2.826.0.1.3680043.10.341.";
// We want to keep the hash algorithm the same to preserve references.

function bucketWeight(oldWeight: TagValue): string {
    // babies have a weight in grams. grossly obese have a weight in
    const weight = parseInt(oldWeight.Value[0])
    if (!weight) {
        return ""
    }
    if (weight < 30 || weight > 140) {
        // Bucketing may not be enough; discard data.
        return ""
    }

    // Round to nearest 5kg.
    return `${Math.round(weight / 5) * 5}`
}

function bucketAge(oldAge: TagValue): string {
    if (oldAge.vr == "AS" && oldAge.Value[0]?.length == 4) {
        // handle age-string like 011M for 11 months old
        let ageStep = oldAge.Value[0].slice(3,4);
        let ageNum = parseInt(oldAge.Value[0].slice(0,3));
        if (ageStep == 'Y') {
            // Values lower than 90 years are 'not identifying', per
            // https://www.hhs.gov/hipaa/for-professionals/privacy/special-topics/de-identification/index.html
            // Values over 90 may be considered identifying information.
            if (ageNum > 90) {
                ageNum = 90;
            }
            return `${ageNum}Y`.padStart(4, '0');
        }
        if (ageStep == 'M') {
            // No more precision than 'years' allowed.
            ageNum = Math.round(ageNum / 12);
            return `${ageNum}Y`.padStart(4, '0');
        }
        if (ageStep == 'W') {
            // No more precision than 'years' allowed.
            ageNum = Math.round(ageNum / 52);
            return `${ageNum}Y`.padStart(4, '0');
        }
        if (ageStep == 'D') {
            // No more precision than 'years' allowed.
            ageNum = Math.round(ageNum / 365);
            return `${ageNum}Y`.padStart(4, '0');
        }
        return ""
    }

    if (oldAge.vr == "DA") {
        // handle date string
        if (oldAge.Value[0]?.length != 8) {
            return "";
        }

        // Replace month/day with zeroes
        return oldAge.Value[0].slice(0, 4) + "0000"
    }
    return ""
};

/**
* A hashed UID will make sure there's no information hidden in the UID
* but will maintain relationships between dicoms (e.g. same frame of reference)
*/
function hashedUid(oldUid: string, force=false): string {
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

/**
* Generate a randomised Patient ID which of <= 8 chars
*/
function randomPatientID() {
	const max: number = Math.pow(36, 8);
	var id: string = (Math.floor(Math.random() * max)).toString(36).toUpperCase();
	return id;
};

function applyPolicy(dcm: Record<string, TagValue>, policy: IPolicy){
  var newDcm = {};
  for(const key of Object.keys(dcm)) {
      // Use default action or action specified in policy
      var rule = policy["default"];
      if (key in policy) { rule = policy[key]; }
      var action = rule["action"];
      // For keep actions we can just pass the tag accross...
      if (action == "keep") {
          newDcm[key] = dcm[key];
      // TODO: I'm going to assume we're only regenerating UIDs and they
      // always have a VM (multiplicity) of 1, which may be a bad assumption
      } else if (action == "regenerate") {
          var oldTag = cloneTag(dcm[key]);
          if (rule.method == "random") {
              oldTag["Value"] = [randomUid()];
          } else if (rule.method == "weight") {
              oldTag["Value"] = [bucketWeight(oldTag)];
          } else if (rule.method == "age") {
              oldTag["Value"] = [bucketAge(oldTag)];
          } else if (rule.method == "hash") {
              oldTag["Value"] = [hashedUid(oldTag["Value"][0])];
          } else if (rule.method == undefined) {
            // do nothing if action is undefined
          } else {
            // exhastiveness
            const _: never = rule["method"];
          }
          newDcm[key] = oldTag;
      // Then to remove we're just not going to add anything for now.
      // There could be different methods to remove (e.g. just clear the value)
      } else if (action == "remove") {
      // Replacement can be used for tags that require a value..
      } else if (action == "replace" && rule["value"]) {
          oldTag = cloneTag(dcm[key]);
          // We're assuming the policy is correct for VR, etc.
          oldTag["Value"] = rule["value"];
          newDcm[key] = oldTag;
      }
  }

  return newDcm;
};

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
    for(const key of Object.keys(warnings)){
      for(const warning of warnings[key]) {
        worked = worked && warning.level > 1;
      }
    }
    // Add Patient Identity Removed tag (0012,0062)
    if(worked) {
      newDcm["00120062"] = {vr:"CS", Value: ["YES"]};
    } else {
      newDcm["00120062"] = {vr:"CS", Value: ["NO"]};
    }
    // Add Patient Identity Removal Method tag (0012,0062)
    newDcm["00120063"] = {vr:"LO", Value:["Radiopaedia Dicom Anonymizer. github.com/radiopaedia/dicomanon"]};;

    //var warnings = validate(newDcm);
    return newDcm;
};

function cloneTag(oldTag: TagValue) {
    return {
        Value: [...oldTag.Value],
        vr: "" + oldTag.vr,
    };
}
