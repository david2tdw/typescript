export interface StringValidator {
  isAcceptable(s: string) :boolean
}


export const numberRegexp = /^[0-9]+$/

export class ZipCodeValidator implements StringValidator {
  isAcceptable (s: string):boolean {
    return s.length === 5 && numberRegexp.test(s)
  }
}


class ZipCodeValidator1 implements StringValidator {
  isAcceptable (s: string): boolean {
    return s.length === 5 && numberRegexp.test(s)
  }
}


export {ZipCodeValidator1}

export {ZipCodeValidator1 as mainValidator}