var Fish1 = /** @class */ (function () {
    function Fish1() {
    }
    Fish1.prototype.swim = function () {
    };
    Fish1.prototype.layEgg = function () {
    };
    return Fish1;
}());
function getSmallPet() {
    return new Fish1();
}
function isFish(pet) {
    return pet.swim !== undefined;
}
var pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
