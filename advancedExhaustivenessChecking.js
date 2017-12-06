/*
function area (n: Shape):number {
  switch (n.kind) {
    case 'square' : return n.size * n.size
    case 'rectange': return n.width * n.height
    case 'circle': return Math.PI * n.radius **2
  }
}

*/
/*
function assertNever (x: never): never {
  throw new Error ('unecpected error:' + x)
}

function area (n: Shape):number {
  switch (n.kind) {
    case 'square' : return n.size * n.size
    case 'rectange': return n.width * n.height
    case 'circle': return Math.PI * n.radius **2
    default : return assertNever(n)
  }
}
*/
function assertNever(x) {
    throw new Error("Unexpected object: " + x);
}
function area(s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectange": return s.height * s.width;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
        default: return assertNever(s); // error here if there are missing cases
    }
}
