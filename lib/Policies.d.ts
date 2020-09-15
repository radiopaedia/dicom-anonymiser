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
export interface IPolicy {
    [tagId: string]: any;
}
export default function policyFor(sopClassUid: string): IPolicy;
