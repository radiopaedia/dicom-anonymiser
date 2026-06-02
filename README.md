# DICOM-anonymiser

With the generous support of the [Advanced Radiology Services Foundation (ARSF)](https://bitly.com/ARSFrad), Radiopaedia is building support to upload cases as DICOM rather than requiring files to be exported to JPG/PNG. A critically important part of this project is to ensure that no patient data is inadvertently sent to our servers. We have, therefore, developed a DICOM anonymiser and have made that available as an open source project so that anyway can review the code we are running.

Additionally, we have built [this page](https://radiopaedia.org/standalone_dicom_anonymizer) where you can see the fields we process. All of this code runs client-side (i.e. no data is sent to Radiopaedia or anywhere else from this page). In fact, once you have loaded this page, you can disconnect your internet and everything will still work.

We’d love to hear any feedback you may have. Just write to general@radiopaedia.org

## Folder structure

 * /src: Original typescript files
 * /lib: Compiled javascripts
 * /docs: Browser demo of the project.

## How it works
The DICOM Anonymizer uses a whitelist policy to remove personally identifying metadata from DICOM formatted images.

The application explicitly supports the following DICOM SOP Classes:
 * 1.2.840.10008.5.1.4.1.1.1.1 (Digital XRay)
 * 1.2.840.10008.5.1.4.1.1.1.2 (Digital Mammography XRay)
 * 1.2.840.10008.5.1.4.1.1.2 (CT Image)
 * 1.2.840.10008.5.1.4.1.1.6.1 (Ultrasound Image)
 * 1.2.840.10008.5.1.4.1.1.3.1 (Ultrasound Multiframe Image)
 * 1.2.840.10008.5.1.4.1.1.4 (MR Image)
 * 1.2.840.10008.5.1.4.1.1.12.1 (XRay Angiographic Image)
 * 1.2.840.10008.5.1.4.1.1.12.2 (XRay Radiofluoroscopic Image)
 * 1.2.840.10008.5.1.4.1.1.13.1.1 (XRay 3D Angiographic Image)
 * 1.2.840.10008.5.1.4.1.1.20 (Nuclear Medicine Image)
 * 1.2.840.10008.5.1.4.1.1.128 (Positron Emission Tomography Image)

(Other image types can be anonymized, however some functional information may be stripped)

The policy (src/Policies.ts) for a given SOP Class can either remove, replace or regenerate a tag value.
DICOM uses UIDs to structure a series across multiple files. Where necessary, these UIDS are regenerated using a cryptographically secure SHA-512 hash. Regenerated UIDS can be identified by the prefix "1.2.826.0.1.3680043.10.341." and do not include personal information.

## What is removed and what is kept

The anonymiser works on a strict **whitelist** basis: every tag is removed by default, and only the tags listed below survive. The complete policy lives in [`src/Policies.ts`](src/Policies.ts), which is the authoritative source — the tables here are generated from it.

The lists below show the union of every module policy (the "catch-all" whitelist applied to unrecognised SOP Classes). Recognised SOP Classes apply a few additional per-class overrides — most notably the SOP Class UID `(0008,0016)` is set to the declared class, and a small number of image-type/date fields are blanked — so consult `src/Policies.ts` for the exact policy for a given class.

<!-- BEGIN GENERATED POLICY TABLES: regenerate with `npm run update-readme` -->

### Patient/identifying fields that are blanked or replaced

These 22 tags are emptied (or set to a fixed non-identifying value such as a zeroed date) rather than passed through. Note that **patient age, weight and size are blanked** — they are not retained in any form.

| Tag | Description |
| --- | --- |
| `(0008,0020)` | Study date is replaced. |
| `(0008,0021)` | Series Date |
| `(0008,0022)` | Acquisition Date |
| `(0008,0023)` | Content Date |
| `(0008,0030)` | Study time is replaced. |
| `(0008,0031)` | Series Time |
| `(0008,0032)` | Acquisition Time |
| `(0008,0033)` | Content Time |
| `(0008,0050)` | Accession number is replaced. |
| `(0008,0070)` | Manufacturer |
| `(0008,0090)` | Referring physician is replaced. |
| `(0008,1090)` | Manufacturer's Model Name |
| `(0010,0020)` | Patient ID will be replaced |
| `(0010,1010)` | Patient age will be replaced |
| `(0010,1020)` | Patient size will be replaced |
| `(0010,1030)` | Patient weight will be replaced |
| `(0018,1000)` | Device Serial Number |
| `(0018,1020)` | Software Versions |
| `(0018,1242)` | Actual Frame Duration |
| `(0020,0010)` | Study ID is replaced. |
| `(003A,0300)` | Multiplexed Audio Channels Description |
| `(0040,0555)` | Acquisition Context Sequence |

### UIDs that are regenerated

Structural UIDs are rewritten with a cryptographically secure SHA-512 hash (prefixed `1.2.826.0.1.3680043.10.341.`) so the study/series/frame structure is preserved across files without carrying the originals:

| Tag | Description |
| --- | --- |
| `(0008,0018)` | SOP Instance UID is hashed to preserve structure. |
| `(0020,000D)` | Study UID is hashed to preserve structure. |
| `(0020,000E)` | Series instance UID is hashed to preserve structure. |
| `(0020,0052)` | Frame of Reference UID is mandatory and is hashed to preserve structure |

### Sequences explicitly removed

These are dropped explicitly (on top of the remove-by-default rule) because they nest UIDs or identifying sub-items the tool does not rewrite:

| Tag | Description |
| --- | --- |
| `(0008,2218)` | Anatomic Region Sequence. |
| `(0018,9126)` | Volume Localization Sequence |
| `(0018,9346)` | CTDI Phantom Type Code Sequence |
| `(0040,0275)` | Request Attributes Sequence |
| `(0040,030E)` | Exposure Dose Sequence |
| `(0054,0012)` | Energy Window Information Sequence |
| `(0054,0016)` | Radiopharmaceutical Information Sequence |
| `(0054,0022)` | Detector Information Sequence |
| `(0054,0220)` | View Code Sequence |

### Tags kept unchanged

The following 237 tags are retained because they are technical imaging/acquisition metadata with no patient-identifying content. Any tag not listed here is removed.

| Tag | Description |
| --- | --- |
| `(0008,0005)` | Specific Character Set |
| `(0008,0008)` | Image Type |
| `(0008,0016)` | SOP Class UID |
| `(0008,0060)` | Modality |
| `(0008,0068)` | Presentation intent type. |
| `(0008,103E)` | Series Description |
| `(0008,2122)` | Stage number |
| `(0008,2124)` | Stage count |
| `(0008,212A)` | Number of Views in Stage |
| `(0008,9205)` | Pixel Presentation |
| `(0008,9206)` | Volumetric Properties |
| `(0008,9207)` | Volume Based Calculation Technique |
| `(0008,9208)` | Complex Image Component |
| `(0008,9209)` | Acquisition Contrast |
| `(0010,0040)` | Patient's sex is not identifying |
| `(0018,0010)` | Contrast/Bolus Agent |
| `(0018,0015)` | BodyPartExamined |
| `(0018,0020)` | Scanning Sequence |
| `(0018,0021)` | Sequence Variant |
| `(0018,0022)` | Scan Options |
| `(0018,0023)` | MR Acquisition Type |
| `(0018,0025)` | Angio Flag |
| `(0018,0050)` | Slice Thickness |
| `(0018,0060)` | KVP |
| `(0018,0070)` | Counts Accumulated |
| `(0018,0080)` | RepetitionTime |
| `(0018,0081)` | Echo Time |
| `(0018,0082)` | Inversion Time |
| `(0018,0083)` | Number of Averages |
| `(0018,0084)` | Imaging Frequency |
| `(0018,0085)` | Imaged Nucleus |
| `(0018,0086)` | Echo Number(s) |
| `(0018,0087)` | Magnetic Field Strength |
| `(0018,0088)` | Spacing Between Slices |
| `(0018,0089)` | NumberOfPhaseEncodingSteps |
| `(0018,0090)` | DataCollectionDiameter |
| `(0018,0091)` | Echo Train Length |
| `(0018,0093)` | Percent Sampling |
| `(0018,0094)` | Percent Phase Field of View |
| `(0018,0095)` | Pixel Bandwidth |
| `(0018,1042)` | Contrast/Bolus Start Time |
| `(0018,1048)` | Contrast/Bolus Ingredient |
| `(0018,1050)` | Spatial Resolution |
| `(0018,1060)` | Trigger Time |
| `(0018,1063)` | Frame Time |
| `(0018,1064)` | Cardiac Framing Type Attribute |
| `(0018,1065)` | Frame Time Vector |
| `(0018,1081)` | Low R-R Value |
| `(0018,1082)` | High R-R Value |
| `(0018,1083)` | Intervals Acquired Attribute |
| `(0018,1084)` | Intervals Rejected Attribute |
| `(0018,1086)` | Skip Beats Attribute |
| `(0018,1088)` | Heart Rate |
| `(0018,1090)` | Cardiac Number of Images |
| `(0018,1094)` | Trigger Window |
| `(0018,1100)` | Reconstruction Diameter |
| `(0018,1110)` | Distance Source to Detector |
| `(0018,1111)` | Distance Source to Patient |
| `(0018,1114)` | Estimated Radiographic Magnification Factor |
| `(0018,1120)` | Gantry/Detector Tilt |
| `(0018,1130)` | Table Height |
| `(0018,1140)` | Rotation Direction |
| `(0018,1150)` | Exposure Time |
| `(0018,1151)` | X-Ray Tube Current |
| `(0018,1152)` | Exposure |
| `(0018,1153)` | Exposure in µAs |
| `(0018,1154)` | Average Pulse Width |
| `(0018,1155)` | Radiation Setting |
| `(0018,115A)` | Radiation Mode |
| `(0018,115E)` | Image and Fluoroscopy Area Dose Product |
| `(0018,1160)` | Filter Type |
| `(0018,1162)` | Intensifier Size |
| `(0018,1164)` | Imager pixel spacing |
| `(0018,1166)` | Grid |
| `(0018,1170)` | Generator Power |
| `(0018,1181)` | Collimator Type |
| `(0018,1190)` | Focal Spot(s) |
| `(0018,1191)` | Anode Target Material |
| `(0018,11A0)` | Body Part Thickness |
| `(0018,11A2)` | Compression Force |
| `(0018,11A4)` | Paddle Description |
| `(0018,1210)` | Convolution Kernel |
| `(0018,1250)` | Receive Coil Name |
| `(0018,1310)` | Acquisition Matrix |
| `(0018,1312)` | In-plane Phase Encoding Direction |
| `(0018,1314)` | Flip Angle |
| `(0018,1315)` | Variable Flip Angle Flag |
| `(0018,1316)` | SAR |
| `(0018,1405)` | Relative X-Ray Exposure |
| `(0018,1500)` | Positioner Motion |
| `(0018,1508)` | PositionerType |
| `(0018,1510)` | Positioner Primary Angle |
| `(0018,1511)` | Positioner Secondary Angle |
| `(0018,5100)` | Patient Position |
| `(0018,5101)` | View Position |
| `(0018,7001)` | Detector Temperature |
| `(0018,7004)` | Detector type. |
| `(0018,7006)` | Detector Description |
| `(0018,701A)` | Detector Binning |
| `(0018,7030)` | Field of View Origin |
| `(0018,7032)` | Field of View Rotation |
| `(0018,7034)` | Field of View Horizontal Flip |
| `(0018,7050)` | Filter Material |
| `(0018,7052)` | Filter Thickness Minimum |
| `(0018,7054)` | Filter Thickness Maximum |
| `(0018,7060)` | Exposure Control Mode |
| `(0018,7062)` | Exposure Control Mode Description |
| `(0018,9004)` | Content Qualification |
| `(0018,9037)` | Cardiac Synchronization Technique Attribute |
| `(0018,9052)` | Spectral Width |
| `(0018,9053)` | Chemical Shift Reference |
| `(0018,9059)` | Decoupling |
| `(0018,9060)` | Decoupled Nucleus |
| `(0018,9061)` | Decoupled Frequency |
| `(0018,9062)` | Decoupling Method |
| `(0018,9063)` | Decoupling Chemical Shift Reference |
| `(0018,9065)` | Time Domain Filtering |
| `(0018,9066)` | Number of Zero Fills |
| `(0018,9067)` | Baseline Correction |
| `(0018,9070)` | Cardiac R-R Interval Specified Attribute |
| `(0018,9085)` | Cardiac Signal Source Attribute |
| `(0018,9098)` | Transmitter Frequency |
| `(0018,9101)` | Frequency Correction |
| `(0018,9169)` | Cardiac Beat Rejection Technique Attribute |
| `(0018,9170)` | Respiratory Motion Compensation Technique Attribute |
| `(0018,9171)` | Respiratory Signal Source Attribute |
| `(0018,9172)` | Bulk Motion Compensation Technique Attribute |
| `(0018,9173)` | Bulk Motion Signal Source Attribute |
| `(0018,9198)` | First Order Phase Correction |
| `(0018,9199)` | Water Referenced Phase Correction |
| `(0018,9306)` | Single Collimation Width |
| `(0018,9307)` | Total Collimation Width |
| `(0018,9309)` | Table Speed |
| `(0018,9310)` | Table Feed per Rotation |
| `(0018,9311)` | Spiral Pitch Factor |
| `(0018,9318)` | Reconstruction Target Center (Patient) |
| `(0018,9323)` | Exposure Modulation Type |
| `(0018,9324)` | Estimated Dose Saving |
| `(0018,9345)` | CTDIvol |
| `(0018,9352)` | Calcium Scoring Mass Factor Device |
| `(0018,9559)` | Positioner Primary Angle Direction |
| `(0020,0011)` | Series Number |
| `(0020,0012)` | Acquisition number |
| `(0020,0013)` | Instance Number |
| `(0020,0020)` | Patient Orientation |
| `(0020,0032)` | Image Position (Patient) |
| `(0020,0037)` | Image Orientation (Patient) |
| `(0020,0060)` | Laterality |
| `(0020,0062)` | ImageLaterality |
| `(0020,1002)` | Images in Acquisition |
| `(0020,1040)` | Position Reference Indicator |
| `(0020,1041)` | Slice Location |
| `(0020,9250)` | Respiratory Trigger Type Attribute |
| `(0020,9256)` | Respiratory Trigger Delay Threshold Attribute |
| `(0028,0002)` | Samples per pixel. |
| `(0028,0004)` | Photometric Interpretation |
| `(0028,0006)` | Planar Configuration |
| `(0028,0008)` | Number of Frames |
| `(0028,0009)` | Frame Increment Pointer |
| `(0028,0010)` | Rows |
| `(0028,0011)` | Columns |
| `(0028,0030)` | Pixel Spacing |
| `(0028,0034)` | Pixel Aspect Ratio |
| `(0028,0100)` | Bits Allocated |
| `(0028,0101)` | Bits Stored |
| `(0028,0102)` | High Bit, required to decode pixel data |
| `(0028,0103)` | Pixel Representation |
| `(0028,0106)` | Smallest Image Pixel Value |
| `(0028,0107)` | Largest Image Pixel Value |
| `(0028,0120)` | Pixel Padding Value. |
| `(0028,0121)` | Pixel Padding Range Limit |
| `(0028,0300)` | Quality Control Image |
| `(0028,0301)` | Burned In Annotation |
| `(0028,0302)` | Recognizable Visual Features |
| `(0028,0A04)` | Pixel Spacing Calibration Description |
| `(0028,1040)` | Pixel intensity relationship |
| `(0028,1041)` | Pixel intensity relationship sign |
| `(0028,1050)` | Window Center |
| `(0028,1051)` | Window Width |
| `(0028,1052)` | Rescale Intercept |
| `(0028,1053)` | Rescale Slope |
| `(0028,1054)` | Rescale Type |
| `(0028,1055)` | Window Center & Width Explanation |
| `(0028,1056)` | VOI LUT Function |
| `(0028,1101)` | Red Palette Color Lookup Table Descriptor |
| `(0028,1102)` | Green Palette Color Lookup Table Descriptor |
| `(0028,1103)` | Blue Palette Color Lookup Table Descriptor |
| `(0028,1201)` | Red Palette Color Lookup Table Data |
| `(0028,1202)` | Green Palette Color Lookup Table Data |
| `(0028,1203)` | Blue Palette Color Lookup Table Data |
| `(0028,1221)` | Segmented Red Palette Color Lookup Table Data |
| `(0028,1222)` | Segmented Green Palette Color Lookup Table Data |
| `(0028,1223)` | Segmented Blue Palette Color Lookup Table Data |
| `(0028,1300)` | Breast Implant Present |
| `(0028,2110)` | Lossy Image Compression |
| `(0028,2112)` | Lossy Image Ratio |
| `(0028,2114)` | Lossy Image Compression Method |
| `(0028,6010)` | Representative Frame Number |
| `(0028,9001)` | Data Point Rows |
| `(0028,9002)` | Data Point Columns |
| `(0028,9003)` | Signal Domain Columns |
| `(0028,9108)` | Data Representation |
| `(0028,9235)` | Signal Domain Rows |
| `(0040,0301)` | Total Number of Exposures |
| `(0040,0314)` | Half Value Layer |
| `(0040,0316)` | Organ Dose |
| `(0040,0318)` | OrganExposed |
| `(0040,8302)` | Entrance Dose in mGy |
| `(0054,0010)` | Energy Window Vector |
| `(0054,0011)` | Number of Energy Windows |
| `(0054,0020)` | Detector Vector |
| `(0054,0021)` | Number of Detectors |
| `(0054,0030)` | Phase Vector |
| `(0054,0031)` | Number of Phases |
| `(0054,0050)` | Rotation Vector |
| `(0054,0051)` | Number of Rotations |
| `(0054,0060)` | R-R Interval Vector |
| `(0054,0061)` | Number of R-R Intervals |
| `(0054,0070)` | Time Slot Vector |
| `(0054,0071)` | Number of Time Slots |
| `(0054,0080)` | Slice Vector |
| `(0054,0081)` | Number of Slices |
| `(0054,0090)` | Angular View Vector |
| `(0054,0100)` | Time Slice Vector |
| `(0054,0101)` | Number of Time Slices |
| `(0054,1000)` | Series Type |
| `(0054,1001)` | Units |
| `(0054,1002)` | Counts Source |
| `(0054,1004)` | Reprojection Method |
| `(0054,1102)` | Decay Correction |
| `(0054,1300)` | Frame Reference Time |
| `(0054,1321)` | Decay Factor |
| `(0054,1330)` | Image Index |
| `(2050,0020)` | Presentation LUT Shape |
| `(5600,0010)` | First Order Phase Correction Angle |
| `(5600,0020)` | Spectroscopy Data |
| `(7FE0,0010)` | Pixel Data |

<!-- END GENERATED POLICY TABLES -->

### Usage

```js
  import * as dcmio from "dicomanon"
  var reader = new FileReader()
  reader.onload = function(e) {
      dicomData = dcmio.Message.readFile(e.target.result);
      dicomData.dict = dcmio.Anonymize(dicomData.dict);
      warnings = dcmio.Validator(dicomData.dict);
      var buffer = dicomData.write();
  }
```

### Limitations
The anonymiser won't be able to identify or remove burnt-in information within an image, and works under the assumption that input images are DICOM standard conformant. We recommend manually reviewing the output of the tool before sharing any images.

### Development
- `npm install` to install dependencies
- `npm start` to start the local development server
- `npm run build` to generate the JS output in `lib` from the TypeScript sources.
- `npm run update-readme` to regenerate the policy tables above from `src/Policies.ts`.

If you change the policy in `src/Policies.ts`, run `npm run update-readme` and
commit the regenerated tables as part of your PR. Likewise, changes to `lib`
are to be committed back to the repository.
