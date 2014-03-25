///<reference path='../../lib/tslib/node.d.ts' />
///<reference path='../../lib/tslib/express.d.ts' />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var App = require('./app_controller');

var ExampleController = (function (_super) {
    __extends(ExampleController, _super);
    function ExampleController(req, res) {
        _super.call(this, req, res);
        this.req = req;
        this.res = res;
    }
    ExampleController.prototype.index = function () {
        this.res.render('example.html', {});
    };
    return ExampleController;
})(App.AppController);
exports.ExampleController = ExampleController;

function index(req, res) {
    return new ExampleController(req, res).index();
}
exports.index = index;
