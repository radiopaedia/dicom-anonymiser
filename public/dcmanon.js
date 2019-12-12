
// Namespace
var dcmanon = dcmanon || {};
dcmanon.policy = dcmanon.policy || {"default":{"action":"remove","description":"failed to load"}};
// Prefix from Medical Connections
dcmanon.UIDPREFIX = "1.2.826.0.1.3680043.10.341.";
// We want to keep the hash algorithm the same to preserve references.
dcmanon.hash = sjcl.hash.sha512.hash;

/**
* A hashed UID will make sure there's no information hidden in the UID
* but will maintain relationships between dicoms (e.g. same frame of reference)
*/
dcmanon.hashedUid = function(oldUid, force=false) {
    var prefix =  dcmanon.UIDPREFIX + "512.";
    if (!oldUid.startsWith(prefix) || force) {
        var bits = dcmanon.hash(oldUid);
        return  prefix + Math.abs(bits[0]) + "." + Math.abs(bits[1]);
    } else {
        return oldUid;
    }
};

/**
* This will generate a random UID
*/
dcmanon.randomUid = function() {
    var rando = Math.floor(Math.random() * 99999999999999999999);
    return dcmanon.UIDPREFIX + "777." + rando;
};

dcmanon.clone = function(oldTag) {
    console.log(oldTag);
    var tag = {Value:[], vr:""};
    tag.Value = [...oldTag.Value];
    tag.vr = [...oldTag.vr];
    return tag;
}

// TODO: Test that there's no personal data stored outside the "Value" for a
// given tag. This should be the case, and we're making the assumption that the
// user is not maliciously trying to hide data.
dcmanon.anonymize = function(dict, policy) {
    var newDict = {};
    for(const [key, val] of Object.entries(dict)) {
        // Use default action or action specified in policy
        var rule = policy["default"];
        if (key in policy) { rule = policy[key]; }
        var action = rule["action"];
        // For keep actions we can just pass the tag accross...
        if (action == "keep") {
            newDict[key] = dict[key];
        // TODO: I'm going to assume we're only regenerating UIDs and they
        // always have a VM (multiplicity) of 1, which may be a bad assumption
        } else if (action == "regenerate") {
            var oldTag = dcmanon.clone(dict[key]);
            if (rule["method"] == "random") {
                oldTag["Value"] = [dcmanon.randomUid()];
            } else if (rule["method"] == "hash") {
                oldTag["Value"] = [dcmanon.hashedUid(oldTag["Value"][0])];
            }
            newDict[key] = oldTag;
        // Then to remove we're just not going to add anything for now.
        // There could be different methods to remove (e.g. just clear the value)
        } else if (action == "remove") {
        // Replacement can be used for tags that require a value..
        } else if (action == "replace") {
            oldTag = dcmanon.clone(dict[key]);
            // We're assuming the policy is correct for VR, etc.
            oldTag["Value"] = rule["value"];
            newDict[key] = oldTag;
        }
    }

    return newDict;
};
