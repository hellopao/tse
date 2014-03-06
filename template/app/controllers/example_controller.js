///<reference path='../../lib/tslib/node.d.ts' />
///<reference path='../../lib/tslib/express.d.ts' />
var Example = (function () {
    function Example(req, res) {
        this.req = req;
        this.res = res;
    }
    Example.prototype.index = function () {
        this.res.render('example.html', {});
    };
    return Example;
})();
exports.Example = Example;

function index(req, res) {
    return new Example(req, res).index();
}
exports.index = index;
