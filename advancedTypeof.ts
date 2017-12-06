function isString (x: any): x is string {
  return typeof x === 'string'
}


function isNumber (x : any): x is number {
  return typeof x  ==='number'

}



function paddingLeft (value: string, padding: string | number) {
  if (isString(padding)) {
    return padding + value
  }
  if (isNumber(padding)) {
    return Array(padding + 1).join(' ') + value
  }

  throw new Error(`expected string or number, but get '${padding}'`)
}