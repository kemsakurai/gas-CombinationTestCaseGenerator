export { hex as md5 } from 'js-md5';
export declare const all: (values: any[]) => boolean;
export declare const zip: (...lists: any[]) => any[];
export declare const copy: (obj: object | any[]) => {};
export declare const len: (obj: object | any[]) => number;
export declare const getItems: (container: {
    [key: string]: any[];
    [index: number]: any[];
} | any[][] | Map<string | number, any[]>) => [string | number, any[]][];
export declare const range: (start: number, stop: number, step?: number) => number[];
export declare const combinations: (list: Iterable<any>, length: number) => number[][];
export declare const product: (...list: number[][]) => number[][];
