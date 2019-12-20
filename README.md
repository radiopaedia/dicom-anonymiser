# dicomanon

With the generous support of the [Advanced Radiology Services Foundation (ARSF)](https://bitly.com/ARSFrad), Radiopaedia is building support to upload cases as DICOM rather than requiring files to be exported to JPG/PNG. A critically important part of this project is to ensure that no patient data is inadvertently sent to our servers. We have, therefore, developed a DICOM anonymiser and have made that available as an open source project so that anyway can review the code we are running. 

Additionally, we have built [this page](https://radiopaedia.org/standalone_dicom_anonymizer) where you can see the fields we process. All of this code runs client-side (i.e. no data is sent to Radiopaedia or anywhere else from this page). In fact, once you have loaded this page, you can disconnect your internet and everything will still work. 

We’d love to hear any feedback you may have. Just write to general@radiopaedia.org

## Folder structure:

 * /src: Original typescript files
 * /lib: Compiled javascripts
 * /docs: Browser demo of the project.
