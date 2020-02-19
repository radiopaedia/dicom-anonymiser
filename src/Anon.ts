import policyFor from './Policies';
import validate from './Validator';
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

/**
* Generate a randomised Patient ID which of <= 8 chars
*/
function randomPatientID() {
	const max: number = Math.pow(36, 8);
	var id: string = (Math.floor(Math.random() * max)).toString(36).toUpperCase();
	return id;
};

function applyPolicy(dcm, policy){
  var newDcm = {};
  for(const key of Object.keys(dcm)) {
      console.log("inpit: VR:" + dcm[key]["vr"] + " val:" + dcm[key]["Value"] );
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
          if (rule["method"] == "random") {
              oldTag["Value"] = [randomUid()];
          } else if (rule["method"] == "hash") {
              oldTag["Value"] = [hashedUid(oldTag["Value"][0])];
          }
          newDcm[key] = oldTag;
      // Then to remove we're just not going to add anything for now.
      // There could be different methods to remove (e.g. just clear the value)
      } else if (action == "remove") {
      // Replacement can be used for tags that require a value..
      } else if (action == "replace") {
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
    console.log("Getting Policy for " + sopClassUid["Value"][0]);
    var policy = policyFor(sopClassUid["Value"][0]);
    // Apply the anonymization policy.
    var newDcm = applyPolicy(dcm, policy);

    var warnings = validate(newDcm);
};

const cloneTag = function(oldTag) {
    return {
        Value: [...oldTag.Value],
        vr: "" + oldTag.vr,
    };
}
