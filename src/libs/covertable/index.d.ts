import * as sorters from './sorters/index';
import { FactorsType } from './types';
interface makeOptions {
    length?: number;
    sorter?: Function;
    sortArgs?: object;
    preFilter?: Function;
    postFilter?: Function;
}
declare const make: (factors: FactorsType, options?: makeOptions) => any[];
export { make as default, sorters };
