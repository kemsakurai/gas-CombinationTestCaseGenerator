import Utils from '../libs/Utils';
export const pairWise = (values): any => {
  let options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(values)
  };
  let url = Utils.getPairWiseAPIURL();
  let response = UrlFetchApp.fetch(url, options);
  return JSON.parse(response.getContentText());
};
