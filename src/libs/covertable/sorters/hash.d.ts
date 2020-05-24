interface sortArgsType {
    seed: any;
}
export default function (incompleted: Map<string, number[]>, sortArgs: sortArgsType): Generator<number[], void, unknown>;
export {};
