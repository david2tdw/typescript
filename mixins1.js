var Disposable = /** @class */ (function () {
    function Disposable() {
    }
    Disposable.prototype.dispose = function () {
        this.isDisposed = true;
    };
    return Disposable;
}());
var Activatable = /** @class */ (function () {
    function Activatable() {
    }
    Activatable.prototype.active = function () {
        this.isActive = true;
    };
    Activatable.prototype.deactive = function () {
        this.isActive = false;
    };
    return Activatable;
}());
var SmartObject = /** @class */ (function () {
    function SmartObject() {
        var _this = this;
        this.isDisposed = false;
        this.isActive = false;
        setInterval(function () {
            console.log(_this.isActive + ':' + _this.isDisposed);
        }, 500);
    }
    SmartObject.prototype.interact = function () {
        this.active();
    };
    return SmartObject;
}());
applyMixins(SmartObject, [Disposable, Activatable]);
var smartObject = new SmartObject();
setTimeout(function () { smartObject.interact(); }, 1000);
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
