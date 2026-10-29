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
export type ReplaceMethod = "hash" | "random";

export interface IPolicy {
  [tagId: string]: {
    action: Action;
    description: string;
    value?: Array<any>;
    method?: ReplaceMethod;
    /**
     * For a kept Sequence (SQ): the whitelist applied to every Item, so the
     * Sequence is kept and its contents cleaned (PS3.15 E.1.1 action "K":
     * "requires recursively applying the Profile rules to each Data Set in
     * each Item of the Sequence"). A value under such a rule that is not
     * encoded as a Sequence is removed.
     */
    items?: IPolicy;
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
function broadlySafeFieldsPolicy(): IPolicy {
  // This is type 2 but useful data
  return {
    "00082122": {action: "keep", description: "Stage number"},
    "00082124": {action: "keep", description: "Stage count"},
    "0008212A": {action: "keep", description: "Number of Views in Stage"},
    "00180015": {action: "keep", description: "BodyPartExamined"},
    "00180025": {action: "keep", description: "AngioFlag"},
    "00180060": {action: "keep", description: "KVP"},
    "00180080": {action: "keep", description: "RepetitionTime"},
    "00180081": {action: "keep", description: "EchoTime"},
    "00180082": {action: "keep", description: "InversionTime"},
    "00180083": {action: "keep", description: "NumberOfAverages"},
    "00180084": {action: "keep", description: "ImagingFrequency"},
    "00180085": {action: "keep", description: "ImagedNucleus"},
    "00180086": {action: "keep", description: "EchoNumbers"},
    "00180087": {action: "keep", description: "MagneticFieldStrength"},
    "00180088": {action: "keep", description: "SpacingBetweenSlices"},
    "00180089": {action: "keep", description: "NumberOfPhaseEncodingSteps"},
    "00180090": {action: "keep", description: "DataCollectionDiameter"},
    "00180091": {action: "keep", description: "EchoTrainLength"},
    "00180093": {action: "keep", description: "PercentSampling"},
    "00180094": {action: "keep", description: "PercentPhaseFieldofView"},
    "00180095": {action: "keep", description: "PixelBandwidth"},
    "00181042": {action: "keep", description: "Contrast/Bolus Start Time"},
    "00181050": {action: "keep", description: "Spatial Resolution"},
    "00181064": {action: "keep", description: "Cardiac Framing Type Attribute"},
    "00181081": {action: "keep", description: "Low R-R Value Attribute"},
    "00181082": {action: "keep", description: "High R-R Value Attribute"},
    "00181083": {action: "keep", description: "Intervals Acquired Attribute"},
    "00181084": {action: "keep", description: "Intervals Rejected Attribute"},
    "00181086": {action: "keep", description: "Skip Beats Attribute"},
    "00181088": {action: "keep", description: "HeartRate"},
    "00181090": {action: "keep", description: "CardiacNumberofImages"},
    "00181094": {action: "keep", description: "TriggerWindow"},
    "00181100": {action: "keep", description: "ReconstructionDiameter"},
    "00181110": {action: "keep", description: "Distance Source to Detector"},
    "00181111": {action: "keep", description: "Distance Source to Patient"},
    "00181114": {action: "keep", description: "Estimated Radiographic Magnification Factor"},
    "00181120": {action: "keep", description: "Gantry/Detector Tilt"},
    "00181130": {action: "keep", description: "Table Height"},
    "00181140": {action: "keep", description: "Rotation Direction"},
    "00181150": {action: "keep", description: "Exposure Time"},
    "00181151": {action: "keep", description: "X-Ray Tube Current"},
    "00181152": {action: "keep", description: "Exposure"},
    "00181153": {action: "keep", description: "Exposure in µAs"},
    "0018115E": {action: "keep", description: "Image and Fluoroscopy Area Dose Product"},
    "00181160": {action: "keep", description: "Filter Type"},
    "00181162": {action: "keep", description: "Intensifier Size"},
    "00181166": {action: "keep", description: "Grid"},
    "00181170": {action: "keep", description: "Generator Power"},
    "00181190": {action: "keep", description: "Focal Spot(s)"},
    "00181191": {action: "keep", description: "Anode Target Material"},
    "001811A0": {action: "keep", description: "Body Part Thickness"},
    "001811A2": {action: "keep", description: "Compression Force"},
    "001811A4": {action: "keep", description: "Paddle Description"},
    "00181210": {action: "keep", description: "Convolution Kernel"},
    "00181310": {action: "keep", description: "AcquisitionMatrix"},
    "00181312": {action: "keep", description: "In-planePhaseEncodingDirection"},
    "00181314": {action: "keep", description: "FlipAngle"},
    "00181315": {action: "keep", description: "VariableFlipAngleFlag"},
    "00181316": {action: "keep", description: "SAR"},
    "00181405": {action: "keep", description: "Relative X-Ray Exposure"},
    "00181500": {action: "keep", description: "Positioner Motion"},
    "00181510": {action: "keep", description: "Positioner Primary Angle"},
    "00181511": {action: "keep", description: "Positioner Secondary Angle"},
    "00185100": {action: "keep", description: "PatientPosition"},
    "00185101": {action: "keep", description: "View Position"},
    "00187001": {action: "keep", description: "Detector Temperature"},
    "0018701A": {action: "keep", description: "Detector Binning"},
    "00187030": {action: "keep", description: "Field of View Origin"},
    "00187032": {action: "keep", description: "Field of View Rotation"},
    "00187034": {action: "keep", description: "Field of View Horizontal Flip"},
    "00187050": {action: "keep", description: "Filter Material"},
    "00187052": {action: "keep", description: "Filter Thickness Minimum"},
    "00187054": {action: "keep", description: "Filter Thickness Maximum"},
    "00187060": {action: "keep", description: "Exposure Control Mode"},
    "00187062": {action: "keep", description: "Exposure Control Mode Description"},
    "00189037": {action: "keep", description: "Cardiac Synchronization Technique Attribute"},
    "00189070": {action: "keep", description: "Cardiac R-R Interval Specified Attribute"},
    "00189085": {action: "keep", description: "Cardiac Signal Source Attribute"},
    "00189169": {action: "keep", description: "Cardiac Beat Rejection Technique Attribute"},
    "00189170": {action: "keep", description: "Respiratory Motion Compensation Technique Attribute"},
    "00189171": {action: "keep", description: "Respiratory Signal Source Attribute"},
    "00189172": {action: "keep", description: "Bulk Motion Compensation Technique Attribute"},
    "00189173": {action: "keep", description: "Bulk Motion Signal Source Attribute"},
    "00189306": {action: "keep", description: "Single Collimation Width"},
    "00189307": {action: "keep", description: "Total Collimation Width"},
    "00189309": {action: "keep", description: "Table Speed"},
    "00189310": {action: "keep", description: "Table Feed per Rotation"},
    "00189311": {action: "keep", description: "Spiral Pitch Factor"},
    "00189318": {action: "keep", description: "Reconstruction Target Center (Patient)"},
    "00189323": {action: "keep", description: "Exposure Modulation Type"},
    "00189324": {action: "keep", description: "Estimated Dose Saving"},
    "00189345": {action: "keep", description: "CTDIvol"},
    "00189346": {action: "remove", description: "CTDI Phantom Type Code Sequence"},
    "00189559": {action: "keep", description: "Positioner Primary Angle Direction"},
    "00200011": {action: "keep", description: "Series Number"},
    "00200012": {action: "keep", description: "Acquisition number"},
    "00200013": {action: "keep", description: "Instance number is used for ordering the stack."},
    "00200020": {action: "keep", description: "Patient Orientation"},
    "00200060": {action: "keep", description: "Laterality"},
    "00201002": {action: "keep", description: "Images in Acquisition"},
    "00201040": {action: "keep", description: "PositionReferenceIndicator"},
    "00201041": {action: "keep", description: "SliceLocation"},
    "00209250": {action: "keep", description: "Respiratory Trigger Type Attribute"},
    "00209256": {action: "keep", description: "Respiratory Trigger Delay Threshold Attribute"},
    "00280106": {action: "keep", description: "Smallest Image Pixel Value"},
    "00280107": {action: "keep", description: "Largest Image Pixel Value"},
    "00280121": {action: "keep", description: "Pixel Padding Range Limit"},
    "00280300": {action: "keep", description: "Quality Control Image"},
    "00280A04": {action: "keep", description: "Pixel Spacing Calibration Description"},
    "00281055": {action: "keep", description: "Window Center & Width Explanation"},
    "00281300": {action: "keep", description: "Breast Implant Present"},
    "00400301": {action: "keep", description: "Total Number of Exposures"},
    "0040030E": {action: "remove", description: "Exposure Dose Sequence"},
    "00400314": {action: "keep", description: "Half Value Layer"},
    "00400316": {action: "keep", description: "Organ Dose"},
    "00408302": {action: "keep", description: "Entrance Dose in mGy"},
    "00540220": {action: "remove", description: "View Code Sequence"},
    "00180010": {action: "keep", description: "Contrast/Bolus Agent"},
    "00189352": {action: "keep", description: "Calcium Scoring Mass Factor Device"},
    "00181048": {action: "keep", description: "Contrast/Bolus Ingredient"},
    "00181154": {action: "keep", description: "Average Pulse Width"},
    "0018115A": {action: "keep", description: "Radiation Mode"},
    "00187006": {action: "keep", description: "Detector Description"},
    "00281056": {action: "keep", description: "VOI LUT Function"},
    "00286010": {action: "keep", description: "Representative Frame Number"},
    "00400275": {action: "remove", description: "Request Attributes Sequence"},
    "0008103E": {action: "keep", description: "Series Description"}, // Not patient specific, I checked with Frank.
  }
}

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
      action: "remove",
      description: "Anatomic Region Sequence.",
    },
  };
}

function dxDetectorModulePolicy(): IPolicy {
  return {
    "00187004": { action: "keep", description: "Detector type." },
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
    "00181312": { action: "keep", description: "In-plane Phase Encoding Direction" },
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

function generalSeriesModulePolicy(): IPolicy {
  return {
    "00080060": { action: "keep", description: "Modality" },
    "0020000E": {
      action: "regenerate",
      method: "hash",
      description: "Series instance UID is hashed to preserve structure.",
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
    // Extended Offset Table and its Lengths (PS3.3 C.7.6.3, Type 3 / 1C):
    // structural frame index for encapsulated Pixel Data, not listed in
    // PS3.15 Table E.1-1. Kept so frames stay indexed; the writer re-emits
    // fragments unchanged, so the offsets stay valid.
    "7FE00001": { action: "keep", description: "Extended Offset Table" },
    "7FE00002": { action: "keep", description: "Extended Offset Table Lengths" },
  };
}

function patientModulePolicy(): IPolicy {
  return {
    "00101010": {
      action: "replace",
      value: [],
      description: "Patient age will be replaced",
    },
    "00100020": {
      action: "replace",
      value: [],
      description: "Patient ID will be replaced",
    },
    "00101020": {
      action: "replace",
      value: [],
      description: "Patient size will be replaced",
    },
    "00101030": {
      action: "replace",
      value: [],
      description: "Patient weight will be replaced",
    },
    "00100040": {
      action: "keep",
      description: "Patient's sex is not identifying",
    },
  };
}

function sopCommonModulePolicy(): IPolicy {
  return {
    "00080016": { action: "keep", description: "SOP Class UID" },
    "00080018": {
      action: "regenerate",
      method: "hash",
      description: "SOP Instance UID is hashed to preserve structure.",
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
    "00181508": { action: "keep", description: "PositionerType" },
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
      description: "Segmented Green Palette Color Lookup Table Data",
    },
    "00281223": {
      action: "keep",
      description: "Segmented Blue Palette Color Lookup Table Data",
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

/******************************************************************************
  MULTI-FRAME FUNCTIONAL GROUPS (nested whitelist)

  Why keep them. Shared Functional Groups Sequence (5200,9229) is Type 1 and
  Per-Frame Functional Groups Sequence (5200,9230) is Type 1C, required when
  any frame has per-frame groups (PS3.3 C.7.6.16, Table C.7.6.16-1). The
  Multi-frame Functional Groups Module is Mandatory in the Enhanced CT
  (PS3.3 A.38), Enhanced MR (A.36.2.3) and Enhanced XA (A.47.3) IODs.
  Enhanced CT and MR keep their per-frame geometry (Plane Position, Plane
  Orientation and Pixel Measures, all M in Tables A.38-2 and A.36-2) only
  here. Enhanced XA (Table A.47-2) has none of those macros: it describes
  its geometry with the X-Ray macros of C.8.19.6, which this policy does
  not keep. Removing the sequences, as earlier versions did, leaves a
  non-conformant file whose CT and MR frames cannot be placed in space.

  How. Each Item is a Data Set of functional-group macros, so every Item is
  filtered through functionalGroupItemPolicy(), itself a whitelist with
  default "remove", recursively. PS3.15 Annex E (Basic Application Level
  Confidentiality Profile), Table E.1-1, checked against PS3.15 2026d:

  Kept: not listed in Table E.1-1 (Table E.1-1 lists no action), and
  needed to display or measure the frames:
    Plane Position Sequence (0020,9113) > Image Position (Patient) (0020,0032)
    Plane Orientation Sequence (0020,9116) > Image Orientation (Patient) (0020,0037)
    Pixel Measures Sequence (0028,9110) > Pixel Spacing (0028,0030),
      Slice Thickness (0018,0050), Spacing Between Slices (0018,0088)
    Frame VOI LUT Sequence (0028,9132) > Window Center (0028,1050),
      Window Width (0028,1051), VOI LUT Function (0028,1056)
    Pixel Value Transformation Sequence (0028,9145) > Rescale Intercept
      (0028,1052), Rescale Slope (0028,1053), Rescale Type (0028,1054).
      PS3.3 C.7.6.16.2.9; for Enhanced CT the macro is CT Pixel Value
      Transformation (C.8.15.3.10, M in Table A.38-2), with the same
      attributes.
    CT Image Frame Type Sequence (0018,9329), MR Image Frame Type Sequence
      (0018,9226) > Frame Type (0008,9007), Pixel Presentation (0008,9205),
      Volumetric Properties (0008,9206), Volume Based Calculation Technique
      (0008,9207), Complex Image Component (0008,9208), Acquisition Contrast
      (0008,9209)
    Frame Content Sequence (0020,9111) > Frame Acquisition Number
      (0020,9156), Dimension Index Values (0020,9157), Stack ID (0020,9056),
      In-Stack Position Number (0020,9057), Temporal Position Index
      (0020,9128), Frame Acquisition Duration (0018,9220), Cardiac Cycle
      Position (0018,9236), Respiratory Cycle Position (0018,9214). These are
      frame indices and relative timing, not dates.
    Frame Anatomy Sequence (0020,9071) > Frame Laterality (0020,9072),
      Anatomic Region Sequence (0008,2218) > Code Value (0008,0100), Long
      Code Value (0008,0119), URN Code Value (0008,0120), Coding Scheme
      Designator (0008,0102), Coding Scheme Version (0008,0103), Code
      Meaning (0008,0104). Coded anatomy, the same information as Body Part
      Examined (0018,0015) which the policy already keeps; the macro is
      Mandatory in all three IODs. Long and URN Code Value are the Type 1C
      alternatives to Code Value (PS3.3 8.8).
    Real World Value Mapping Sequence (0040,9096), PS3.3 C.7.6.16.2.11 >
      Real World Value First Value Mapped (0040,9216), Last Value Mapped
      (0040,9211), their double-float alternatives (0040,9214)/(0040,9213)
      (Type 1C, required when the integer pair is absent), Intercept
      (0040,9224), Slope (0040,9225), LUT Data (0040,9212), Measurement
      Units Code Sequence (0040,08EA) as a code. The numeric mapping from
      stored pixels to quantities (e.g. perfusion in ml/100ml/s), which
      Enhanced CT conditionally requires.

  Kept empty (Type 2, so an empty value satisfies the IOD):
    Derivation Image Sequence (0008,9124). Conditionally required for
      derived Enhanced CT, MR and XA frames (PS3.3 C.7.6.16.2.6) and Type 2, so
      when present it is kept with no items. Its Source Image Sequence
      (0008,2112, X/Z/U*) and Derivation Description (0008,2111, X) go with
      the items.

  Hashed (Table E.1-1 action U, "replace with a non-zero length UID that is
  internally consistent within a set of Instances"):
    Irradiation Event Identification Sequence (0018,9477) > Irradiation
      Event UID (0008,3010). Same deterministic hash as SOP Instance UID, so
      every frame of one event keeps one UID.

  Replaced with the dummy 19700101000000.000000 (Table E.1-1 action D,
  "replace with a non-zero length value that may be a dummy value and
  consistent with the VR"; D, not
  X, because these are Type 1C in Frame Content and removal would break
  conformance):
    Frame Acquisition DateTime (0018,9074)
    Frame Reference DateTime (0018,9151)

  Replaced with a fixed value (a conformance choice, not a Table E.1-1
  action: neither attribute is listed there):
    Real World Value Mapping item > LUT Label (0040,9210) "RWVM" and LUT
      Explanation (0028,3003) "Real world value mapping". Free text, but
      Type 1 in the item (PS3.3 Table C.7.6.16-12b), so removal would break
      conformance; a fixed non-empty value keeps the item valid and carries
      none of the input text.

  Removed:
    Frame Comments (0020,9158): Table E.1-1 action X.
    Frame Label (0020,9453), Window Center & Width Explanation (0028,1055):
      free text, not listed in Table E.1-1. The standard leaves these to
      judgement, so the de-identifying option (remove) is taken.
    Every other macro and attribute, by the whitelist default, including
    Contrast/Bolus Usage (0018,9341), whose agent numbers point into the
    top-level Contrast/Bolus Agent Sequence that this policy already removes.
\******************************************************************************/

const REMOVE_UNLISTED = {
  action: "remove",
  description: "Remove anything not whitelisted inside this sequence item",
} as const;

function codeSequenceItemPolicy(): IPolicy {
  return {
    default: REMOVE_UNLISTED,
    "00080100": { action: "keep", description: "Code Value" },
    "00080119": { action: "keep", description: "Long Code Value" },
    "00080120": { action: "keep", description: "URN Code Value" },
    "00080102": { action: "keep", description: "Coding Scheme Designator" },
    "00080103": { action: "keep", description: "Coding Scheme Version" },
    "00080104": { action: "keep", description: "Code Meaning" },
  };
}

function frameContentItemPolicy(): IPolicy {
  return {
    default: REMOVE_UNLISTED,
    "00209156": { action: "keep", description: "Frame Acquisition Number" },
    "00209157": { action: "keep", description: "Dimension Index Values" },
    "00209056": { action: "keep", description: "Stack ID" },
    "00209057": { action: "keep", description: "In-Stack Position Number" },
    "00209128": { action: "keep", description: "Temporal Position Index" },
    "00189220": { action: "keep", description: "Frame Acquisition Duration" },
    "00189236": { action: "keep", description: "Cardiac Cycle Position" },
    "00189214": { action: "keep", description: "Respiratory Cycle Position" },
    "00189074": {
      action: "replace",
      value: ["19700101000000.000000"],
      description: "Frame Acquisition DateTime (PS3.15 Table E.1-1: D)",
    },
    "00189151": {
      action: "replace",
      value: ["19700101000000.000000"],
      description: "Frame Reference DateTime (PS3.15 Table E.1-1: D)",
    },
    "00209158": {
      action: "remove",
      description: "Frame Comments (PS3.15 Table E.1-1: X)",
    },
    "00209453": { action: "remove", description: "Frame Label (free text)" },
  };
}

function frameTypeItemPolicy(): IPolicy {
  return {
    default: REMOVE_UNLISTED,
    "00089007": { action: "keep", description: "Frame Type" },
    "00089205": { action: "keep", description: "Pixel Presentation" },
    "00089206": { action: "keep", description: "Volumetric Properties" },
    "00089207": {
      action: "keep",
      description: "Volume Based Calculation Technique",
    },
    "00089208": { action: "keep", description: "Complex Image Component" },
    "00089209": { action: "keep", description: "Acquisition Contrast" },
  };
}

function functionalGroupItemPolicy(): IPolicy {
  return {
    default: REMOVE_UNLISTED,
    "00209111": {
      action: "keep",
      description: "Frame Content Sequence",
      items: frameContentItemPolicy(),
    },
    "00209113": {
      action: "keep",
      description: "Plane Position Sequence",
      items: {
        default: REMOVE_UNLISTED,
        "00200032": { action: "keep", description: "Image Position (Patient)" },
      },
    },
    "00209116": {
      action: "keep",
      description: "Plane Orientation Sequence",
      items: {
        default: REMOVE_UNLISTED,
        "00200037": {
          action: "keep",
          description: "Image Orientation (Patient)",
        },
      },
    },
    "00289110": {
      action: "keep",
      description: "Pixel Measures Sequence",
      items: {
        default: REMOVE_UNLISTED,
        "00280030": { action: "keep", description: "Pixel Spacing" },
        "00180050": { action: "keep", description: "Slice Thickness" },
        "00180088": { action: "keep", description: "Spacing Between Slices" },
      },
    },
    "00289132": {
      action: "keep",
      description: "Frame VOI LUT Sequence",
      items: {
        default: REMOVE_UNLISTED,
        "00281050": { action: "keep", description: "Window Center" },
        "00281051": { action: "keep", description: "Window Width" },
        "00281056": { action: "keep", description: "VOI LUT Function" },
      },
    },
    "00289145": {
      action: "keep",
      description:
        "Pixel Value Transformation Sequence (PS3.3 C.7.6.16.2.9; CT Pixel Value Transformation C.8.15.3.10 for Enhanced CT)",
      items: {
        default: REMOVE_UNLISTED,
        "00281052": { action: "keep", description: "Rescale Intercept" },
        "00281053": { action: "keep", description: "Rescale Slope" },
        "00281054": { action: "keep", description: "Rescale Type" },
      },
    },
    "00189329": {
      action: "keep",
      description: "CT Image Frame Type Sequence",
      items: frameTypeItemPolicy(),
    },
    "00189226": {
      action: "keep",
      description: "MR Image Frame Type Sequence",
      items: frameTypeItemPolicy(),
    },
    "00189477": {
      action: "keep",
      description: "Irradiation Event Identification Sequence",
      items: {
        default: REMOVE_UNLISTED,
        "00083010": {
          action: "regenerate",
          method: "hash",
          description: "Irradiation Event UID (PS3.15 Table E.1-1: U)",
        },
      },
    },
    "00209071": {
      action: "keep",
      description: "Frame Anatomy Sequence",
      items: {
        default: REMOVE_UNLISTED,
        "00209072": { action: "keep", description: "Frame Laterality" },
        "00082218": {
          action: "keep",
          description: "Anatomic Region Sequence (coded anatomy)",
          items: codeSequenceItemPolicy(),
        },
      },
    },
    "00409096": {
      action: "keep",
      description: "Real World Value Mapping Sequence (PS3.3 C.7.6.16.2.11)",
      items: {
        default: REMOVE_UNLISTED,
        "00409216": {
          action: "keep",
          description: "Real World Value First Value Mapped",
        },
        "00409211": {
          action: "keep",
          description: "Real World Value Last Value Mapped",
        },
        "00409214": {
          action: "keep",
          description: "Double Float Real World Value First Value Mapped",
        },
        "00409213": {
          action: "keep",
          description: "Double Float Real World Value Last Value Mapped",
        },
        "00409224": { action: "keep", description: "Real World Value Intercept" },
        "00409225": { action: "keep", description: "Real World Value Slope" },
        "00409212": { action: "keep", description: "Real World Value LUT Data" },
        "004008EA": {
          action: "keep",
          description: "Measurement Units Code Sequence",
          items: codeSequenceItemPolicy(),
        },
        "00409210": {
          action: "replace",
          value: ["RWVM"],
          description:
            "LUT Label, fixed value (Type 1 in the item, PS3.3 Table C.7.6.16-12b; not in Table E.1-1)",
        },
        "00283003": {
          action: "replace",
          value: ["Real world value mapping"],
          description:
            "LUT Explanation, fixed value (Type 1 in the item, PS3.3 Table C.7.6.16-12b; not in Table E.1-1)",
        },
      },
    },
    "00089124": {
      action: "replace",
      value: [],
      description:
        "Derivation Image Sequence, kept empty (Type 2, PS3.3 C.7.6.16.2.6; Source Image Sequence is PS3.15 Table E.1-1 X/Z/U*)",
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
    "52009229": {
      action: "keep",
      description: "Shared Functional Groups Sequence (Type 1, PS3.3 C.7.6.16)",
      items: functionalGroupItemPolicy(),
    },
    "52009230": {
      action: "keep",
      description:
        "Per-Frame Functional Groups Sequence (Type 1C, PS3.3 C.7.6.16)",
      items: functionalGroupItemPolicy(),
    },
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
    "00189126": { action: "remove", description: "Volume Localization Sequence" },
    "00189059": { action: "keep", description: "Decoupling" },
    "00189060": { action: "keep", description: "Decoupled Nucleus" },
    "00189061": { action: "keep", description: "Decoupled Frequency" },
    "00189062": { action: "keep", description: "Decoupling Method" },
    "00189063": {
      action: "keep",
      description: "Decoupling Chemical Shift Reference",
    },
    "00189065": { action: "keep", description: "Time Domain Filtering" },
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
    "00181155": { action: "keep", description: "Radiation Setting" },
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
    "00540060": { action: "keep", description: "R-R Interval Vector" },
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
    "00180070": { action: "keep", description: "Counts Accumulated" },
    "00181242": { action: "keep", description: "Actual Frame Duration" },
  };
}

function nmIsotopeModulePolicy(): IPolicy {
  return {
    "00540012": { action: "remove", description: "Energy Window Information Sequence" },
    "00540016": { action: "remove", description: "Radiopharmaceutical Information Sequence" },
  };
}

function nmDetectorModulePolicy(): IPolicy {
  return {
    "00540022": {
      action: "remove",
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
      action: "keep",
      description: "Collimator Type",
    },
  };
}

function petIsotopeModulePolicy(): IPolicy {
  return {
    "00540016": {
      action: "remove",
      description: "Radiopharmaceutical Information Sequence",
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

/**
 * Enhanced CT, MR and XA Image IODs (PS3.3 A.38, A.36.2, A.47). The
 * Multi-frame Functional Groups Module is Mandatory in each; its nested
 * whitelist is documented at functionalGroupItemPolicy(). The Enhanced CT,
 * MR and XA Image Modules are approximated by the image attributes kept by
 * xRay3DImageModulePolicy(). Known gaps: the Enhanced CT Image Module
 * (C.8.15.2) also requires Acquisition DateTime (0008,002A) and Acquisition
 * Duration (0018,9073) under conditions, handled for Enhanced CT by
 * enhancedCTImageModulePolicy(); the Enhanced MR and XA Image Modules were
 * not checked. These classes are not yet listed in supportedSOPClasses():
 * their acquisition macros are not reviewed.
 */
function enhancedImagePolicy(classUID: string, ...extra: IPolicy[]): IPolicy {
  return addPolicies(
    patientModulePolicy(),
    generalStudyModulePolicy(),
    generalSeriesModulePolicy(),
    frameOfReferenceModulePolicy(),
    generalEquipmentModulePolicy(),
    enhancedGeneralEquipmentModulePolicy(),
    imagePixelModulePolicy(),
    multiframeFunctionalGroupsSequenceModulePolicy(),
    multiframeDimensionModulePolicy(),
    acquisitionContextModulePolicy(),
    xRay3DImageModulePolicy(),
    sopCommonModulePolicy(),
    ...extra,
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

/**
 * Enhanced CT Image Module (PS3.3 C.8.15.2) acquisition timing. Acquisition
 * DateTime (0008,002A) is Type 1C there and PS3.15 Table E.1-1 lists it as
 * X/Z/D, so when present it is replaced with a dummy (D) rather than removed.
 * Acquisition Duration (0018,9073) is Type 1C there, numeric, and not listed
 * in Table E.1-1, so it is kept. The Enhanced MR (C.8.13.1) and Enhanced XA
 * (C.8.19.2) Image Modules were not checked against the standard, so their
 * policies do not take this yet.
 */
function enhancedCTImageModulePolicy(): IPolicy {
  return {
    "0008002A": {
      action: "replace",
      value: ["19700101000000.000000"],
      description: "Acquisition DateTime (PS3.15 Table E.1-1: X/Z/D; Type 1C, PS3.3 C.8.15.2)",
    },
    "00189073": {
      action: "keep",
      description: "Acquisition Duration (Type 1C, PS3.3 C.8.15.2; not in Table E.1-1)",
    },
  };
}

function enhancedCTImagePolicy(): IPolicy {
  return enhancedImagePolicy(
    "1.2.840.10008.5.1.4.1.1.2.1",
    enhancedCTImageModulePolicy()
  );
}

function enhancedMRImagePolicy(): IPolicy {
  return enhancedImagePolicy("1.2.840.10008.5.1.4.1.1.4.1");
}

function enhancedXAImagePolicy(): IPolicy {
  return enhancedImagePolicy("1.2.840.10008.5.1.4.1.1.12.1.1");
}

// This policy captures all module policies and will be thrown at unknowns.
function catchAllWhitelistPolicy(): IPolicy {
  return addPolicies(
    broadlySafeFieldsPolicy(),
    acquisitionContextModulePolicy(),
    dxAnatomyImagedModulePolicy(),
    dxDetectorModulePolicy(),
    dxImageModulePolicy(),
    dxSeriesModulePolicy(),
    generalEquipmentModulePolicy(),
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

let policydict: {[key: string]: () => IPolicy} = {
  "1.2.840.10008.5.1.4.1.1.1.1": digitalXRayPolicy,
  "1.2.840.10008.5.1.4.1.1.1.2": digitalMammographyXRayPolicy,
  "1.2.840.10008.5.1.4.1.1.2": ctImagePolicy,
  "1.2.840.10008.5.1.4.1.1.2.1": enhancedCTImagePolicy,
  "1.2.840.10008.5.1.4.1.1.3.1": ultrasoundMultiframeImagePolicy,
  "1.2.840.10008.5.1.4.1.1.4": mrImagePolicy,
  "1.2.840.10008.5.1.4.1.1.4.1": enhancedMRImagePolicy,
  "1.2.840.10008.5.1.4.1.1.4.2": mrSpectroscopyImagePolicy,
  "1.2.840.10008.5.1.4.1.1.6.1": ultrasoundImagePolicy,
  "1.2.840.10008.5.1.4.1.1.12.1": xRayAngiographicImagePolicy,
  "1.2.840.10008.5.1.4.1.1.12.1.1": enhancedXAImagePolicy,
  "1.2.840.10008.5.1.4.1.1.12.2": xRayRadiofluoroscopicImagePolicy,
  "1.2.840.10008.5.1.4.1.1.13.1.1": xRay3DAngiographicImagePolicy,
  "1.2.840.10008.5.1.4.1.1.20": nuclearMedicineImagePolicy,
  "1.2.840.10008.5.1.4.1.1.128": positronEmissionTomographyImagePolicy,
};

export default function policyFor(sopClassUid: string): IPolicy {
  if (policydict[sopClassUid] == undefined) {
    return catchAllWhitelistPolicy();
  } else {
    return addPolicies(catchAllWhitelistPolicy(), policydict[sopClassUid]());
  }
}
