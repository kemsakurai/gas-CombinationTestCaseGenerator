export const createAllCombinationTestcase = (): void => {
  Logger.log('createAllCombinationTestcase start');
  const configSheetName = 'Factor&Level';
  let configSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(configSheetName);
  if (configSheet) {
    let values = configSheet
      .getRange(2, 1, configSheet.getLastRow(), configSheet.getLastColumn())
      .getValues();
    values = transpose(values);
    for (var i = 0; i < values.length; i++) {
      values[i] = values[i].filter(isNotBlank);
    }
    let allCombination = cartesianProduct(values);
    const allCombinationSheetName = 'allCombination';
    let allCombinationSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
      allCombinationSheetName
    );
    if (!allCombinationSheet) {
      allCombinationSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet();
      allCombinationSheet.setName(allCombinationSheetName);
    } else {
      allCombinationSheet.clear();
    }
    let headers = configSheet.getRange(1, 1, 1, configSheet.getLastColumn()).getValues();
    allCombinationSheet.getRange(1, 1, 1, headers[0].length).setValues(headers);
    allCombinationSheet.getRange(1, 1, 1, headers[0].length).setBackground('green');
    allCombinationSheet
      .getRange(2, 1, allCombination.length, allCombination[0].length)
      .setValues(allCombination);
  }
  Logger.log('createAllCombinationTestcase end');
};

function transpose(a) {
  return Object.keys(a[0]).map(function(c) {
    return a.map(function(r) {
      return r[c];
    });
  });
}
function isNotBlank(value) {
  let result = typeof value === 'undefined' || value === '';
  return !result;
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
