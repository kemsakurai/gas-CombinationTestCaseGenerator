import OrderedDict from './OrderedDict';
import PairsStorage, { key } from './PairsStorage';
import Utils from './Utils';

class Pairs {
  parameters: any;
  constructor(parameters) {
    this.parameters = parameters;
  }
}

class Item {
  private _itemId: string;
  private _itemValue: string;
  private _weights: any;

  constructor(itemId: string, itemValue: string) {
    this._itemId = itemId;
    this._itemValue = itemValue;
    this.setWeights([]);
  }

  public setWeights(values: any) {
    this._weights = values;
  }

  get itemId(): string {
    return this.itemId;
  }

  //setterメソッド
  set itemId(value: string) {
    this._itemId = value;
  }

  get weights(): any {
    return this._weights;
  }
}

function getMaxCombinationNumber(prameterMatrix, n) {
  let paramLenList = new Array();
  for (let valueList of prameterMatrix) {
    paramLenList.push(valueList.length);
  }
  let permutations = Utils.getPermutations(paramLenList, n);
  let sum = 0;
  for (let elem of permutations) {
    // TODO n = 2 のみ 動作する
    sum += elem[0] * elem[1];
  }
  return sum;
}

function cmpItem(lhs: Item, rhs: Item) {
  if (lhs.weights == rhs.weights) {
    return 0;
  }
  return lhs.weights < rhs.weights ? -1 : 1;
}

export default class AllPairs {
  _isOrderedDictParam: boolean;
  _paramNameList: any[];
  _pairClass: Pairs;
  _filterFunc: any;
  _n: number;
  _pairs: PairsStorage;
  _valueMatrix: any;
  _maxUniquePairsExpected: number;
  _workingItemMatrix: any;

  constructor(parameters, filterFunc?, previouslyTested?, private n: number = 2) {
    if (!previouslyTested) {
      previouslyTested = [[]];
    }
    this.validateParameter(parameters);
    this._isOrderedDictParam = parameters.constructor === OrderedDict;
    this._paramNameList = this.extractParamNameList(parameters);
    this._pairClass = new Pairs(parameters);
    this._filterFunc = filterFunc
      ? filterFunc
      : function() {
          return true;
        };
    this._n = n;
    this._pairs = new PairsStorage(n);
    this._valueMatrix = this.extractValueMatrix(parameters);
    this._maxUniquePairsExpected = getMaxCombinationNumber(this._valueMatrix, n);
    this._workingItemMatrix = this.getWorkingItemMatrix(this._valueMatrix);

    for (let arr of previouslyTested) {
      if (!arr || arr.length == 0) {
        continue;
      }

      if (arr.length != this._workingItemMatrix.length) {
        throw Error('previously tested combination is not complete');
      }

      if (!this._filterFunc(arr)) {
        throw Error('invalid tested combination is provided');
      }

      let tested = [];
      for (let i in arr) {
        let val = arr[i];
        let idxs = [];
        for (let item of this._workingItemMatrix[i]) {
          if (item.value == val) {
            idxs.push(new Item(item.id, String(0)));
          }
          if (idxs.length != 1) {
            throw Error(
              'value from previously tested combination is not found in the parameters or found more than once'
            );
          }
        }
        tested.push(idxs[0]);
      }
      this._pairs.addSequence(tested);
    }
  }

  private validateParameter(parameters) {
    if (parameters.constructor === OrderedDict) {
      for (let parameterList of parameters.values()) {
        if (typeof parameterList === 'undefined') {
          throw Error('each parameter arrays must have at least one item');
        }
      }
      return;
    }

    if (parameters.length < 2) {
      throw Error('must provide more than one option');
    }

    for (let parameterList of parameters) {
      if (!parameterList) {
        throw Error('each parameter arrays must have at least one item');
      }
    }
  }

  private extractParamNameList(parameters): any[] {
    if (!this._isOrderedDictParam) {
      return [];
    }
    return parameters.values();
  }

  private extractValueMatrix(parameters) {
    if (!this._isOrderedDictParam) {
      return parameters;
    }
    let ret = new Array();
    for (let elem of parameters) {
      ret.push(elem);
    }
    return ret;
  }

  private getWorkingItemMatrix(parameterMatrix) {
    let ret = new Array();
    for (let paramIndex in parameterMatrix) {
      let valueList = parameterMatrix[paramIndex];
      let innerRet = new Array();
      for (let valueIndex in valueList) {
        let value = valueList[valueIndex];
        innerRet.push(new Item('a ' + paramIndex + 'v ' + valueIndex, value));
      }
      ret.push(innerRet);
    }
    return ret;
  }
  public iter() {
    return this;
  }
  public next() {
    return this._next();
  }

  public static _getValues(itemList) {
    let ret = new Array();
    for (let item of itemList) {
      ret.push(item.value);
    }
    return ret;
  }

  private _next() {
    let pairsLength = this._pairs.len();
    if (!(pairsLength <= this._maxUniquePairsExpected)) {
      throw Error('this._pairs.length <= this._maxUniquePairsExpected is false');
    }
    if (pairsLength == this._maxUniquePairsExpected) {
      throw Error('StopIteration');
    }
    let previousUniquePairsCount = pairsLength;
    let chosenItemList = [];
    let indexes = [];

    let direction = 1;
    let i = 0;
    while (-1 < i < this._workingItemMatrix.length) {
      if (direction == 1) {
        this.resortWorkingArray(chosenItemList.slice(0, i), i);
        indexes[i] = 0;
      } else if (direction == 0 || direction == -1) {
        indexes[i] += 1;
        if (indexes[i] >= this._workingItemMatrix[i].length) {
          direction = -1;
          if (i == 0) {
            throw Error('StopIteration');
          }
          i += direction;
          continue;
        }
        direction = 0;
      } else {
        throw Error("next(): unknown 'direction' code " + direction);
      }

      chosenItemList[i] = this._workingItemMatrix[i][indexes[i]];
    
      if (this._filterFunc(AllPairs._getValues(chosenItemList.slice(0, i + 1)))) {
        if (!(direction > -1)) {
          throw Error('direction > -1');
        }
        direction = 1;
      } else {
        direction = 0;
        i += direction;
      }
    }
    console.log("this._workingItemMatrix.length", this._workingItemMatrix.length);
    console.log("chosenItemList.length", chosenItemList.length);
    if (this._workingItemMatrix.length != chosenItemList.length) {
      throw Error('StopIteration');
    }
    this._pairs.addSequence(chosenItemList);
    pairsLength = this._pairs.len();
    if (pairsLength == previousUniquePairsCount) {
      throw Error('StopIteration');
    }

    return this._getIterationValue(chosenItemList);
  }

  private resortWorkingArray(chosenItemList, num) {
    for (let item of this._workingItemMatrix[num]) {
      let dataNode = this._pairs.getNodeInfo(item);
      let newCombs = new Array();
      for (let i of Utils.range(0, this._n, 1)) {
        let unionSet = Utils.union(chosenItemList, [item]);
        console.log("unionSet", unionSet);
        let combinations = Utils.getPermutations(unionSet, i + 1);
        for (let z of combinations) {
          let setA = new Set(key(z));
          let setB = this._pairs.getCombs()[i];
          newCombs.push(Utils.difference(setA, setB));
        }
      }
      let weights = [-1 * newCombs[newCombs.length - 1].length];
      weights.push(dataNode._out.length);
      for (let x of newCombs.reverse()) {
        weights.push(x.length);
      }
      weights.push(-dataNode.counter);
      weights.push(-1 * dataNode._in.length);
      item.setWeights(weights);
    }
    this._workingItemMatrix[num].sort(cmpItem);
  }

  private _getIterationValue(itemList) {
    if (!this._paramNameList) {
      let ret = new Array();
      for (let item of itemList) {
        ret.push(item.value);
      }
      return ret;
    }
    let ret = new Array();
    for (let item of itemList) {
      ret.push(item.value);
    }
    this._pairClass = new Pairs(ret);
    return this._pairClass;
  }
}
