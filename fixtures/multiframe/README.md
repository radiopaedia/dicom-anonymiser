# Multi-frame test fixtures

Openly licensed DICOM test files used by `src/Multiframe.test.ts`. None of them
contain real patient data: they are the standard pydicom test images (synthetic
or long-published demonstration datasets with placeholder names).

| File | Bytes | What it exercises | Origin |
|------|------:|-------------------|--------|
| `examples_ybr_color.dcm` | 224,902 | Ultrasound Multi-frame Image Storage, JPEG Baseline (1.2.840.10008.1.2.4.50), 30 frames, Basic Offset Table with 30 entries, one fragment per frame | pydicom package, `pydicom/data/test_files/examples_ybr_color.dcm` |
| `emri_small_jpeg_2k_lossless.dcm` | 40,324 | Enhanced MR Image Storage, JPEG 2000 Lossless (1.2.840.10008.1.2.4.90), 10 frames, empty Basic Offset Table, one fragment per frame | pydicom-data, `data_store/data/emri_small_jpeg_2k_lossless.dcm` |
| `SC_rgb_rle_2frame.dcm` | 2,696 | Secondary Capture, RLE Lossless (1.2.840.10008.1.2.5), 2 frames, Basic Offset Table with 2 entries | pydicom package, `pydicom/data/test_files/SC_rgb_rle_2frame.dcm` |
| `US1_J2KR.dcm` | 153,760 | Ultrasound Image Storage, single frame, JPEG 2000 Lossless, one frame split across 3 fragments, empty Basic Offset Table | pydicom-data, `data_store/data/US1_J2KR.dcm` |
| `eCT_Supplemental.dcm` | 1,052,902 | Enhanced CT Image Storage, native Explicit VR Little Endian, 2 frames, Shared and Per-frame Functional Groups Sequences (nested SQ) | pydicom-data, `data_store/data/eCT_Supplemental.dcm` |

## Source and licence

- pydicom: https://github.com/pydicom/pydicom (MIT licence, "Copyright (c)
  2008-2020 Darcy Mason and pydicom contributors"). Files were taken from
  pydicom 3.0.2 as installed by `pip install pydicom`.
- pydicom-data: https://github.com/pydicom/pydicom-data (MIT licence,
  "Copyright (c) 2020 Dicom in Python"). Files were fetched with
  `pydicom.data.get_testdata_file(name)` on 2026-10-29.

Both licences permit redistribution with the copyright notice retained; this
file is that notice. The MIT licence text is at
https://github.com/pydicom/pydicom-data/blob/master/LICENSE.

## Refreshing

```sh
python3 -m venv .venv && .venv/bin/pip install pydicom
.venv/bin/python -c "from pydicom.data import get_testdata_file as g; import shutil; \
  [shutil.copy(g(n), 'fixtures/multiframe/' + n) for n in \
  ['examples_ybr_color.dcm','emri_small_jpeg_2k_lossless.dcm','SC_rgb_rle_2frame.dcm','US1_J2KR.dcm','eCT_Supplemental.dcm']]"
```
