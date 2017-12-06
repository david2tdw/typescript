interface SearchFunc {
  (source : string, substring: string) : boolean
}

let mySearch: SearchFunc
mySearch = function (src: string, sub: string) : boolean {
  let result  = src.search(sub)
  return result > 1
}