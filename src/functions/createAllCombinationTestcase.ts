import AbstractTestcaseCreator from './AbstractTestcaseCreator';

export const createAllCombinationTestcase = (): void => {
  Logger.log('createAllCombinationTestcase start');
  let creator = new TestcaseCreator();
  creator.create();
  Logger.log('createAllCombinationTestcase end');
};

class TestcaseCreator extends AbstractTestcaseCreator {
  protected getSheetName(): string {
    return 'allCombination';
  }
  protected createTestcases(values: any[][]) {
    return cartesianProduct(values);
  }
}

function cartesianProduct(arr) {
  return arr.reduce(
    function(a, b) {
      return a
        .map(function(x: { concat: (arg0: any) => void }) {
          return b.map(function(y) {
            return x.concat(y);
          });
        })
        .reduce(function(a: { concat: (arg0: any) => void }, b: any) {
          return a.concat(b);
        }, []);
    },
    [[]]
  );
}
