///<reference path='../../lib/tslib/node.d.ts' />
///<reference path='../../lib/tslib/express.d.ts' />
var AppController = (function () {
    function AppController(req, res) {
        this.req = req;
        this.res = res;
    }
    return AppController;
})();
exports.AppController = AppController;
