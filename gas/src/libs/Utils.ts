export default class Utils {
  public static isNotBlank(value: string): boolean {
    let result = typeof value === 'undefined' || value === '';
    return !result;
  }

  public static transpose(a: {}[]) {
    return Object.keys(a[0]).map(function(c) {
      return a.map(function(r) {
        return r[c];
      });
    });
  }
  /**
   * checkUndefined
   */
  public static checkUndefined(value: any, message: string) {
    if (typeof value === 'undefined') {
      throw new Error(message);
    }
  }

  public static setPairWiseAPIURL(value: string) {
    PropertiesService.getScriptProperties().setProperty('API_URL', value);
  }

  public static getPairWiseAPIURL(): string {
    return PropertiesService.getScriptProperties().getProperty('API_URL');
  }

  public static getPermutations(array: any, size: number) {
    function p(t, i) {
      if (t.length === size) {
        result.push(t);
        return;
      }
      if (i + 1 > array.length) {
        return;
      }
      p(t.concat(array[i]), i + 1);
      p(t, i + 1);
    }

    var result = [];
    p([], 0);
    return result;
  }
}
