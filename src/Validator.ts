function supportedSOPClasses() :string[] {
  return [
    "1.2.840.10008.5.1.4.1.1.1.1", // Digital X-Ray Image - For Presentation
    "1.2.840.10008.5.1.4.1.1.1.1.1", // Digital X-Ray Image - For Processing
    "1.2.840.10008.5.1.4.1.1.1.2", // Digital Mammography X-Ray Image - For Presentation
    "1.2.840.10008.5.1.4.1.1.1.2.1", // Digital Mammography X-Ray Image - For Processing
    "1.2.840.10008.5.1.4.1.1.2", // CT Image
    "1.2.840.10008.5.1.4.1.1.2.1", // Enhanced CT Image
    "1.2.840.10008.5.1.4.1.1.2.2", // Legacy Converted Enhanced CT Image
    "1.2.840.10008.5.1.4.1.1.3.1", // Ultrasound Multi-frame Image
    "1.2.840.10008.5.1.4.1.1.4", // MR Image
    "1.2.840.10008.5.1.4.1.1.4.1", // Enhanced MR Image
    "1.2.840.10008.5.1.4.1.1.4.2", // MR Spectroscopy
    "1.2.840.10008.5.1.4.1.1.4.3", // Enhanced MR Color Image
    "1.2.840.10008.5.1.4.1.1.6.1", // Ultrasound Image
    "1.2.840.10008.5.1.4.1.1.12.1", // X-Ray Angiographic Image
    "1.2.840.10008.5.1.4.1.1.12.1.1", // Enhanced XA Image
    "1.2.840.10008.5.1.4.1.1.12.2", // X-Ray Radiofluoroscopic Image
    "1.2.840.10008.5.1.4.1.1.13.1.1", // X-Ray 3D Angiographic Image
    "1.2.840.10008.5.1.4.1.1.20", // Nuclear Medicine Image
    "1.2.840.10008.5.1.4.1.1.128", // Positron Emission Tomography Image
    "1.2.840.10008.5.1.4.1.1.130", // Enhanced PET Image
    "1.2.840.10008.5.1.4.1.1.128.1" // Legacy Converted Enhanced PET Image
  ]
}

function validate() {

}
