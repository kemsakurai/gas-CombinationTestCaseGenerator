import Utils from './Utils';

class PairsStorageNode {
  _nodeId: string;
  _counter: number;
  public _in: Set<any>;
  public _out: Set<any>;

  set nodeId(nodeId) {
    this._nodeId = nodeId;
  }

  get nodeId() {
    return this._nodeId;
  }

  set counter(counter: number) {
    this._counter = counter;
  }

  get counter() {
    return this._counter;
  }

  constructor(nodeId) {
    this._nodeId = nodeId;
    this._counter = 0;
    this._in = new Set<any>();
    this._out = new Set<any>();
  }

  public incCounter() {
    this._counter += 1;
  }
}

let keyCache = {};
export function key(items) {
  if (items in keyCache) {
    return keyCache[makeKey(items)];
  }
  let keyValue = new Array();
  for (let x of items) {
    keyValue.push(x.id);
  }
  keyCache[items] = keyValue;
  return keyValue;
}

function makeKey(items) {
  return 'a';
}

export default class PairsStorage {
  _n: number;
  _nodes: any;
  _combsArr: any;

  constructor(n) {
    this._n = n;
    this._nodes = {};
    this._combsArr = new Array();
    for (let e of Array.from(Array(n).keys())) {
      this._combsArr.push(new Set());
    }
  }

  public len() {
    return this._combsArr[this._combsArr.length - 1].size;
  }

  public addSequence(sequence) {
    for (let i of Utils.range(1, this._n + 1, 1)) {
      for (let combination of Utils.getPermutations(sequence, i)) {
        this.addCombination(combination);
      }
    }
  }
  public addCombination(combination) {
    let n = combination.lenght;
    if (n <= 0) {
      throw Error('Must n is > 0');
    }
    this._combsArr[n - 1].push(key(combination));
    let id = combination[0].id;
    if (n == 1 && !(id in this._nodes)) {
      this._nodes[id] = new PairsStorageNode(id);
      return;
    }

    let ids = [
      ...combination.map(d => {
        return d.x;
      })
    ];
    for (let i = 0; i < ids.length; i++) {
      let id = ids[i];
      let curr: PairsStorageNode = this._nodes[id];
      curr.incCounter();

      for (let elem of ids.slice(i, ids.length)) {
        curr._in.add(elem);
      }
      for (let elem of ids.slice(1, i + 1)) {
        curr._out.add(elem);
      }
    }
  }

  public getNodeInfo(item) {
    return this._nodes[item.id] != null ? this._nodes[item.id] : new PairsStorageNode(item.id);
  }

  public getCombs() {
    return this._combsArr;
  }
}
