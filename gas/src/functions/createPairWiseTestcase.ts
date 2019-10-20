import { pairWise } from '../libs/pairWise';
import AbstractTestcaseCreator from './AbstractTestcaseCreator';

export const createPairWiseTestcase = (): void => {
  Logger.log('createPairWiseTestcase start');
  let creator = new TestcaseCreator();
  creator.create();
  Logger.log('createPairWiseTestcase end');
};

class TestcaseCreator extends AbstractTestcaseCreator {
  protected getSheetName(): string {
    return 'pairWiseCombination';
  }
  protected createTestcases(values: any[][]) {
    return pairWise(values);
  }
}
