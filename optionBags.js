function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black", width: 19 });
var mySquare1 = createSquare({ color: "black" });
//let mySquare2 = createSquare({ colour: "red", width: 100 });
var mySquare3 = createSquare({ colour: "red", width: 100 });
