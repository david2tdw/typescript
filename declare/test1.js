var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["yello"] = 1] = "yello";
    Color[Color["Red"] = 2] = "Red";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
