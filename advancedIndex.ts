function pluck<T, K extends keyof T> (o : T, names: K[]): T[K][] {
  return names.map(n => o[n])
}


interface Person {
  name: string;
  age: number
}

let person : Person = {
  name: 'Jade',
  age: 32
}



let strings: string[] = pluck(person,['name'])