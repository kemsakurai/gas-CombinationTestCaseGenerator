"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sorters = __importStar(require("./sorters/index"));
exports.sorters = sorters;
const exceptions = __importStar(require("./exceptions"));
const utils_1 = require("./utils");
const ascOrder = (a, b) => a > b ? 1 : -1;
const convertFactorsToSerials = (factors) => {
    let origin = 0;
    const serials = utils_1.copy(factors);
    const parents = new Map();
    utils_1.getItems(factors).map(([subscript, factorList]) => {
        const length = utils_1.len(factorList);
        const serialList = [];
        utils_1.range(origin, origin + length).map((serial) => {
            serialList.push(serial);
            parents.set(serial, subscript);
        });
        serials[subscript] = serialList;
        origin += length;
    });
    return [serials, parents];
};
const makeIncompleted = (serials, length) => {
    const incompleted = new Map();
    const allKeys = utils_1.getItems(serials).map(([k, _]) => k);
    for (let keys of utils_1.combinations(allKeys, length)) {
        const comb = utils_1.range(0, length).map(i => serials[keys[i]]);
        for (let pair of utils_1.product(...comb)) {
            pair = pair.sort(ascOrder);
            incompleted.set(pair.toString(), pair);
        }
    }
    return incompleted;
};
class Row extends Map {
    constructor(row, factors, serials, preFilter) {
        super();
        this.factors = factors;
        this.serials = serials;
        this.preFilter = preFilter;
        for (let [k, v] of row) {
            this.set(k, v);
        }
        this.length = utils_1.len(factors);
        this.isArray = factors instanceof Array;
    }
    filled() {
        return this.size === this.length;
    }
    New(row) {
        return new Row(row || [], this.factors, this.serials, this.preFilter);
    }
    storable(candidate) {
        for (let [key, el] of candidate) {
            let existing = this.get(key);
            if (!(existing === undefined || existing === el)) {
                return false;
            }
        }
        if (!this.preFilter) {
            return true;
        }
        const nxt = this.New([...this.entries()].concat(candidate));
        return this.preFilter(nxt.toObject());
    }
    toObject() {
        const obj = {};
        for (let [key, value] of this.restore().entries()) {
            obj[key] = value;
        }
        return obj;
    }
    complement() {
        utils_1.getItems(this.serials).map(([k, vs]) => {
            for (let v of vs) {
                if (this.storable([[k, v]])) {
                    this.set(k, v);
                    break;
                }
            }
        });
        if (!this.filled()) {
            throw new exceptions.InvalidCondition();
        }
        return this;
    }
    restore() {
        const result = new Map();
        for (let [key, index] of this.entries()) {
            result.set(key, this.factors[key][index - this.serials[key][0]]);
        }
        return result;
    }
}
const make = (factors, options = {}) => {
    let { length, sorter } = options;
    if (!length) {
        length = 2;
    }
    if (!sorter) {
        sorter = sorters.sequential;
    }
    const { sortArgs, preFilter, postFilter } = options;
    const [indexes, parents] = convertFactorsToSerials(factors);
    const incompleted = makeIncompleted(indexes, length);
    const getCandidate = (pair) => {
        const keys = pair.map(p => parents.get(p) || 0);
        return utils_1.zip(keys, pair);
    };
    const rows = [];
    let row = new Row([], factors, indexes, preFilter);
    for (let [pairStr, pair] of incompleted.entries()) {
        if (!row.storable(getCandidate(pair))) {
            incompleted.delete(pairStr);
        }
    }
    while (incompleted.size) {
        if (row.filled()) {
            rows.push(row);
            for (let vs of utils_1.combinations([...row.values()], length)) {
                incompleted.delete(vs.sort(ascOrder).toString());
            }
            row = row.New([]);
        }
        let finished = true;
        for (let pair of sorter(incompleted, Object.assign(Object.assign({}, sortArgs), { row, parents, length }))) {
            if (row.filled()) {
                finished = false;
                break;
            }
            const candidate = getCandidate(pair);
            if (!row.storable(candidate)) {
                continue;
            }
            for (let [key, value] of candidate) {
                row.set(key, value);
            }
            incompleted.delete(pair.toString());
        }
        if (finished) {
            row.complement();
        }
    }
    if (row.size) {
        rows.push(row.complement());
    }
    const result = [];
    for (let row of rows) {
        const restored = row.restore();
        const restoredObject = row.toObject();
        if (postFilter && !postFilter(restoredObject)) {
            continue;
        }
        if (row.isArray) {
            result.push(utils_1.getItems(restored).sort().map(([_, v]) => v));
        }
        else {
            result.push(restoredObject);
        }
    }
    return result;
};
exports.default = make;
//# sourceMappingURL=index.js.map