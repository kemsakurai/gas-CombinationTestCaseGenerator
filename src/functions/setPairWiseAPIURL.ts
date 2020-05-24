import Utils from '../libs/Utils';
export const setPairWiseAPIURL = (): void => {
  let ui = SpreadsheetApp.getUi();  
  let response = ui.prompt('APIのURLを入力してください。');
  
  let response = ui.prompt('APIのURLを入力してください。');
  let token = response.getResponseText();
  // getSelectedButtonでクリックされたボタンの情報を取得できる。入力値なしか×ボタンをクリックされたかの確認をしている
  if (token == '' || response.getSelectedButton() == ui.Button.CLOSE) {
    return;
  }
  Utils.setPairWiseAPIURL(token);
  ui.alert('入力した値をAPIのURLとして設定しました。');
};
