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
export default function policyFor(sopClassUid: string): IPolicy;
