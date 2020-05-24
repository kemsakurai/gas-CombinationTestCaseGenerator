"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function* default_1(incompleted, sortArgs) {
    for (let pair of incompleted.values()) {
        yield pair;
    }
}
exports.default = default_1;
//# sourceMappingURL=sequential.js.map