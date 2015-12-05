#!/usr/bin/env node
var argv = require('./cli/cli')(require('yargs'))
    .argv;

console.dir(argv);