import { TagDict } from "./Message";
/**
 * The validate(dict) method will do some type checking against value representations.
 * The returned result will be a list of IValidatorWarnings, which are composed of
 * a level, which indicates severity, with 1 being a fatal error, 2 being a possible
 * information leak, and 3 being any abnormality, and a text description.
 **/
export interface IValidatorWarning {
    level: number;
    text: string;
}
export declare function supportedSOPClasses(): string[];
type Warnings = {
    [x: string]: Array<IValidatorWarning>;
};
export default function validate(dcm: TagDict): Warnings;
export {};
