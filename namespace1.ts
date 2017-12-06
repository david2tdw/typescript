namespace Validator{
  export interface StringValidator {
    isAcceptable(s: string): boolean
  }

  let numberRegexp = /^[0-9]+$/

  let letterRegexp = /^[a-zA-Z]+$/


  export class LettersOnlyValidator implements StringValidator {
    isAcceptable (s: string) {
      return letterRegexp.test(s)
    }
  }


  export class ZipCodeValidator  implements StringValidator {
    isAcceptable (s: string) {
      return s.length === 5 && numberRegexp.test(s)
    }
  }
}




let strings = ['abc','324','23452']

let validators: {[s1: string]: Validator.StringValidator} = {}
validators['ZIP code'] = new Validator.ZipCodeValidator()
validators['Letters only'] = new Validator.LettersOnlyValidator()


for (let s of strings) {
  for (let name in validators) {
    let isMatch = validators[name].isAcceptable(s)
    console.log(`'${s}' ${isMatch? 'matched.': 'not matched'} ${name}`)
  }
}


