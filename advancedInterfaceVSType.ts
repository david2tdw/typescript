type Alise = {num: number}

interface Interfaced {
  num: number
}


declare function aliased(arg:Alise): Alise
declare function Interfaced (arg: Interfaced): Interfaced