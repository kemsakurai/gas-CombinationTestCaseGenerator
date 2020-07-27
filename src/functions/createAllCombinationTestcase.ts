import AbstractTestcaseCreator from "./AbstractTestcaseCreator";

export const createAllCombinationTestcase = (): void => {
  Logger.log("createAllCombinationTestcase start");
  const creator = new TestcaseCreator();
  creator.create();
  Logger.log("createAllCombinationTestcase end");
};

class TestcaseCreator extends AbstractTestcaseCreator {
  protected getSheetName(): string {
    return "allCombination";
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected createTestcases(values: any[][]): any {
    return cartesianProduct(values);
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function cartesianProduct(arr: any[][]): any {
  return arr.reduce(
    function(a, b) {
      return (
        a
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map(function(x: { concat: (arg0: any) => void }) {
            return b.map(function(y) {
              return x.concat(y);
            });
          })
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .reduce(function(a: { concat: (arg0: any) => void }, b: any) {
            return a.concat(b);
          }, [])
      );
    },
    [[]]
  );
}
