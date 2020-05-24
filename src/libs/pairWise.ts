import { default as make, sorters } from '../libs/covertable/index';
export const pairWise = (values): any => {
  return make(values, {
    // optional
    length: 2, // default: 2
    sorter: sorters.greedy, // default: sorters.sequential
    sortArgs: {} // default: {}
  });
};
