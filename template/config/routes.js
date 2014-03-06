///<reference path='../lib/tslib/node.d.ts' />
///<reference path='../lib/tslib/express.d.ts' />
var Example = require('../app/controllers/example_controller');

function init(app) {
    app.get('/example', Example.index);
}
exports.init = init;
