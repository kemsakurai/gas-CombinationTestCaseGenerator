import { Scalar, IncompletedType } from '../types';
interface sortArgsType {
    row: any;
    parents: Map<number, Scalar>;
    length: number;
    seed: any;
}
export default function (incompleted: IncompletedType, sortArgs: sortArgsType): Generator<number[], void, unknown>;
export {};
