/******************************************************************************
  According to the DICOM standard each SOP is made up of multiple modules (these
  are broken up with comments within each policy). Each module is defined as
  Mandatory (M), conditional (C), or user optional (U).

  Within each module is a collection of tags. Each tag can be either required
  (type 1), required, empty if uknown (type 2), or optional (type 3). They may
  also be conditional of any type (i.e. 1C, 2C, 3C).

  As a general rule we are removing all non-mandatory modules (C or U). Tags of
  type 3 (or conditional types) are removed, type 2 are emptied. This will be
  the case unless it's reasonable and useful to keep the tag (with no personal
  information being retained). Type 1 tags are either kept, or replaced with
  random or cryptographically hashed values.
******************************************************************************/

export default interface IPolicy {
  [tagId: string]: any;
}

// Add the policy (base policy will be added to by overlay policy, overlay will overwrite existing)
export default function addPolicy(base: IPolicy, overlay: IPolicy): IPolicy {
  for (var key in overlay) {
    base[key] = overlay[key];
  }

  return base;
}

export default function addPolicies(...policies: IPolicy[]): IPolicy {
  if (policies.length < 1){ return null; }
  // Add all the policies together
  var base = policies[0];
  for (var i = 1; i < policies.length; i++) {
    var overlay = policies[i];
    base = addPolicy(base, overlay);
  }
  return base;
}

/******************************************************************************\
      MODULE POLICIES
      The module policies are used to build SOP class policies.
\******************************************************************************/

function patientModulePolicy(): IPolicy {
  return {
    "00100010": {"action":"replace", "value":[], "description":"Patient name will be replaced"},
	  "00100020": {"action":"replace", "value":[], "description":"Patient ID will be replaced"},
	  "00100030": {"action":"replace", "value":[], "description":"Patient DOB will be replaced"},
	  "00100040": {"action":"replace", "value":[], "description":"Patient's sex will be replaced"}
  };
}

function generalStudyModulePolicy(): IPolicy {
  return {
    "0020000D": {"action":"regenerate", "method":"hash","description":"Study UID is hashed to preserve structure."},
    "00080020": {"action":"replace", "value":[],"description":"Study date is replaced."},
    "00080030": {"action":"replace", "value":[],"description":"Study time is replaced."},
    "00080090": {"action":"replace", "value":[],"description":"Referring physician is replaced."},
    "00200010": {"action":"replace", "value":[],"description":"Study ID is replaced."},
    "00080050": {"action":"replace", "value":[],"description":"Accession number is replaced."},
    "00080016": {"action":"keep", "description":"SOP Class UID"}
  };
}

function generalSeriesModulePolicy(): IPolicy {
  return {
    "00080060": {"action":"keep", "description":"Modality"},
    "0020000E": {"action":"regenerate", "method":"hash","description":"Series instance UID is hashed to preserve structure."},
    "00200011": {"action":"replace", "value":[],"description":"Series number is replaced."}
  };
}

function dxSeriesModulePolicy(): IPolicy {
  return {
  "00080060": {"action":"keep", "description":"Modality"},
  "00080068": {"action":"keep", "description":"Presentation intent type."}
  };
}

function generalEquipmentModulePolicy(): IPolicy {
  return {
    "00080070": {"action":"replace", "value":[],"description":"Manufacturer is replaced."},
    "00280120": {"action":"keep","description":"Pixel Padding Value."} //1C but probably needed for viewing if there
  };
}

function generalImageModulePolicy(): IPolicy {
  return {
    "00200013": {"action":"keep","description":"Instance number is used for ordering the0008 stack."} //This is type 2 but useful
  };
}

function imagePixelModulePolicy(): IPolicy {
  return {
    "00280002": {"action":"keep","description":"Samples per pixel."},
    "00280004": {"action":"keep", "description":"Photometric Interpretation"},
    "00280010": {"action":"keep", "description":"Rows"},
    "00280011": {"action":"keep", "description":"Columns"},
    //"00280030": {"action":"keep", "description":"Pixel Spacing"},
    "00280100": {"action":"keep", "description":"Bits Allocated"},
    "00280101": {"action":"keep", "description":"Bits Stored"},
    "00280102": {"action":"keep", "description":"High Bit, required to decode pixel data"},
    "00280103": {"action":"keep", "description":"Pixel Representation"},
    "00280006": {"action":"keep", "description":"Planar Configuration"}, // Type 1C
    "00280034": {"action":"keep", "description":"Pixel Aspect Ratio"} // Type 1C
    "7FE00010": {"action":"keep", "description":"Pixel Data"}, // We need this or we won't have an image
  };
}

function dxAnatomyImagedModulePolicy(): { [tagId: string]: any; } {
  return {
    "00200062": {"action":"keep", "description":"Image Laterality"},
    "00082218": {"action":"replace", "value":[],"description":"Anatomic Region Sequence."}
  };
}

function dxImageModulePolicy() {
  return {
    "00080008": {"action":"keep", "description":"Image Type"},
    "00280002": {"action":"keep", "description":"Samples per pixel."},
    "00280004": {"action":"keep", "description":"Photometric Interpretation"},
    "00280100": {"action":"keep", "description":"Bits Allocated"},
    "00280101": {"action":"keep", "description":"Bits Stored"},
    "00280102": {"action":"keep", "description":"High Bit, required to decode pixel data"},
    "00280103": {"action":"keep", "description":"Pixel Representation"},
    "00281040": {"action":"keep", "description":"Pixel intensity relationship"},
    "00281041": {"action":"keep", "description":"Pixel intensity relationship sign"},
    "00281052": {"action":"keep", "description":"Rescale Intercept"},
    "00281053": {"action":"keep", "description":"Rescale Slope"},
    "00281054": {"action":"keep", "description":"Rescale Type"},
    "20500020": {"action":"keep", "description":"Presentation LUT Shape"},
    "00282110": {"action":"keep", "description":"Lossy Image Compression"},
    "00282112": {"action":"keep", "description":"Lossy Image Compression Ratio"},
    "00280301": {"action":"keep", "description":"Burned in Annotation"},
    "00281050": {"action":"keep", "description":"Window Center"}, // Type 1C, Handy for viewing
    "00281051": {"action":"keep", "description":"Window Width"} // Type 1C, handy for viewing
  };
}

function dxDetectorModulePolicy() {
  return {
    "00187004": {"action":"replace", "value":[],"description":"Detector type."},
    "00181164": {"action":"keep", "description":"Imager pixel spacing"}
  };
}

function  aquisitionContextModulePolicy() {
  return {
    "00400555": {"action":"replace", "value":[],"description":"Aquisition Context Sequence"}
  };
}

function  sopCommonModulePolicy() {
  return {
    "00080016": {"action":"keep", "description":"SOP Class UID"},
    "0020000D": {"action":"regenerate", "method":"random", "description":"SOP Storage Instance UID is hashed to preserve structure."}
  };
}

function  mammographySeriesModulePolicy() {
  return {
    "00080060": {"action":"keep", "description":"Modality"}
  };
}

function  mammographyImageModulePolicy() {
  return {
    "00080008": {"action":"keep", "description":"Image Type"},
    "00081508": {"action":"keep", "description":"PositionerType"},
    "00200062": {"action":"keep", "description":"ImageLaterality"},
    "00400318": {"action":"keep", "description":"OrganExposed"}
    // AnatomicRegionSequence is mandatory but fairly complicated. Will remove for now...
    //"00082218": {"action":"keep", "description":"AnatomicRegionSequence"},
  };
}

function  frameOfReferenceModulePolicy() {
  return {
    "00200052": {"action":"regenerate", "method":"hash","description":"Frame of Reference UID is mandatory and is hashed to preserve structure"}
  };
}

function  imagePlaneModulePolicy() {
  return {
    "00280030": {"action":"keep", "description":"Pixel Spacing"},
    "00200037": {"action":"keep", "description":"Image Orientation (Patient)"},
    "00200032": {"action":"keep", "description":"Image Position (Patient)"},
    "00180050": {"action":"keep", "description":"Slice Thickness"} // Type 2 but useful
  };
}

function  ctImageModulePolicy() {
  return {
    "00080008": {"action":"keep", "description":"Image Type"},
    "00280002": {"action":"keep", "description":"Samples per pixel"},
    "00280004": {"action":"keep", "description":"Photometric Interpretation"},
    "00280100": {"action":"keep", "description":"Bits Allocated"},
    "00280101": {"action":"keep", "description":"Bits Stored"},
    "00280102": {"action":"keep", "description":"High Bit, required to decode pixel data"},
    "00281052": {"action":"keep", "description":"Rescale Intercept"},
    "00281053": {"action":"keep", "description":"Rescale Slope"}
  };
}

/******************************************************************************\
      SOP POLICIES
      These are policies for supported SOP Classes made up of module policies.
\******************************************************************************/

export default function digitalXRayPolicy(): IPolicy {
  var classUID = "1.2.840.10008.5.1.4.1.1.1.1";
  return addPolicies(
    patientModulePolicy(),
    generalStudyModulePolicy(),
    generalSeriesModulePolicy(),
    dxSeriesModulePolicy(),
    generalEquipmentModulePolicy(),
    generalImageModulePolicy(),
    imagePixelModulePolicy(),
    dxAnatomyImagedModulePolicy(),
    dxImageModulePolicy(),
    dxDetectorModulePolicy(),
    aquisitionContextModulePolicy(),
    sopCommonModulePolicy(),
    {
        "default" : {"action":"remove", "description":"The default policy is to remove unspecified tags"},
        "00080016": {"action":"replace", "value":[classUID],"description":"SOP Class UID"}
    }
  );
};

export default function digitalMammographyXRayPolicy(): IPolicy {
  var classUID = "1.2.840.10008.5.1.4.1.1.1.2";
  return addPolicies(
    patientModulePolicy(),
    generalStudyModulePolicy(),
    generalSeriesModulePolicy(),
    dxSeriesModulePolicy(),
    mammographySeriesModulePolicy(),
    generalEquipmentModulePolicy(),
    generalImageModulePolicy(),
    imagePixelModulePolicy(),
    dxAnatomyImagedModulePolicy(),
    dxImageModulePolicy(),
    dxDetectorModulePolicy(),
    mammographyImageModulePolicy(),
    aquisitionContextModulePolicy(),
    sopCommonModulePolicy(),
    {
        "default" : {"action":"remove", "description":"The default policy is to remove unspecified tags"},
        "00080016": {"action":"replace", "value":[classUID],"description":"SOP Class UID"}
    }
  );
};

export default function ctImagePolicy(): IPolicy {
  var classUID = "1.2.840.10008.5.1.4.1.1.2";
  return addPolicies(
    patientModulePolicy(),
    generalStudyModulePolicy(),
    generalSeriesModulePolicy(),
    frameOfReferenceModulePolicy(),
    generalEquipmentModulePolicy(),
    generalImageModulePolicy(),
    imagePlaneModulePolicy(),
    imagePixelModulePolicy(),
    ctImageModulePolicy(),
    sopCommonModulePolicy(),
    {
        "default" : {"action":"remove", "description":"The default policy is to remove unspecified tags"},
        "00080016": {"action":"replace", "value":[classUID],"description":"SOP Class UID"}
    }
  );
};
