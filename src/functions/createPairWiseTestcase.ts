import { pairWise } from "../libs/pairWise";
import AbstractTestcaseCreator from "./AbstractTestcaseCreator";

export const createPairWiseTestcase = (): void => {
  Logger.log("createPairWiseTestcase start");
  const creator = new TestcaseCreator();
  creator.create();
  Logger.log("createPairWiseTestcase end");
};

class TestcaseCreator extends AbstractTestcaseCreator {
  protected getSheetName(): string {
    return "pairWiseCombination";
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected createTestcases(values: any[][]): any {
    return pairWise(values);
  }
}
