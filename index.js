#!/usr/bin/env node

var compress = require('compression');
var browserSync = require('browser-sync');
browserSync({
    server: {
        baseDir: './',
        middleware: [compress()]
    }
    ,ghostMode: false
})
