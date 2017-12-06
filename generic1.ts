function loggingIdentity<T> (arg: Array<T>): Array<T>{
  console.log(arg.length)
  return arg
}

//let myIdentity: <T[]>(arg: T[]) => T[] = loggingIdentity


loggingIdentity([])