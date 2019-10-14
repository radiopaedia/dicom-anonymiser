var dcmanon = dcmanon || {};
dcmanon.policy = {
    // A few examples of different actions that we can do...
    "default" : {"action":"remove", "description":"The default policy is to remove unspecified tags"},
    "00100010": {"action":"replace", "value":["ANON^ANON"], "description":"Patient name will be replaced"},
    "0020000D": {"action":"regenerate", "method":"random","description":"Study UID is randomised."},
    "0020000E": {"action":"regenerate", "method":"hash","description":"Series UID is hashed to preserve relationships."},
    "00200052": {"action":"regenerate", "method":"hash","description":"Frame of reference is hashed to preserve relationships."},
    "00080016": {"action":"keep", "description":"SOP Class UID"},
    "00080060": {"action":"keep", "description":"Modality"},
    // These will be useful for converting the data to other formats
    // Also, this information is required to display the image
    "00080008": {"action":"keep", "description":"Image Type"},
    "00080005": {"action":"keep", "description":"Specific Character Set"},
    "00180095": {"action":"keep", "description":"Pixel Bandwidth"},
    "00280002": {"action":"keep", "description":"Samples per Pixel"},
    "00280004": {"action":"keep", "description":"Photometric Interpretation"},
    "00280010": {"action":"keep", "description":"Rows"},
    "00280011": {"action":"keep", "description":"Columns"},
    "00280030": {"action":"keep", "description":"Pixel Spacing"},
    "00280100": {"action":"keep", "description":"Bits Allocated"},
    "00280101": {"action":"keep", "description":"Bits Stored"},
    "00280103": {"action":"keep", "description":"Pixel Representation"},
    "00280106": {"action":"keep", "description":"Smallest Image Pixel Value"},
    "00280107": {"action":"keep", "description":"Largest Image Pixel Value"},
    "00281050": {"action":"keep", "description":"Window Center"},
    "00281051": {"action":"keep", "description":"Window Width"},
    "00281052": {"action":"keep", "description":"Rescale Intercept"},
    "00281053": {"action":"keep", "description":"Rescale Slope"},
    "00281055": {"action":"keep", "description":"Window Center & Width Explanation"},
    // Some optional extras that shouldn't be an issue
    "00180015": {"action":"keep", "description":"Body Part Examined"},
    "00180020": {"action":"keep", "description":"Scanning Sequence"},
    "00180021": {"action":"keep", "description":"Sequence Variant"},
    "00180022": {"action":"keep", "description":"Scan Options"},
    "00180050": {"action":"keep", "description":"Slice Thickness"},
    "00185100": {"action":"keep", "description":"Patient Position"},
    "00200032": {"action":"keep", "description":"Image Position (Patient)"},
    "00201041": {"action":"keep", "description":"Slice Location"},
    // The actual pixel data.
    "00280102": {"action":"keep", "description":"High Bit, required to decode pixel data"},
    "7FE00010": {"action":"keep", "description":"Pixel Data"}, // We need this or we won't have an image
};
