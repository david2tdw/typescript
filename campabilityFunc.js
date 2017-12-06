var x = function () { return ({ name: 'Alice' }); };
var y = function () { return ({ name: 'MIke', location: 'America' }); };
x = y;
y = x;
