type name = string
type NameResolver = () => string

type NameOrResolver = name | NameResolver


function getName (n: NameOrResolver): string {
  if (typeof n === 'string') {
    return n
  }
  return n()
}






type Container<T> = {value: T} 



type Tree<T> = {
  value: T;
  left: Tree<T>;
  right: Tree<T>;
}



type LinkedList<T> = T & {next: LinkedList<T>}

interface Person {
  name: string
}

var people : LinkedList<Person>
var a = people.name
var a = people.next.name
var a = people.next.next.name
var a = people.next.next.next.name