import { IValidatorWarning } from "./Validator";
import { TagDict } from "./Message";
/**
 * Thrown when a dataset cannot be fully de-identified. We never return a
 * dataset stamped PatientIdentityRemoved=NO; callers must handle this and
 * withhold the file rather than upload a partially-anonymised dataset.
 */
export declare class AnonymizationError extends Error {
    readonly warnings: IValidatorWarning[];
    constructor(warnings: IValidatorWarning[]);
}
export default function anonymize(dcm: TagDict): TagDict;
