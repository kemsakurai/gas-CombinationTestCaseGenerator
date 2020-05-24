"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var js_md5_1 = require("js-md5");
exports.md5 = js_md5_1.hex;
exports.all = (values) => {
    for (let value of values) {
        if (!value) {
            return false;
        }
    }
    return true;
};
exports.zip = (...lists) => {
    const length = lists[0].length;
    return exports.range(0, length).map(i => lists.map(l => l[i]));
};
exports.copy = (obj) => {
    if (Array.isArray(obj)) {
        return [...obj];
    }
    return Object.assign({}, obj);
};
exports.len = (obj) => {
    if (Array.isArray(obj)) {
        return obj.length;
    }
    return Object.keys(obj).length;
};
exports.getItems = (container) => {
    if (Array.isArray(container)) {
        return container.map((v, i) => [i, v]);
    }
    if (container instanceof Map) {
        return [...container.entries()];
    }
    return Object.entries(container);
};
exports.range = (start, stop, step = 1) => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Sequence_generator_(range)
    return Array.from({ length: (stop - start - 1) / step + 1 }, (_, i) => start + (i * step));
};
exports.combinations = (list, length) => {
    const pairs = new Map();
    const set = (remains, pair) => {
        for (let i of remains) {
            if (pair.length < length) {
                set(remains.filter(j => j !== i), pair.concat(i));
            }
            else {
                const key = pair.sort().toString();
                if (!pairs.has(key)) {
                    pairs.set(key, pair);
                }
                return;
            }
        }
    };
    set([...list], []);
    return [...pairs.values()];
};
exports.product = (...list) => {
    const pairs = [];
    const set = (pair, index) => {
        if (pair.length === list.length) {
            pairs.push(pair);
            return;
        }
        for (let i of list[index]) {
            set(pair.concat(i), index + 1);
        }
    };
    set([], 0);
    return pairs;
};
//# sourceMappingURL=utils.js.map