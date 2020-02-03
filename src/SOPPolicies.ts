export default function digitalXRay() {
    // A few examples of different actions that we can do...
    "default" : {"action":"remove", "description":"The default policy is to remove unspecified tags"},
    // Patient
    "00100010": {"action":"replace", "value":[""], "description":"Patient name will be replaced"},
	  "00100020": {"action":"replace", "value":[""], "description":"Patient ID will be replaced"},
	  "00100030": {"action":"replace", "value":[""], "description":"Patient DOB will be replaced"},
	  "00100040": {"action":"replace", "value":[""], "description":"Patient's sex will be replaced"},
    // General Study
    "0020000D": {"action":"regenerate", "method":"hash","description":"Study UID is hashed to preserve structure."},
    "00080020": {"action":"replace", "value":[""],"description":"Study date is replaced."},
    "00080030": {"action":"replace", "value":[""],"description":"Study time is replaced."},
    "00080090": {"action":"replace", "value":[""],"description":"Referring physician is replaced."},
    "00080016": {"action":"replace", "value":["1.2.840.10008.5.1.4.1.1.1.1"],"description":"SOP Class UID"},
    // General Series
    "00080060": {"action":"keep", "description":"Modality"},
    "0020000E": {"action":"regenerate", "method":"hash","description":"Series instance UID is hashed to preserve structure."},
    "00200011": {"action":"replace", "value":[""],"description":"Series number is replaced."},
    // CR Series
    "00180015": {"action":"replace", "value":[""],"description":"Body part is replaced."},
    "00200011": {"action":"keep", "description":"Keep the view position."},
    // General Equipment
    "00080070": {"action":"replace", "value":[""],"description":"Manufacturer is replaced."},
    // General Image
    "00200013": {"action":"keep","description":"Instance number is used for ordering the stack."},
    // Image pixel
    "00280002": {"action":"keep","description":"Samples per pixel."},
    "00280004": {"action":"keep", "description":"Photometric Interpretation"},
    "00280010": {"action":"keep", "description":"Rows"},
    "00280011": {"action":"keep", "description":"Columns"},
    "00280030": {"action":"keep", "description":"Pixel Spacing"},
    "00280100": {"action":"keep", "description":"Bits Allocated"},
    "00280101": {"action":"keep", "description":"Bits Stored"},
    "00280103": {"action":"keep", "description":"Pixel Representation"},
    // CR Image
      // Already keeping photometric Interpretation
    // SOP Common
      // Replaced SOP Class UID
    "0020000D": {"action":"regenerate", "method":"random","description":"SOP Storage Instance UID is hashed to preserve structure."},
    // The actual pixel data.
    "00280102": {"action":"keep", "description":"High Bit, required to decode pixel data"},
    "7FE00010": {"action":"keep", "description":"Pixel Data"}, // We need this or we won't have an image
};
