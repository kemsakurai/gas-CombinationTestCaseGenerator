import Utils from "../libs/Utils";

export default abstract class AbstractTestcaseCreator {
  /**
   * The template method defines the skeleton of an algorithm.
   */
  public create(): void {
    const configSheetName = "Factor&Level";
    const configSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
      configSheetName
    );
    Utils.checkUndefined(configSheet, "configSheet is Undefined..");
    let values = configSheet
      .getRange(2, 1, configSheet.getLastRow(), configSheet.getLastColumn())
      .getValues();
    values = Utils.transpose(values);
    for (let i = 0; i < values.length; i++) {
      values[i] = values[i].filter(Utils.isNotBlank);
    }

    const combinationTestcases = this.createTestcases(values);

    const combinationTestCaseSheetName = this.getSheetName();
    let combinationSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
      combinationTestCaseSheetName
    );

    if (!combinationSheet) {
      combinationSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet();
      combinationSheet.setName(combinationTestCaseSheetName);
    } else {
      combinationSheet.clear();
    }

    const headerValues = configSheet
      .getRange(1, 1, 1, configSheet.getLastColumn())
      .getValues();
    const headerRange = combinationSheet.getRange(
      1,
      1,
      1,
      headerValues[0].length
    );
    headerRange.setValues(headerValues);
    headerRange.setBackground("green");

    combinationSheet
      .getRange(
        2,
        1,
        combinationTestcases.length,
        combinationTestcases[0].length
      )
      .setValues(combinationTestcases);
  }

  protected abstract getSheetName(): string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected abstract createTestcases(values: any[][]): any;
}
