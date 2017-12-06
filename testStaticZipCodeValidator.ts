import Validator from './StaticZipCodeValidator'

let strings = ['hello','98052','233']


strings.forEach(s => {
  console.log(`'${s}' ${Validator(s)? ' matched.': ' not matched.'}`)
})