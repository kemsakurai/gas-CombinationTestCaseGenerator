"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comparer = (a, b) => {
    return Math.random() > 0.5 ? 1 : -1;
};
function* default_1(incompleted, sortArgs) {
    for (let [_, pair] of [...incompleted.entries()].sort(comparer)) {
        yield pair;
    }
}
exports.default = default_1;
//# sourceMappingURL=random.js.map