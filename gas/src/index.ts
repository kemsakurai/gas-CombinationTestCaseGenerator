import { createFactorAndLevelSheet } from './functions/createFactorAndLevelSheet';
import { createAllCombinationTestcase } from './functions/createAllCombinationTestcase';
import { createOneWiseTestcase } from './functions/createOneWiseTestcase';
import { createPairWiseTestcase } from './functions/createPairWiseTestcase';
import { setPairWiseAPIURL } from './functions/setPairWiseAPIURL';

function onOpen() {
  let ui = SpreadsheetApp.getUi();
  let menu = ui.createMenu('gas-CombinationTestCaseGenerator');
  menu.addSubMenu(ui.createMenu("Settings")
          .addItem('Create Factor&Level sheet', 'createFactorAndLevelSheet')
          .addItem('Set pair-wise API URL', 'setPairWiseAPIURL'))
        .addSeparator()
        .addSubMenu(ui.createMenu("Create test case")
          .addItem('Create all combination test case', 'createAllCombinationTestcase')
          .addItem('Create one-wise test case', 'createOneWiseTestcase')
          .addItem('Create pair-wise test case', 'createPairWiseTestcase'))
        .addToUi();    
}

declare let global: any;
global.onOpen = onOpen;
global.createFactorAndLevelSheet = createFactorAndLevelSheet;
global.createAllCombinationTestcase = createAllCombinationTestcase;
global.createOneWiseTestcase = createOneWiseTestcase;
global.createPairWiseTestcase = createPairWiseTestcase;
global.setPairWiseAPIURL = setPairWiseAPIURL;
