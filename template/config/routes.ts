
///<reference path='../lib/tslib/node.d.ts' />
///<reference path='../lib/tslib/express.d.ts' />

export function init(app: Express) {

    app.get('/', function (req: ExpressServerRequest, res: ExpressServerResponse) {
        res.render('index.html', {
            title: "hello world"
        });
    });
}