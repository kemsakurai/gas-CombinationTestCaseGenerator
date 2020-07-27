export default class Utils {
  public static isNotBlank(value: string): boolean {
    const result = typeof value === "undefined" || value === "";
    return !result;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/ban-types
  public static transpose(a: {}[]): any {
    return Object.keys(a[0]).map(function(c) {
      return a.map(function(r) {
        return r[c];
      });
    });
  }
  /**
   * checkUndefined
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any
  public static checkUndefined(value: any, message: string): void {
    if (typeof value === "undefined") {
      throw new Error(message);
    }
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any
  public static getPermutations(array: any, size: number): any {
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

    const result = [];
    p([], 0);
    return result;
  }
}
