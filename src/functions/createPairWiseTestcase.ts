import Utils from '../libs/Utils';
import { default as make, sorters } from '../covertable/index';

export const createPairWiseTestcase = (): void => {
  Logger.log('createPairWiseTestcase start');
  const configSheetName = 'Factor&Level';
  let configSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(configSheetName);
  if (configSheet) {
    let values = configSheet
      .getRange(2, 1, configSheet.getLastRow(), configSheet.getLastColumn())
      .getValues();
    values = Utils.transpose(values);
    for (var i = 0; i < values.length; i++) {
      values[i] = values[i].filter(Utils.isNotBlank);
    }

    let pairWiseCombination = make(values, { sorter: sorters.random });
    const combinationSheetName = 'oneWiseCombination';
    let allCombinationSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
      combinationSheetName
    );
    if (!allCombinationSheet) {
      allCombinationSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet();
      allCombinationSheet.setName(combinationSheetName);
    } else {
      allCombinationSheet.clear();
    }
    let headers = configSheet.getRange(1, 1, 1, configSheet.getLastColumn()).getValues();
    allCombinationSheet.getRange(1, 1, 1, headers[0].length).setValues(headers);
    allCombinationSheet.getRange(1, 1, 1, headers[0].length).setBackground('green');
    allCombinationSheet
      .getRange(2, 1, pairWiseCombination.length, pairWiseCombination[0].length)
      .setValues(pairWiseCombination);
  }
  Logger.log('createPairWiseTestcase end');
};
