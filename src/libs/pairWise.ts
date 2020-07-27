import { default as make, sorters } from "../libs/covertable/index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
export const pairWise = (values): any => {
  return make(values, {
    // optional
    length: 2, // default: 2
    sorter: sorters.greedy, // default: sorters.sequential
    sortArgs: {} // default: {}
  });
};
