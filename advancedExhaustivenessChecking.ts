interface Square {
  kind: 'square'
  size: number
}

interface Rectange {
  kind: 'rectange'
  width: number
  height: number
}

interface Circle {
  kind: 'circle'
  radius: number
}

interface Triangle {
  kind: 'triangle'
  width: number
}

type Shape  = Square | Rectange | Circle| Triangle


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
function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectange": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
        default: return assertNever(s); // error here if there are missing cases
    }
}

