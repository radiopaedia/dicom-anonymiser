var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import ValueRepresentation from "./ValueRepresentation";
import { DicomDict } from "./Message";
import dictionary from "./dictionary";
var DicomMetaDictionary = /** @class */ (function () {
    function DicomMetaDictionary() {
    }
    DicomMetaDictionary.punctuateTag = function (rawTag) {
        if (rawTag.indexOf(",") != -1) {
            return rawTag;
        }
        if (rawTag.length == 8 && rawTag == rawTag.match(/[0-9a-fA-F]*/)[0]) {
            var tag = rawTag.toUpperCase();
            return "(" + tag.substring(0, 4) + "," + tag.substring(4, 8) + ")";
        }
    };
    DicomMetaDictionary.unpunctuateTag = function (tag) {
        if (tag.indexOf(",") == -1) {
            return tag;
        }
        return tag.substring(1, 10).replace(",", "");
    };
    // fixes some common errors in VRs
    // TODO: if this gets longer it could go in ValueRepresentation.js
    // or in a dedicated class
    DicomMetaDictionary.cleanDataset = function (dataset) {
        var cleanedDataset = {};
        for (var tag in dataset) {
            var data = dataset[tag];
            if (data.vr == "SQ") {
                var cleanedValues = [];
                for (var index in data.Value) {
                    cleanedValues.push(DicomMetaDictionary.cleanDataset(data.Value[index]));
                }
                data.Value = cleanedValues;
            }
            else {
                // remove null characters from strings
                for (var index in data.Value) {
                    var dataItem = data.Value[index];
                    if (dataItem.constructor.name == "String") {
                        data.Value[index] = dataItem.replace(/\0/, "");
                    }
                }
            }
            cleanedDataset[tag] = data;
        }
        return cleanedDataset;
    };
    // unlike naturalizeDataset, this only
    // changes the names of the member variables
    // but leaves the values intact
    DicomMetaDictionary.namifyDataset = function (dataset) {
        var namedDataset = {};
        for (var tag in dataset) {
            var data = dataset[tag];
            if (data.vr == "SQ") {
                var namedValues = [];
                for (var index in data.Value) {
                    namedValues.push(DicomMetaDictionary.namifyDataset(data.Value[index]));
                }
                data.Value = namedValues;
            }
            var punctuatedTag = DicomMetaDictionary.punctuateTag(tag);
            var entry = DicomMetaDictionary.dictionary[punctuatedTag];
            var name = tag;
            if (entry) {
                name = entry.name;
            }
            namedDataset[name] = data;
        }
        return namedDataset;
    };
    // converts from DICOM JSON Model dataset
    // to a natural dataset
    // - sequences become lists
    // - the suffix "Sequence" is dropped
    // - the suffix "UID" is dropped
    // - uids are mapped to strings when known
    // - object member names are dictionary, not group/element tag
    DicomMetaDictionary.naturalizeDataset = function (dataset) {
        var naturalDataset = {
            _vrMap: {},
        };
        for (var tag in dataset) {
            var data = dataset[tag];
            if (data.vr == "SQ") {
                // convert sequence to list of values
                var naturalValues = [];
                for (var index in data.Value) {
                    naturalValues.push(DicomMetaDictionary.naturalizeDataset(data.Value[index]));
                }
                data.Value = naturalValues;
            }
            var punctuatedTag = DicomMetaDictionary.punctuateTag(tag);
            var entry = DicomMetaDictionary.dictionary[punctuatedTag];
            var naturalName = tag;
            if (entry) {
                naturalName = entry.name;
                if (entry.vr == "ox") {
                    // when the vr is data-dependent, keep track of the original type
                    naturalDataset._vrMap[naturalName] = data.vr;
                }
            }
            if (/.*Sequence/.test(naturalName)) {
                // remove Sequence from name of list
                naturalName = naturalName.substring(0, naturalName.length - "Sequence".length);
            }
            naturalDataset[naturalName] = data.Value;
            if (naturalDataset[naturalName].length == 1) {
                // only one value is not a list
                naturalDataset[naturalName] = naturalDataset[naturalName][0];
            }
            if (/.*SOPClassUID/.test(naturalName)) {
                // give natural language name to UID if available
                var sopClassName = DicomMetaDictionary.sopClassNamesByUID[naturalDataset[naturalName]];
                if (sopClassName) {
                    var uidlessName = naturalName;
                    if (/.*UID/.test(naturalName)) {
                        // strip the UID at the end, since this is now a name not a UID
                        uidlessName = naturalName.substring(0, naturalName.length - 3);
                    }
                    delete naturalDataset[naturalName];
                    naturalDataset[uidlessName] = sopClassName;
                }
            }
        }
        return naturalDataset;
    };
    DicomMetaDictionary.denaturalizeName = function (naturalName) {
        var name = naturalName;
        var sequenceName = naturalName + "Sequence";
        if (DicomMetaDictionary.nameMap[sequenceName]) {
            name = sequenceName;
        }
        var uidName = name + "UID";
        if (DicomMetaDictionary.nameMap[uidName]) {
            name = uidName;
        }
        return name;
    };
    DicomMetaDictionary.denaturalizeValue = function (naturalValue) {
        var value = naturalValue;
        // if it's a known UID, map back to numbers
        var uid = DicomMetaDictionary.uidMap[naturalValue];
        if (uid) {
            value = uid;
        }
        if (!Array.isArray(value)) {
            value = [value];
        }
        value = value.map(function (entry) {
            return entry.constructor.name == "Number" ? String(entry) : entry;
        });
        return value;
    };
    DicomMetaDictionary.denaturalizeDataset = function (dataset) {
        var unnaturalDataset = {};
        Object.keys(dataset).forEach(function (naturalName) {
            // check if it's a sequence
            var name = naturalName;
            name = DicomMetaDictionary.denaturalizeName(name);
            var entry = DicomMetaDictionary.nameMap[name];
            if (entry) {
                var dataValue = dataset[naturalName];
                if (dataValue === undefined || dataValue === null) {
                    // handle the case where it was deleted from the object but is in keys
                    return;
                }
                // process this one entry
                var dataItem = {
                    vr: entry.vr,
                    Value: dataset[naturalName],
                };
                if (entry.vr == "ox") {
                    if (dataset._vrMap && dataset._vrMap[naturalName]) {
                        dataItem.vr = dataset._vrMap[naturalName];
                    }
                    else {
                        console.error("No value representation given for", naturalName);
                    }
                }
                var div = DicomMetaDictionary.denaturalizeValue(dataItem.Value);
                dataItem.Value = div;
                if (entry.vr == "SQ") {
                    var unnaturalValues = [];
                    dataItem.Value.forEach(function (nestedDataset) {
                        unnaturalValues.push(DicomMetaDictionary.denaturalizeDataset(nestedDataset));
                    });
                    div = dataItem.Value = unnaturalValues;
                }
                var vr = ValueRepresentation.createByTypeString(dataItem.vr);
                var ml = vr.maxLength;
                if (!vr.isBinary() && ml) {
                    for (var i in div) {
                        var value = div[i];
                        if (value && typeof value === "string" && value.length > ml) {
                            div[i] = value.slice(0, ml);
                        }
                    }
                }
                var tag = DicomMetaDictionary.unpunctuateTag(entry.tag);
                unnaturalDataset[tag] = dataItem;
            }
            else {
                console.warn("Unknown name in dataset", name, ":", dataset[name]);
            }
        });
        return unnaturalDataset;
    };
    DicomMetaDictionary.datasetToBlob = function (dataset) {
        // create a meta dataset,
        // then associate it with a part 10 binary stream
        // as a file blob
        var meta = DicomMetaDictionary.denaturalizeDataset({
            // TODO: generate FileMetaInformationVersion de novo
            FileMetaInformationVersion: dataset._meta.FileMetaInformationVersion.Value[0],
            MediaStorageSOPClass: dataset.SOPClass,
            MediaStorageSOPInstance: dataset.SOPInstanceUID,
            TransferSyntaxUID: "1.2.840.10008.1.2",
            ImplementationClassUID: DicomMetaDictionary.uid(),
            ImplementationVersionName: "dcmio-0.0",
        });
        var dicomDict = new DicomDict(meta);
        dicomDict.dict = DicomMetaDictionary.denaturalizeDataset(dataset);
        var buffer = dicomDict.write();
        var blob = new Blob([buffer], { type: "application/dicom" });
        return blob;
    };
    DicomMetaDictionary.uid = function () {
        var uid = "2.25." + Math.floor(1 + Math.random() * 9);
        for (var index = 0; index < 38; index++) {
            uid = uid + Math.floor(Math.random() * 10);
        }
        return uid;
    };
    // date and time in UTC
    DicomMetaDictionary.date = function () {
        var now = new Date();
        return now.toISOString().replace(/-/g, "").slice(0, 8);
    };
    DicomMetaDictionary.time = function () {
        var now = new Date();
        return now.toISOString().replace(/:/g, "").slice(11, 17);
    };
    DicomMetaDictionary.dateTime = function () {
        var now = new Date();
        return now.toISOString().replace(/:/g, "").slice(11, 17);
    };
    DicomMetaDictionary._generateNameMap = function () {
        for (var tag in DicomMetaDictionary.dictionary) {
            var dict = DicomMetaDictionary.dictionary[tag];
            DicomMetaDictionary.nameMap[dict.name] = __assign(__assign({}, dict), { tag: tag });
        }
    };
    DicomMetaDictionary._generateUIDMap = function () {
        DicomMetaDictionary.uidMap = {};
        for (var uid in DicomMetaDictionary.sopClassNamesByUID) {
            var name = DicomMetaDictionary.sopClassNamesByUID[uid];
            DicomMetaDictionary.uidMap[name] = uid;
        }
    };
    DicomMetaDictionary.nameMap = {};
    DicomMetaDictionary.uidMap = {};
    // Subset of those listed at:
    // http://dicom.nema.org/medical/dicom/current/output/html/part04.html#sect_B.5
    DicomMetaDictionary.sopClassNamesByUID = {
        "1.2.840.10008.5.1.4.1.1.2": "CTImage",
        "1.2.840.10008.5.1.4.1.1.2.1": "EnhancedCTImage",
        "1.2.840.10008.5.1.4.1.1.2.2": "LegacyConvertedEnhancedCTImage",
        "1.2.840.10008.5.1.4.1.1.3.1": "USMultiframeImage",
        "1.2.840.10008.5.1.4.1.1.4": "MRImage",
        "1.2.840.10008.5.1.4.1.1.4.1": "EnhancedMRImage",
        "1.2.840.10008.5.1.4.1.1.4.2": "MRSpectroscopy",
        "1.2.840.10008.5.1.4.1.1.4.3": "EnhancedMRColorImage",
        "1.2.840.10008.5.1.4.1.1.4.4": "LegacyConvertedEnhancedMRImage",
        "1.2.840.10008.5.1.4.1.1.6.1": "USImage",
        "1.2.840.10008.5.1.4.1.1.6.2": "EnhancedUSVolume",
        "1.2.840.10008.5.1.4.1.1.7": "SecondaryCaptureImage",
        "1.2.840.10008.5.1.4.1.1.66": "RawData",
        "1.2.840.10008.5.1.4.1.1.66.1": "SpatialRegistration",
        "1.2.840.10008.5.1.4.1.1.66.2": "SpatialFiducials",
        "1.2.840.10008.5.1.4.1.1.66.3": "DeformableSpatialRegistration",
        "1.2.840.10008.5.1.4.1.1.66.4": "Segmentation",
        "1.2.840.10008.5.1.4.1.1.67": "RealWorldValueMapping",
        "1.2.840.10008.5.1.4.1.1.88.11": "BasicTextSR",
        "1.2.840.10008.5.1.4.1.1.88.22": "EnhancedSR",
        "1.2.840.10008.5.1.4.1.1.88.33": "ComprehensiveSR",
        "1.2.840.10008.5.1.4.1.1.128": "PETImage",
        "1.2.840.10008.5.1.4.1.1.130": "EnhancedPETImage",
        "1.2.840.10008.5.1.4.1.1.128.1": "LegacyConvertedEnhancedPETImage",
    };
    DicomMetaDictionary.dictionary = dictionary;
    return DicomMetaDictionary;
}());
export default DicomMetaDictionary;
DicomMetaDictionary._generateNameMap();
DicomMetaDictionary._generateUIDMap();
//# sourceMappingURL=MetaDictionary.js.map