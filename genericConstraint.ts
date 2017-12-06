interface Lengthwise  {
  length: number
}



function loggingIdentity<T extends Lengthwise> (arg: T): T {
  console.log(arg.length)
  return arg
}


loggingIdentity({length: 4, value: 3})