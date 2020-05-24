import { oneWise } from '../libs/oneWise';
import AbstractTestcaseCreator from './AbstractTestcaseCreator';

export const createOneWiseTestcase = (): void => {
  Logger.log('createOneWiseTestcase start');
  let creator = new TestcaseCreator();
  creator.create();
  Logger.log('createOneWiseTestcase end');
};

class TestcaseCreator extends AbstractTestcaseCreator {
  protected getSheetName(): string {
    return 'oneWiseCombination';
  }
  protected createTestcases(values: any[][]) {
    return oneWise(values);
  }
}
