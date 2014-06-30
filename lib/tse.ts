///<reference path="./tslib/node.d.ts" />


import path = require('path');
import os = require('os');

var program = require('commander');
var pkg = require('./package.json');
var copy = require('./copyDir');

var version = pkg.version;

program
    .version(version)
    .option('-u,--useLocal', "use local modules")
    .parse(process.argv);

var projectPath = program.args.shift() || '.';

function createProject() {
    copy.copyDir('./app', path.resolve(projectPath));
    if (!program.useLocal) {
        copy.copyDir('./node_modules', path.join(projectPath, 'node_modules'));
    }
}

createProject();

process.on('exit', function () {
    console.log();
    console.log('   install dependencies:');
    if (program.noNodeModules) {
        console.log('     $ cd %s && npm install', projectPath);
    } else {
        console.log('     $ cd %s', projectPath);
    }
    console.log();
    console.log('   run the app:');
    console.log('     $ node app');
    console.log('     open http://127.0.0.1:3000/example');
    console.log();
});