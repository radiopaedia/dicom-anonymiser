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

export type Action = "remove" | "replace" | "keep" | "regenerate";
export type ReplaceMethod = "hash" | "age" | "weight" | "random";

export interface IPolicy {
  [tagId: string]: {
    action: Action;
    description: string;
    value?: Array<any>;
    method?: ReplaceMethod;
  };
}

// Add the policy (base policy will be added to by overlay policy, overlay will overwrite existing)
function addPolicy(base: IPolicy, overlay: IPolicy): IPolicy {
  for (var key in overlay) {
    base[key] = overlay[key];
  }

  return base;
}

function addPolicies(...policies: IPolicy[]): IPolicy {
  if (policies.length < 1) {
    return {
      default: { action: "remove", description: "remove EVERYTHINNNGG!!!" },
    };
  }
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

function acquisitionContextModulePolicy(): IPolicy {
  return {
    "00400555": {
      action: "replace",
      value: [],
      description: "Acquisition Context Sequence",
    },
  };
}

function dxAnatomyImagedModulePolicy(): IPolicy {
  return {
    "00200062": { action: "keep", description: "Image Laterality" },
    "00082218": {
      action: "replace",
      value: [],
      description: "Anatomic Region Sequence.",
    },
  };
}

function dxDetectorModulePolicy(): IPolicy {
  return {
    "00187004": { action: "replace", value: [], description: "Detector type." },
    "00181164": { action: "keep", description: "Imager pixel spacing" },
  };
}

function dxImageModulePolicy(): IPolicy {
  return {
    "00080008": { action: "keep", description: "Image Type" },
    "00280002": { action: "keep", description: "Samples per pixel." },
    "00280004": { action: "keep", description: "Photometric Interpretation" },
    "00280100": { action: "keep", description: "Bits Allocated" },
    "00280101": { action: "keep", description: "Bits Stored" },
    "00280102": {
      action: "keep",
      description: "High Bit, required to decode pixel data",
    },
    "00280103": { action: "keep", description: "Pixel Representation" },
    "00281040": { action: "keep", description: "Pixel intensity relationship" },
    "00281041": {
      action: "keep",
      description: "Pixel intensity relationship sign",
    },
    "00281052": { action: "keep", description: "Rescale Intercept" },
    "00281053": { action: "keep", description: "Rescale Slope" },
    "00281054": { action: "keep", description: "Rescale Type" },
    "20500020": { action: "keep", description: "Presentation LUT Shape" },
    "00282110": { action: "keep", description: "Lossy Image Compression" },
    "00282112": {
      action: "keep",
      description: "Lossy Image Compression Ratio",
    },
    "00280301": { action: "keep", description: "Burned in Annotation" },
    "00281050": { action: "keep", description: "Window Center" }, // Type 1C, Handy for viewing
    "00281051": { action: "keep", description: "Window Width" }, // Type 1C, handy for viewing
    "00180081": { action: "keep", description: "Echo Time" },
    "00180082": { action: "keep", description: "Inversion Time" },
    "00180091": { action: "keep", description: "Echo Train Length" },
    "00080005": { action: "keep", description: "Specific Character Set" },
    "00180025": { action: "keep", description: "Angio Flag" },
    "00180083": { action: "keep", description: "Number of Averages" },
    "00180084": { action: "keep", description: "Imaging Frequency" },
    "00180085": { action: "keep", description: "Imaged Nucleus" },
    "00180086": { action: "keep", description: "Echo Number(s)" },
    "00180087": { action: "keep", description: "Magnetic Field Strength" },
    "00180088": { action: "keep", description: "Spacing Between Slices" },
    "00180093": { action: "keep", description: "Percent Sampling" },
    "00180094": { action: "keep", description: "Percent Phase Field of View" },
    "00180095": { action: "keep", description: "Pixel Bandwidth" },
    "00181088": { action: "keep", description: "Heart Rate" },
    "00181090": { action: "keep", description: "Cardiac Number of Images" },
    "00181094": { action: "keep", description: "Trigger Window" },
    "00181100": { action: "keep", description: "Reconstruction Diameter" },
    "00181250": { action: "keep", description: "Receive Coil Name" },
    "00181310": { action: "keep", description: "Acquisition Matrix" },
    "00181312": {
      action: "keep",
      description: "In-plane Phase Encoding Direction",
    },
    "00181314": { action: "keep", description: "Flip Angle" },
    "00181315": { action: "keep", description: "Variable Flip Angle Flag" },
    "00181316": { action: "keep", description: "SAR" },
    "00185100": { action: "keep", description: "Patient Position" },
    "00200060": { action: "keep", description: "Laterality" },
    "00201040": { action: "keep", description: "Position Reference Indicator" },
    "00201041": { action: "keep", description: "Slice Location" },
  };
}

function dxSeriesModulePolicy(): IPolicy {
  return {
    "00080060": { action: "keep", description: "Modality" },
    "00080068": { action: "keep", description: "Presentation intent type." },
  };
}

function generalEquipmentModulePolicy(): IPolicy {
  return {
    "00080070": {
      action: "replace",
      value: [],
      description: "Manufacturer is replaced.",
    },
    "00280120": { action: "keep", description: "Pixel Padding Value." }, //1C but probably needed for viewing if there
  };
}

function generalImageModulePolicy(): IPolicy {
  return {
    "00200013": {
      action: "keep",
      description: "Instance number is used for ordering the0008 stack.",
    }, //This is type 2 but useful
  };
}

function generalSeriesModulePolicy(): IPolicy {
  return {
    "00080060": { action: "keep", description: "Modality" },
    "0020000E": {
      action: "regenerate",
      method: "hash",
      description: "Series instance UID is hashed to preserve structure.",
    },
    "00200011": {
      action: "replace",
      value: [],
      description: "Series number is replaced.",
    },
  };
}

function generalStudyModulePolicy(): IPolicy {
  return {
    "0020000D": {
      action: "regenerate",
      method: "hash",
      description: "Study UID is hashed to preserve structure.",
    },
    "00080020": {
      action: "replace",
      value: [],
      description: "Study date is replaced.",
    },
    "00080030": {
      action: "replace",
      value: [],
      description: "Study time is replaced.",
    },
    "00080090": {
      action: "replace",
      value: [],
      description: "Referring physician is replaced.",
    },
    "00200010": {
      action: "replace",
      value: [],
      description: "Study ID is replaced.",
    },
    "00080050": {
      action: "replace",
      value: [],
      description: "Accession number is replaced.",
    },
    "00080016": { action: "keep", description: "SOP Class UID" },
  };
}

function imagePixelModulePolicy(): IPolicy {
  return {
    "00280002": { action: "keep", description: "Samples per pixel." },
    "00280004": { action: "keep", description: "Photometric Interpretation" },
    "00280010": { action: "keep", description: "Rows" },
    "00280011": { action: "keep", description: "Columns" },
    "00280030": { action: "keep", description: "Pixel Spacing" },
    "00280100": { action: "keep", description: "Bits Allocated" },
    "00280101": { action: "keep", description: "Bits Stored" },
    "00280102": {
      action: "keep",
      description: "High Bit, required to decode pixel data",
    },
    "00280103": { action: "keep", description: "Pixel Representation" },
    "00280006": { action: "keep", description: "Planar Configuration" }, // Type 1C
    "00280034": { action: "keep", description: "Pixel Aspect Ratio" }, // Type 1C
    "7FE00010": { action: "keep", description: "Pixel Data" }, // We need this or we won't have an image
  };
}

function patientModulePolicy(): IPolicy {
  return {
    "00100010": {
      action: "replace",
      value: [],
      description: "Patient name will be replaced",
    },
    "00100020": {
      action: "replace",
      value: [],
      description: "Patient ID will be replaced",
    },
    "00100030": {
      action: "regenerate",
      method: "age",
      description:
        "Patient DOB will be rounded to 1 year and replaced if over 90",
    },
    "00101030": {
      action: "regenerate",
      method: "weight",
      description:
        "Patient weight will be rounded to nearest 5kg if within 30..140kg, else replaced.",
    },
    "00100040": {
      action: "replace",
      value: [],
      description: "Patient's sex will be replaced",
    },
  };
}

function sopCommonModulePolicy(): IPolicy {
  return {
    "00080016": { action: "keep", description: "SOP Class UID" },
    "0020000D": {
      action: "regenerate",
      method: "hash",
      description: "SOP Storage Instance UID is hashed to preserve structure.",
    },
  };
}

function mammographySeriesModulePolicy(): IPolicy {
  return {
    "00080060": { action: "keep", description: "Modality" },
  };
}

function mammographyImageModulePolicy(): IPolicy {
  return {
    "00080008": { action: "keep", description: "Image Type" },
    "00081508": { action: "keep", description: "PositionerType" },
    "00200062": { action: "keep", description: "ImageLaterality" },
    "00400318": { action: "keep", description: "OrganExposed" },
    // AnatomicRegionSequence is mandatory but fairly complicated. Will remove for now...
    //"00082218": {"action":"keep", "description":"AnatomicRegionSequence"},
  };
}

function frameOfReferenceModulePolicy(): IPolicy {
  return {
    "00200052": {
      action: "regenerate",
      method: "hash",
      description:
        "Frame of Reference UID is mandatory and is hashed to preserve structure",
    },
  };
}

function imagePlaneModulePolicy(): IPolicy {
  return {
    "00280030": { action: "keep", description: "Pixel Spacing" },
    "00200037": { action: "keep", description: "Image Orientation (Patient)" },
    "00200032": { action: "keep", description: "Image Position (Patient)" },
    "00180050": { action: "keep", description: "Slice Thickness" }, // Type 2 but useful
  };
}

function ctImageModulePolicy(): IPolicy {
  return {
    "00080008": { action: "keep", description: "Image Type" },
    "00280002": { action: "keep", description: "Samples per pixel" },
    "00280004": { action: "keep", description: "Photometric Interpretation" },
    "00280100": { action: "keep", description: "Bits Allocated" },
    "00280101": { action: "keep", description: "Bits Stored" },
    "00280102": {
      action: "keep",
      description: "High Bit, required to decode pixel data",
    },
    "00281052": { action: "keep", description: "Rescale Intercept" },
    "00281053": { action: "keep", description: "Rescale Slope" },
  };
}

function cineModulePolicy(): IPolicy {
  return {
    "00181063": { action: "keep", description: "Frame Time" },
    "00181065": { action: "keep", description: "Frame Time Vector" },
    "003A0300": {
      action: "replace",
      value: [],
      description: "Multiplexed Audio Channels Description",
    },
  };
}

function mutliFrameModulePolicy(): IPolicy {
  return {
    "00280008": { action: "keep", description: "Number of Frames" },
    "00280009": { action: "keep", description: "Frame Increment Pointer" },
  };
}

function paletteColorLookupTablePolicy(): IPolicy {
  return {
    "00281101": {
      action: "keep",
      description: "Red Palette Color Lookup Table Descriptor",
    },
    "00281102": {
      action: "keep",
      description: "Green Palette Color Lookup Table Descriptor",
    },
    "00281103": {
      action: "keep",
      description: "Blue Palette Color Lookup Table Descriptor",
    },
    "00281201": {
      action: "keep",
      description: "Red Palette Color Lookup Table Data",
    },
    "00281202": {
      action: "keep",
      description: "Green Palette Color Lookup Table Data",
    },
    "00281203": {
      action: "keep",
      description: "Blue Palette Color Lookup Table Data",
    },
    "00281221": {
      action: "keep",
      description: "Segmented Red Palette Color Lookup Table Data",
    },
    "00281222": {
      action: "keep",
      description: "Segmented Blue Palette Color Lookup Table Data",
    },
    "00281223": {
      action: "keep",
      description: "Segmented Green Palette Color Lookup Table Data",
    },
  };
}

function ultrasoundImageModulePolicy(): IPolicy {
  return {
    "00280002": { action: "keep", description: "Samples per pixel" },
    "00280004": { action: "keep", description: "Photometric Interpretation" },
    "00280100": { action: "keep", description: "Bits Allocated" },
    "00280101": { action: "keep", description: "Bits Stored" },
    "00280102": {
      action: "keep",
      description: "High Bit, required to decode pixel data",
    },
    "00280006": { action: "keep", description: "Planar Configuration" },
    "00280103": { action: "keep", description: "Pixel Representation" },
    "00280009": { action: "keep", description: "Frame Increment Pointer" },
    "00080008": { action: "replace", value: [], description: "Image Type" },
    "00282110": { action: "keep", description: "Lossy Image Compression" },
    "00082124": {
      action: "replace",
      value: [],
      description: "Number of Stages",
    },
    "0008212A": {
      action: "replace",
      value: [],
      description: "Number of Views in Stage",
    },
  };
}

function mrImageModulePolicy(): IPolicy {
  return {
    "00080008": { action: "keep", description: "Image Type" },
    "00280002": { action: "keep", description: "Samples per pixel" },
    "00280004": { action: "keep", description: "Photometric Interpretation" },
    "00280100": { action: "keep", description: "Bits Allocated" },
    "00280101": { action: "keep", description: "Bits Stored" },
    "00180020": { action: "keep", description: "Scanning Sequence" },
    "00180021": { action: "keep", description: "Sequence Variant" },
    "00180022": { action: "keep", description: "Scan Options" }, // Type 2 but might want to display
    "00180023": { action: "keep", description: "MR Acquisition Type" }, // Type 2 but might want to display
    "00180080": {
      action: "replace",
      value: [],
      description: "Repetition Time",
    },
    "00180081": { action: "replace", value: [], description: "Echo Time" },
    "00180091": {
      action: "replace",
      value: [],
      description: "Echo Train Length",
    },
    "00180082": { action: "replace", value: [], description: "Inversion Time" },
    "00181060": { action: "replace", value: [], description: "Trigger Time" },
  };
}

function mrSeriesModulePolicy(): IPolicy {
  return {
    "00080060": { action: "keep", description: "Modality" },
  };
}

function enhancedGeneralEquipmentModulePolicy(): IPolicy {
  return {
    "00080070": {
      action: "replace",
      value: ["REMOVED"],
      description: "Manufacturer",
    },
    "00081090": {
      action: "replace",
      value: ["REMOVED"],
      description: "Manufacturer's Model Name",
    },
    "00181000": {
      action: "replace",
      value: ["REMOVED"],
      description: "Device Serial Number",
    },
    "00181020": {
      action: "replace",
      value: ["REMOVED"],
      description: "Software Versions",
    },
  };
}

function multiframeFunctionalGroupsSequenceModulePolicy(): IPolicy {
  return {
    "00200013": { action: "keep", description: "Instance Number" },
    "00080023": {
      action: "replace",
      value: ["19700101"],
      description: "Content Date",
    },
    "00080033": {
      action: "replace",
      value: ["0000"],
      description: "Content Time",
    },
    "00280008": { action: "keep", description: "Number of Frames" },
  };
}

function multiframeDimensionModulePolicy(): IPolicy {
  return {
    // TODO: We don't have a way to easily deal with nested tags right now.
    // For now we'll just wipe this since it has a UID in there somewhere which could
    // trace back to the institute and time/date where this was created.
  };
}

function mrSpectroscopyModulePolicy(): IPolicy {
  return {
    "00080008": { action: "keep", description: "Image Type" },
    "00089206": { action: "keep", description: "Volumetric Properties" },
    "00089207": {
      action: "keep",
      description: "Volume Based Calculation Technique",
    },
    "00089208": { action: "keep", description: "Complex Image Component" },
    "00089209": { action: "keep", description: "Acquisition Contrast" },
    "00189098": { action: "keep", description: "Transmitter Frequency" },
    "00189052": { action: "keep", description: "Spectral Width" },
    "00189053": { action: "keep", description: "Chemical Shift Reference" },
    "00189126": { action: "keep", description: "Volume Localization Sequence" },
    "00189059": { action: "keep", description: "Decoupling" },
    "00189060": { action: "keep", description: "Decoupled Nucleus" },
    "00189061": { action: "keep", description: "Decoupled Frequency" },
    "00189062": { action: "keep", description: "Decoupling Method" },
    "00189063": {
      action: "keep",
      description: "Decoupling Chemical Shift Reference",
    },
    "00189065": { action: "keep", description: "Time Domain Fitting" },
    "00189066": { action: "keep", description: "Number of Zero Fills" },
    "00189067": { action: "keep", description: "Baseline Correction" },
    "00189101": { action: "keep", description: "Frequency Correction" },
    "00189198": { action: "keep", description: "First Order Phase Correction" },
    "00189199": {
      action: "keep",
      description: "Water Referenced Phase Correction",
    },
    // Removed referenced image sequence (again, because it contains UID)
  };
}

function mrSpectroscopyDataModulePolicy(): IPolicy {
  return {
    "00280010": { action: "keep", description: "Rows" },
    "00280011": { action: "keep", description: "Columns" },
    "00289001": { action: "keep", description: "Data Point Rows" },
    "00289002": { action: "keep", description: "Data Point Columns" },
    "00289108": { action: "keep", description: "Data Representation" },
    "00289003": { action: "keep", description: "Signal Domain Columns" },
    "00289235": { action: "keep", description: "Signal Domain Rows" },
    "56000010": {
      action: "keep",
      description: "First Order Phase Correction Angle",
    },
    "56000020": { action: "keep", description: "Spectroscopy Data" },
  };
}

function xRayImageModulePolicy(): IPolicy {
  return {
    "00282110": { action: "keep", description: "Lossy Image Compression" },
    "00080008": { action: "keep", description: "Image Type" },
    "00281040": { action: "keep", description: "Pixel intensity relationship" },
    "00280002": { action: "keep", description: "Samples per pixel." },
    "00280004": { action: "keep", description: "Photometric Interpretation" },
    "00280100": { action: "keep", description: "Bits Allocated" },
    "00280101": { action: "keep", description: "Bits Stored" },
    "00280102": {
      action: "keep",
      description: "High Bit, required to decode pixel data",
    },
    "00280103": { action: "keep", description: "Pixel Representation" },
  };
}

function xRayAcquisitionModulePolicy(): IPolicy {
  return {
    "00180060": { action: "replace", value: [], description: "KVP" },
    "00181155": { action: "keep", description: "Radiation Setting" },
    "00181151": {
      action: "replace",
      value: [],
      description: "X-Ray Tube Current",
    },
    "00181150": { action: "replace", value: [], description: "Exposure Time" },
    "00181152": { action: "replace", value: [], description: "Exposure" },
    "00280030": { action: "keep", description: "Pixel Spacing" },
  };
}

function xaPositionerModulePolicy(): IPolicy {
  return {
    // Technically the module is mandatory but contains no type-1 or 2 fields
  };
}

function enhancedSeriesModulePolicy(): IPolicy {
  return {
    // Contains a series number identifying the device and a pair of UIDs
    // contained within a sequence (which we're ignoring). Even though both
    // fields are type 1, we're removing them.
  };
}

function xRay3DImageModulePolicy(): IPolicy {
  return {
    "00080008": { action: "keep", description: "Image Type" },
    "00089205": { action: "keep", description: "Pixel Presentation" },
    "00089206": { action: "keep", description: "Volumetric Properties" },
    "00089207": {
      action: "keep",
      description: "Volume Based Calculation Technique",
    },
    "00280100": { action: "keep", description: "Bits Allocated" },
    "00280101": { action: "keep", description: "Bits Stored" },
    "00280102": {
      action: "keep",
      description: "High Bit, required to decode pixel data",
    },
    "00280002": { action: "keep", description: "Samples per pixel." },
    "00280004": { action: "keep", description: "Photometric Interpretation" },
    "00189004": { action: "keep", description: "Content Qualification" },
    "00280301": { action: "keep", description: "Burned In Annotation" },
    "00280302": { action: "keep", description: "Recognizable Visual Features" },
    "00282110": { action: "keep", description: "Lossy Image Compression" },
    "00282112": { action: "keep", description: "Lossy Image Ratio" },
    "00282114": {
      action: "keep",
      description: "Lossy Image Compression Method",
    },
    "20500020": { action: "keep", description: "Presentation LUT Shape" },
  };
}

function nmPETPatientOrientationModulePolicy(): IPolicy {
  return {
    "00540410": {
      action: "replace",
      value: [],
      description: "Patient Orientation Sequence",
    },
    "00540414": {
      action: "replace",
      value: [],
      description: "Patient Gantry Relationship Code Sequence",
    },
  };
}

function nmImagePixelModulePolicy(): IPolicy {
  return {
    "00280002": { action: "keep", description: "Samples per pixel." },
    "00280004": { action: "keep", description: "Photometric Interpretation" },
    "00280100": { action: "keep", description: "Bits Allocated" },
    "00280101": { action: "keep", description: "Bits Stored" },
    "00280102": {
      action: "keep",
      description: "High Bit, required to decode pixel data",
    },
    "00280030": { action: "keep", description: "Pixel Spacing" },
  };
}

function multiframeModulePolicy(): IPolicy {
  return {
    "00280008": { action: "keep", description: "Number of Frames" },
    "00280009": { action: "keep", description: "Frame Increment Pointer" },
  };
}

function nmMultiframeModulePolicy(): IPolicy {
  return {
    "00280009": { action: "keep", description: "Frame Increment Pointer" },
    "00540010": { action: "keep", description: "Energy Window Vector" },
    "00540011": { action: "keep", description: "Number of Energy Windows" },
    "00540020": { action: "keep", description: "Detector Vector" },
    "00540021": { action: "keep", description: "Number of Detectors" },
    "00540030": { action: "keep", description: "Phase Vector" },
    "00540031": { action: "keep", description: "Number of Phases" },
    "00540050": { action: "keep", description: "Rotation Vector" },
    "00540051": { action: "keep", description: "Number of Rotations" },
    "00540060": { action: "keep", description: "R-R Internal Vector" },
    "00540061": { action: "keep", description: "Number of R-R Intervals" },
    "00540070": { action: "keep", description: "Time Slot Vector" },
    "00540071": { action: "keep", description: "Number of Time Slots" },
    "00540080": { action: "keep", description: "Slice Vector" },
    "00540081": { action: "keep", description: "Number of Slices" },
    "00540090": { action: "keep", description: "Angular View Vector" },
    "00540100": { action: "keep", description: "Time Slice Vector" },
  };
}

function nmImageModulePolicy(): IPolicy {
  return {
    "00080008": { action: "keep", description: "Image Type" },
    "00282110": { action: "keep", description: "Lossy Image Compression" },
    "00180070": {
      action: "replace",
      value: [],
      description: "Counts Accumulated",
    },
    "00181242": { action: "keep", description: "Actual Frame Duration" },
    "00181300": { action: "replace", value: [], description: "Scan Velocity" },
    "00181302": { action: "replace", value: [], description: "Scan Length" },
  };
}

function nmIsotopeModulePolicy(): IPolicy {
  return {
    "00540012": { action: "replace", value: [], description: "Scan Velocity" },
    "00540016": { action: "replace", value: [], description: "Scan Length" },
  };
}

function nmDetectorModulePolicy(): IPolicy {
  return {
    "00540022": {
      action: "replace",
      value: [],
      description: "Detector Information Sequence",
    },
  };
}

function petSeriesModulePolicy(): IPolicy {
  return {
    "00080021": {
      action: "replace",
      value: ["19700101"],
      description: "Series Date",
    },
    "00080031": {
      action: "replace",
      value: ["0000"],
      description: "Series Time",
    },
    "00541001": { action: "keep", description: "Units" },
    "00541002": { action: "keep", description: "Counts Source" },
    "00541000": { action: "keep", description: "Series Type" },
    "00541004": { action: "keep", description: "Reprojection Method" },
    "00540061": { action: "keep", description: "Number of R-R Intervals" },
    "00540071": { action: "keep", description: "Number of Time Slots" },
    "00540101": { action: "keep", description: "Number of Time Slices" },
    "00540081": { action: "keep", description: "Number of Slices" },
    "00541102": { action: "keep", description: "Decay Correction" },
    "00181181": {
      action: "replace",
      value: [],
      description: "Collimator Type",
    },
  };
}

function petIsotopeModulePolicy(): IPolicy {
  return {
    "00540016": {
      action: "replace",
      value: [],
      description: "Radiopharmaceuitical Information Sequence",
    },
  };
}

function petImageModulePolicy(): IPolicy {
  return {
    "00080008": { action: "keep", description: "Image Type" },
    "00280002": { action: "keep", description: "Samples per pixel." },
    "00280004": { action: "keep", description: "Photometric Interpretation" },
    "00280100": { action: "keep", description: "Bits Allocated" },
    "00280101": { action: "keep", description: "Bits Stored" },
    "00280102": {
      action: "keep",
      description: "High Bit, required to decode pixel data",
    },
    "00281040": { action: "keep", description: "Pixel intensity relationship" },
    "00280103": { action: "keep", description: "Pixel Representation" },
    "00281052": { action: "keep", description: "Rescale Intercept" },
    "00281053": { action: "keep", description: "Rescale Slope" },
    "00541300": { action: "keep", description: "Frame Reference Time" },
    "00181060": { action: "keep", description: "Trigger Time" },
    "00181063": { action: "keep", description: "Frame Time" },
    "00181081": { action: "keep", description: "Low R-R Value" },
    "00181082": { action: "keep", description: "High R-R Value" },
    "00282110": { action: "keep", description: "Lossy Image Compression" },
    "00541330": { action: "keep", description: "Image Index" },
    "00080022": {
      action: "replace",
      value: [],
      description: "Acquisition Date",
    },
    "00080032": {
      action: "replace",
      value: [],
      description: "Acquisition Time",
    },
    "00181242": {
      action: "replace",
      value: [],
      description: "Actual Frame Duration",
    },
    "00541321": { action: "keep", description: "Decay Factor" },
  };
}

function voiLutModulePolicy(): IPolicy {
  return {
    "00281050": { action: "keep", description: "Window Center" }, // Type 1C, Handy for viewing
    "00281051": { action: "keep", description: "Window Width" }, // Type 1C, handy for viewing
  };
}

/******************************************************************************\
      SOP POLICIES
      These are policies for supported SOP Classes made up of module policies.
\******************************************************************************/

function digitalXRayPolicy(): IPolicy {
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
    acquisitionContextModulePolicy(),
    sopCommonModulePolicy(),
    {
      default: {
        action: "remove",
        description: "The default policy is to remove unspecified tags",
      },
      "00080016": {
        action: "replace",
        value: [classUID],
        description: "SOP Class UID",
      },
    }
  );
}

function digitalMammographyXRayPolicy(): IPolicy {
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
    acquisitionContextModulePolicy(),
    sopCommonModulePolicy(),
    {
      default: {
        action: "remove",
        description: "The default policy is to remove unspecified tags",
      },
      "00080016": {
        action: "replace",
        value: [classUID],
        description: "SOP Class UID",
      },
    }
  );
}

function ctImagePolicy(): IPolicy {
  var classUID = "1.2.840.10008.5.1.4.1.1.2";
  return addPolicies(
    patientModulePolicy(),
    generalStudyModulePolicy(),
    generalSeriesModulePolicy(),
    dxImageModulePolicy(),
    frameOfReferenceModulePolicy(),
    generalEquipmentModulePolicy(),
    generalImageModulePolicy(),
    imagePlaneModulePolicy(),
    imagePixelModulePolicy(),
    ctImageModulePolicy(),
    voiLutModulePolicy(),
    sopCommonModulePolicy(),
    {
      default: {
        action: "remove",
        description: "The default policy is to remove unspecified tags",
      },
      "00080016": {
        action: "replace",
        value: [classUID],
        description: "SOP Class UID",
      },
    }
  );
}

function ultrasoundMultiframeImagePolicy(): IPolicy {
  var classUID = "1.2.840.10008.5.1.4.1.1.3.1";
  return addPolicies(
    patientModulePolicy(),
    generalStudyModulePolicy(),
    generalSeriesModulePolicy(),
    dxImageModulePolicy(),
    frameOfReferenceModulePolicy(),
    generalEquipmentModulePolicy(),
    generalImageModulePolicy(),
    imagePixelModulePolicy(),
    cineModulePolicy(),
    mutliFrameModulePolicy(),
    paletteColorLookupTablePolicy(),
    ultrasoundImageModulePolicy(),
    sopCommonModulePolicy(),
    {
      default: {
        action: "remove",
        description: "The default policy is to remove unspecified tags",
      },
      "00080016": {
        action: "replace",
        value: [classUID],
        description: "SOP Class UID",
      },
    }
  );
}

function mrImagePolicy(): IPolicy {
  var classUID = "1.2.840.10008.5.1.4.1.1.4";
  return addPolicies(
    patientModulePolicy(),
    generalStudyModulePolicy(),
    generalSeriesModulePolicy(),
    dxImageModulePolicy(),
    frameOfReferenceModulePolicy(),
    generalEquipmentModulePolicy(),
    generalImageModulePolicy(),
    imagePlaneModulePolicy(),
    imagePixelModulePolicy(),
    mrImageModulePolicy(),
    sopCommonModulePolicy(),
    {
      default: {
        action: "remove",
        description: "The default policy is to remove unspecified tags",
      },
      "00080016": {
        action: "replace",
        value: [classUID],
        description: "SOP Class UID",
      },
    }
  );
}

function mrSpectroscopyImagePolicy(): IPolicy {
  var classUID = "1.2.840.10008.5.1.4.1.1.4.2";
  return addPolicies(
    patientModulePolicy(),
    generalStudyModulePolicy(),
    generalSeriesModulePolicy(),
    dxImageModulePolicy(),
    mrSeriesModulePolicy(),
    frameOfReferenceModulePolicy(),
    generalEquipmentModulePolicy(),
    enhancedGeneralEquipmentModulePolicy(),
    multiframeFunctionalGroupsSequenceModulePolicy(),
    multiframeDimensionModulePolicy(),
    acquisitionContextModulePolicy(),
    mrSpectroscopyModulePolicy(),
    mrSpectroscopyDataModulePolicy(),
    sopCommonModulePolicy(),
    {
      default: {
        action: "remove",
        description: "The default policy is to remove unspecified tags",
      },
      "00080016": {
        action: "replace",
        value: [classUID],
        description: "SOP Class UID",
      },
    }
  );
}

function ultrasoundImagePolicy(): IPolicy {
  var classUID = "1.2.840.10008.5.1.4.1.1.6.1";
  return addPolicies(
    patientModulePolicy(),
    generalStudyModulePolicy(),
    generalSeriesModulePolicy(),
    generalEquipmentModulePolicy(),
    dxImageModulePolicy(),
    generalImageModulePolicy(),
    imagePixelModulePolicy(),
    ultrasoundImageModulePolicy(),
    sopCommonModulePolicy(),
    {
      default: {
        action: "remove",
        description: "The default policy is to remove unspecified tags",
      },
      "00080016": {
        action: "replace",
        value: [classUID],
        description: "SOP Class UID",
      },
    }
  );
}

function xRayAngiographicImagePolicy(): IPolicy {
  var classUID = "1.2.840.10008.5.1.4.1.1.12.1";
  return addPolicies(
    patientModulePolicy(),
    generalStudyModulePolicy(),
    generalSeriesModulePolicy(),
    dxImageModulePolicy(),
    generalEquipmentModulePolicy(),
    generalImageModulePolicy(),
    imagePixelModulePolicy(),
    xRayImageModulePolicy(),
    xRayAcquisitionModulePolicy(),
    sopCommonModulePolicy(),
    {
      default: {
        action: "remove",
        description: "The default policy is to remove unspecified tags",
      },
      "00080016": {
        action: "replace",
        value: [classUID],
        description: "SOP Class UID",
      },
    }
  );
}

function xRayRadiofluoroscopicImagePolicy(): IPolicy {
  var classUID = "1.2.840.10008.5.1.4.1.1.12.2";
  return addPolicies(
    patientModulePolicy(),
    generalStudyModulePolicy(),
    generalSeriesModulePolicy(),
    generalEquipmentModulePolicy(),
    dxImageModulePolicy(),
    generalImageModulePolicy(),
    imagePixelModulePolicy(),
    xRayImageModulePolicy(),
    xRayAcquisitionModulePolicy(),
    sopCommonModulePolicy(),
    {
      default: {
        action: "remove",
        description: "The default policy is to remove unspecified tags",
      },
      "00080016": {
        action: "replace",
        value: [classUID],
        description: "SOP Class UID",
      },
    }
  );
}

function xRay3DAngiographicImagePolicy(): IPolicy {
  var classUID = "1.2.840.10008.5.1.4.1.1.13.1.1";
  return addPolicies(
    patientModulePolicy(),
    generalStudyModulePolicy(),
    generalSeriesModulePolicy(),
    dxImageModulePolicy(),
    enhancedSeriesModulePolicy(),
    frameOfReferenceModulePolicy(),
    generalEquipmentModulePolicy(),
    enhancedGeneralEquipmentModulePolicy(),
    imagePixelModulePolicy(),
    acquisitionContextModulePolicy(),
    multiframeFunctionalGroupsSequenceModulePolicy(),
    xRay3DImageModulePolicy(),
    sopCommonModulePolicy(),
    {
      default: {
        action: "remove",
        description: "The default policy is to remove unspecified tags",
      },
      "00080016": {
        action: "replace",
        value: [classUID],
        description: "SOP Class UID",
      },
    }
  );
}

function nuclearMedicineImagePolicy(): IPolicy {
  var classUID = "1.2.840.10008.5.1.4.1.1.20";
  return addPolicies(
    patientModulePolicy(),
    generalStudyModulePolicy(),
    generalSeriesModulePolicy(),
    dxImageModulePolicy(),
    nmPETPatientOrientationModulePolicy(),
    generalEquipmentModulePolicy(),
    generalImageModulePolicy(),
    imagePixelModulePolicy(),
    nmImagePixelModulePolicy(),
    multiframeModulePolicy(),
    nmMultiframeModulePolicy(),
    nmImageModulePolicy(),
    nmIsotopeModulePolicy(),
    nmDetectorModulePolicy(),
    sopCommonModulePolicy(),
    {
      default: {
        action: "remove",
        description: "The default policy is to remove unspecified tags",
      },
      "00080016": {
        action: "replace",
        value: [classUID],
        description: "SOP Class UID",
      },
    }
  );
}

function positronEmissionTomographyImagePolicy(): IPolicy {
  var classUID = "1.2.840.10008.5.1.4.1.1.128";
  return addPolicies(
    patientModulePolicy(),
    generalStudyModulePolicy(),
    generalSeriesModulePolicy(),
    dxImageModulePolicy(),
    petSeriesModulePolicy(),
    petIsotopeModulePolicy(),
    nmPETPatientOrientationModulePolicy(),
    frameOfReferenceModulePolicy(),
    generalEquipmentModulePolicy(),
    generalImageModulePolicy(),
    imagePlaneModulePolicy(),
    imagePixelModulePolicy(),
    petImageModulePolicy(),
    sopCommonModulePolicy(),
    {
      default: {
        action: "remove",
        description: "The default policy is to remove unspecified tags",
      },
      "00080016": {
        action: "replace",
        value: [classUID],
        description: "SOP Class UID",
      },
    }
  );
}

// This policy captures all module policies and will be thrown at unknowns.
function catchAllWhitelistPolicy(): IPolicy {
  return addPolicies(
    acquisitionContextModulePolicy(),
    dxAnatomyImagedModulePolicy(),
    dxDetectorModulePolicy(),
    dxImageModulePolicy(),
    dxSeriesModulePolicy(),
    generalEquipmentModulePolicy(),
    generalImageModulePolicy(),
    generalSeriesModulePolicy(),
    generalStudyModulePolicy(),
    imagePixelModulePolicy(),
    patientModulePolicy(),
    sopCommonModulePolicy(),
    mammographySeriesModulePolicy(),
    mammographyImageModulePolicy(),
    frameOfReferenceModulePolicy(),
    imagePlaneModulePolicy(),
    ctImageModulePolicy(),
    cineModulePolicy(),
    mutliFrameModulePolicy(),
    paletteColorLookupTablePolicy(),
    ultrasoundImageModulePolicy(),
    mrImageModulePolicy(),
    mrSeriesModulePolicy(),
    enhancedGeneralEquipmentModulePolicy(),
    multiframeFunctionalGroupsSequenceModulePolicy(),
    multiframeDimensionModulePolicy(),
    mrSpectroscopyModulePolicy(),
    mrSpectroscopyDataModulePolicy(),
    xRayImageModulePolicy(),
    xRayAcquisitionModulePolicy(),
    xaPositionerModulePolicy(),
    enhancedSeriesModulePolicy(),
    xRay3DImageModulePolicy(),
    nmPETPatientOrientationModulePolicy(),
    nmImagePixelModulePolicy(),
    multiframeModulePolicy(),
    nmMultiframeModulePolicy(),
    nmImageModulePolicy(),
    nmIsotopeModulePolicy(),
    nmDetectorModulePolicy(),
    petSeriesModulePolicy(),
    petIsotopeModulePolicy(),
    petImageModulePolicy(),
    {
      default: {
        action: "remove",
        description: "The default policy is to remove unspecified tags",
      },
      "00080016": { action: "keep", description: "SOP Class UID" },
    }
  );
}

/******************************************************************************\
      PUBLIC INTERFACE
      This is what will be exposed.
\******************************************************************************/

let policydict = {
  "1.2.840.10008.5.1.4.1.1.1.1": digitalXRayPolicy,
  "1.2.840.10008.5.1.4.1.1.1.2": digitalMammographyXRayPolicy,
  "1.2.840.10008.5.1.4.1.1.2": ctImagePolicy,
  "1.2.840.10008.5.1.4.1.1.3.1": ultrasoundMultiframeImagePolicy,
  "1.2.840.10008.5.1.4.1.1.4": mrImagePolicy,
  "1.2.840.10008.5.1.4.1.1.4.2": mrSpectroscopyImagePolicy,
  "1.2.840.10008.5.1.4.1.1.6.1": ultrasoundImagePolicy,
  "1.2.840.10008.5.1.4.1.1.12.1": xRayAngiographicImagePolicy,
  "1.2.840.10008.5.1.4.1.1.12.2": xRayRadiofluoroscopicImagePolicy,
  "1.2.840.10008.5.1.4.1.1.13.1.1": xRay3DAngiographicImagePolicy,
  "1.2.840.10008.5.1.4.1.1.20": nuclearMedicineImagePolicy,
  "1.2.840.10008.5.1.4.1.1.128": positronEmissionTomographyImagePolicy,
};

export default function policyFor(sopClassUid: string): IPolicy {
  if (policydict[sopClassUid] == undefined) {
    return catchAllWhitelistPolicy();
  } else {
    return policydict[sopClassUid]();
  }
}
