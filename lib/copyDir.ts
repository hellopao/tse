///<reference path="./tslib/node.d.ts" />

import fs = require('fs');
import path_module = require('path');


export function copyDir(src: string, dist: string) {
    exsists(src, dist,copy);
}

function copy(src: string, dist: string) {

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
    })
}

function exsists(_src:string,_dist:string,callback?:(src:string,dist:string)=>void) {
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