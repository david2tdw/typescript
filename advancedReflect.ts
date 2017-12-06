type Proxy<T> = {
  get() : T;
  set(value: T): void
}


type Proxify<T> = {
  [p in keyof T]: Proxy<T[p]>
}

function proxify<T> (o : T):Proxify<T> {
  let result = {} as Proxify<T>

  return result
}


//let proxyProps = proxify(props)



function unProxify<T> (t: Proxify<T>):T {
  let result  = {} as T
  for (const k in t) {
    result[k] = t[k].get()
  }
  return result

}
