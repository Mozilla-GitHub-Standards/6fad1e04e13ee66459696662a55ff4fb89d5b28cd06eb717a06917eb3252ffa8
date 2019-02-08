'use strict';

const assert = require('assert');
const eslint = require('eslint');

const input = [
    'index.js',
    'tests/test.js',
];

const output = new eslint.CLIEngine({
    envs: ['es6', 'node'],
    configFile: 'index.js',
    useEslintrc: false,
}).executeOnFiles(input);


input.forEach((file, index) => {
    if (output.results[index].messages.length) {
        // eslint-disable-next-line no-console
        console.log(output.results[index].messages);
    }
    assert(output.results[index].filePath.endsWith(file));
});

assert.equal(
    output.errorCount, 0,
    `Should be 0 errors but there were ${output.errorCount}`
);

assert.equal(
    output.warningCount, 0,
    `Should be 0 warnings but there were ${output.warningCount}`
);