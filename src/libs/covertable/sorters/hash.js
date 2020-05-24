"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
function* default_1(incompleted, sortArgs) {
    const seed = sortArgs.seed || '';
    const comparer = (a, b) => {
        return utils_1.md5(`${a[0]} ${seed}`) > utils_1.md5(`${b[0]} ${seed}`) ? 1 : -1;
    };
    for (let [_, pair] of [...incompleted.entries()].sort(comparer)) {
        yield pair;
    }
}
exports.default = default_1;
//# sourceMappingURL=hash.js.map