interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: "black", width:19});
let mySquare1 = createSquare({color: "black"});

//let mySquare2 = createSquare({ colour: "red", width: 100 });


let mySquare3 = createSquare({ colour: "red", width: 100 } as SquareConfig);