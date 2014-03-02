///<reference path='../../lib/tslib/node.d.ts' />
///<reference path='../../lib/tslib/express.d.ts' />

import config = require('../../config/config');

export class AppController {

    constructor(public req: ExpressServerRequest, public res: ExpressServerResponse) {

    }

}