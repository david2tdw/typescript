interface GenericIdentityFn {
  <T>(arg: T): T
}


function identity<T> (arg: T): T {
  return arg
}

let myIdentity : GenericIdentityFn = identity




interface GenericIdentityFn1<T> {
  (arg: T): T
}

function identity1<T> (arg: T): T {
  return arg
}

let myIdentity1: GenericIdentityFn1<number> = identity1