var SpaceRepeatingPadder = /** @class */ (function () {
    function SpaceRepeatingPadder(numSpace) {
        this.numSpace = numSpace;
    }
    SpaceRepeatingPadder.prototype.getPaddingString = function () {
        return Array(this.numSpace + 1).join(' ');
    };
    return SpaceRepeatingPadder;
}());
var StringPadder = /** @class */ (function () {
    function StringPadder(value) {
        this.value = value;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.value;
    };
    return StringPadder;
}());
function getRandomPadder() {
    return Math.random() < 0.5 ? new SpaceRepeatingPadder(3) : new StringPadder('xxxxx');
}
var padder = getRandomPadder();
if (padder instanceof SpaceRepeatingPadder) {
    padder;
}
if (padder instanceof StringPadder) {
    padder;
}
