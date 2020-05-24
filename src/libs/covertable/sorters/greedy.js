"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const ascendant = (a, b) => a > b ? 1 : -1;
const getNumRemovablePairs = (indexes, incompletedKeys, length) => {
    let num = 0;
    for (let vs of utils_1.combinations(indexes, length)) {
        const key = vs.sort(ascendant).toString();
        if (incompletedKeys.has(key)) {
            num++;
        }
    }
    return num;
};
function* default_1(incompleted, sortArgs) {
    const { row, parents, length } = sortArgs;
    const seed = sortArgs.seed || '';
    const comparer = (a, b) => {
        return utils_1.md5(`${a[0]} ${seed}`) > utils_1.md5(`${b[0]} ${seed}`) ? 1 : -1;
    };
    while (true) {
        let maxNumPairs = null;
        let efficientPair = null;
        for (let [_, pair] of [...incompleted].sort(comparer)) {
            const keys = pair.map(p => parents.get(p) || 0);
            const candidate = utils_1.zip(keys, pair);
            if (!row.storable(candidate)) {
                continue;
            }
            const incompletedKeys = new Set(incompleted.keys());
            const numPairs = getNumRemovablePairs([...row.values(), ...pair], incompletedKeys, length);
            if (maxNumPairs === null || maxNumPairs < numPairs) {
                maxNumPairs = numPairs;
                efficientPair = pair;
            }
        }
        if (efficientPair === null) {
            break;
        }
        yield efficientPair;
    }
}
exports.default = default_1;
//# sourceMappingURL=greedy.js.map