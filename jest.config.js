const {defaults} = require('jest-config');
module.exports = {
    verbose: true,
    transform: {
    '.*\\.(ts)$' : '<rootDir>/node_modules/ts-jest'
    },
    moduleFileExtensions: [...defaults.moduleFileExtensions,'ts']
};
