interface Square {
  kind: 'square';
  size: number;
}


interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

interface Circle {
  kind: 'circle';
  radius: number
}

type Shape = Square | Rectangle | Circle


function area(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size;
    case 'rectangle':
      return s.width * s.height
    case 'circle':
      return Math.PI * s.radius ** 2 
  }
}


let a: number = 1
let b: number  = 2
function foo(x: number) {
    if (x !== a || x !== b) {
        //         ~~~~~~~
        // Operator '!==' cannot be applied to types '1' and '2'.
    }
}


function foo1(x: number) {
    if (x !== <number>1 || x !== <number>2) {
        //         ~~~~~~~
        // Operator '!==' cannot be applied to types '1' and '2'.
    }
}