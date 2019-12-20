import Tag from './Tag';
export declare function tagFromNumbers(group: any, element: any): Tag;
export default class ValueRepresentation {
    type: string;
    multi: boolean;
    maxLength: number | undefined;
    noMultiple: boolean;
    fillWith: string;
    padByte: string;
    fixed: boolean;
    16: any;
    defaultValue: string | number;
    valueLength: number;
    maxCharLength: number;
    checkLength?: (value: string) => boolean;
    constructor(type: any, value?: undefined);
    isBinary(): boolean;
    allowMultiple(): boolean;
    isExplicit(): boolean;
    read(stream: any, length: any, syntax: any): any;
    readBytes(stream: any, length: any, _syntax: any): any;
    readNullPaddedString(stream: any, length: any): any;
    writeFilledString(stream: any, value: any, length: any): any;
    write(stream: any, type: any, ...valueArgs: any[]): any[];
    writeBytes(stream: any, value: any, lengths: any, isEncapsulated?: boolean): number;
    static createByTypeString(type: string): ValueRepresentation;
}
