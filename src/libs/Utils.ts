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
  public static union(setA, setB) {
    var _union = new Set(setA);
    for (var elem of setB) {
      _union.add(elem);
    }
    return _union;
  }

  public static difference(setA, setB) {
    var _difference = new Set(setA);
    for (var elem of setB) {
      _difference.delete(elem);
    }
    return _difference;
  }

  public static range(start, stop, step) {
    if (typeof stop == 'undefined') {
      // one param defined
      stop = start;
      start = 0;
    }

    if (typeof step == 'undefined') {
      step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
      return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
      result.push(i);
    }

    return result;
  }
}
