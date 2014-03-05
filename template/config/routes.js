///<reference path='../lib/tslib/node.d.ts' />
///<reference path='../lib/tslib/express.d.ts' />
function init(app) {
    app.get('/', function (req, res) {
        res.render('index.html', {
            title: "hello world"
        });
    });
}
exports.init = init;
