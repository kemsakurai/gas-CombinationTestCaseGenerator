require('es6-shim');
export default function* (
    incompleted: Map<string, number[]>,
    sortArgs: any
  ) {
    for (let pair of incompleted.values()) {
      yield pair
    }
  }
  