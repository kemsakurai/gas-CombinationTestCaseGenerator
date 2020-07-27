import { oneWise } from "../libs/oneWise";
import AbstractTestcaseCreator from "./AbstractTestcaseCreator";

export const createOneWiseTestcase = (): void => {
  Logger.log("createOneWiseTestcase start");
  const creator = new TestcaseCreator();
  creator.create();
  Logger.log("createOneWiseTestcase end");
};

class TestcaseCreator extends AbstractTestcaseCreator {
  protected getSheetName(): string {
    return "oneWiseCombination";
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected createTestcases(values: any[][]): any {
    return oneWise(values);
  }
}
