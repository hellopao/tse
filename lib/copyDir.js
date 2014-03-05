///<reference path="./tslib/node.d.ts" />
var fs = require('fs');
var path_module = require('path');

function copyDir(src, dist) {
    exsists(src, dist, copy);
}
exports.copyDir = copyDir;

function copy(src, dist) {
    fs.readdir(src, function (err, paths) {
        if (err) {
            throw err;
        }

        paths.forEach(function (path) {
            var _src = path_module.resolve(src, path);
            var _dist = path_module.resolve(dist, path);

            fs.stat(_src, function (err, stats) {
                if (stats.isFile()) {
                    var readStream = fs.createReadStream(_src);
                    var writeStream = fs.createWriteStream(_dist);
                    readStream.pipe(writeStream);

                    writeStream.on('error', function () {
                        throw err;
                        console.log('copy file error!');
                    });
                } else if (stats.isDirectory()) {
                    exsists(_src, _dist, copy);
                }
            });
        });
    });
}

function exsists(_src, _dist, callback) {
    fs.exists(_dist, function (exsist) {
        if (exsist) {
            callback && callback(_src, _dist);
        } else {
            fs.mkdir(_dist, function () {
                callback && callback(_src, _dist);
            });
        }
    });
}
