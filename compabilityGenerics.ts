interface Empty <T> {

}

let x: Empty<number>
let y: Empty<string>


x = y
//y =x


interface NotEmpty <T> {
  data: T
}


let k: NotEmpty<number>

let j: NotEmpty<string>

//k = j