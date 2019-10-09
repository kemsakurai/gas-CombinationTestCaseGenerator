import "@babel/polyfill";
import { createFactorAndLevelSheet } from './functions/createFactorAndLevelSheet';
import { createAllCombinationTestcase } from './functions/createAllCombinationTestcase';
import { createOneWiseTestcase } from './functions/createOneWiseTestcase';
function onOpen() {
  const menu = [
    { name: 'Create Factor&Level sheet', functionName: 'createFactorAndLevelSheet' },
    { name: 'Create all combination test case', functionName: 'createAllCombinationTestcase' },
    { name: 'Create one-wise test case', functionName: 'createOneWiseTestcase' },
    { name: 'Create pair-wise test case', functionName: 'createPairWiseTestcase' }
  ];
  SpreadsheetApp.getActiveSpreadsheet().addMenu('gas-CombinationTestCaseGenerator', menu);
}

declare let global: any;
global.onOpen = onOpen;
global.createFactorAndLevelSheet = createFactorAndLevelSheet;
global.createAllCombinationTestcase = createAllCombinationTestcase;
global.createOneWiseTestcase = createOneWiseTestcase;
