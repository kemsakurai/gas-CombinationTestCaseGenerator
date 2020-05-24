export declare type Scalar = number | string;
export declare type Dict = {
    [s: string]: any;
};
export declare type List = {
    [index: number]: any[];
};
export declare type FactorsType = {
    [key: string]: any[];
    [index: number]: any[];
} | any[][];
export declare type SerialsType = {
    [key: string]: number[];
    [index: number]: number[];
} | any[][];
export declare type IncompletedType = Map<string, number[]>;
