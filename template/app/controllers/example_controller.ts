
///<reference path='../../lib/tslib/node.d.ts' />
///<reference path='../../lib/tslib/express.d.ts' />

import App = require('./app_controller');

export class Example extends App.AppController {

    constructor(public req: ExpressServerRequest, public res: ExpressServerResponse) {
        super(req, res);
    }

    index() {
        this.res.render('example.html', {});
    }

}


export function index(req:ExpressServerRequest,res:ExpressServerResponse) {
    return new Example(req,res).index();
}
