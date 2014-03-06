
///<reference path='../../lib/tslib/node.d.ts' />
///<reference path='../../lib/tslib/express.d.ts' />


export class Example {

    constructor(public req: ExpressServerRequest, public res: ExpressServerResponse) {
    }

    index() {
        this.res.render('example.html', {});
    }


}


export function index(req:ExpressServerRequest,res:ExpressServerResponse) {
    return new Example(req,res).index();
}
