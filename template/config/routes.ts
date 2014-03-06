
///<reference path='../lib/tslib/node.d.ts' />
///<reference path='../lib/tslib/express.d.ts' />

import Example = require('../app/controllers/example_controller');


export function init(app: Express) {

    app.get('/example', Example.index);

}