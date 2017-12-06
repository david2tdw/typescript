function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log('tick method');
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(hour, minute) {
    }
    AnalogClock.prototype.tick = function () {
        console.log('analogclock method');
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 198);
var angolog = createClock(AnalogClock, 7, 31);
