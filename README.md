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
Note that Node.js v12 is necessary to build the project. Get it e.g. via [`nvm`](https://github.com/nvm-sh/nvm): `nvm install v12 && nvm use v12`.
`npm install` to install dependencies, then `npm run build` to generate the JS output in `lib` from the TypeScript sources. Please note that changes to `lib` are to be committed back to the repository.
