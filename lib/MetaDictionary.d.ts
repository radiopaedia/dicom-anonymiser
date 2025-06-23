import { TagDict, TagValueEntry } from "./Message";
export default class DicomMetaDictionary {
    static punctuateTag(rawTag: string): string;
    static unpunctuateTag(tag: string): string;
    static cleanDataset(dataset: TagDict): TagDict;
    static namifyDataset(dataset: TagDict): TagDict;
    static naturalizeDataset(dataset: TagDict): {
        _vrMap: {
            [name: string]: string;
        };
    } & {
        [x: string]: TagValueEntry | TagValueEntry[];
    };
    static uid(): string;
    static date(): string;
    static time(): string;
    static dateTime(): string;
    static nameMap: Record<string, {
        name: string;
        vr: string;
        tag: string;
    }>;
    static _generateNameMap(): void;
    static uidMap: {
        [name: string]: string;
    };
    static _generateUIDMap(): void;
    static sopClassNamesByUID: {
        [x: string]: string;
    };
    static dictionary: Record<string, {
        name: string;
        vr: string;
    }>;
}
