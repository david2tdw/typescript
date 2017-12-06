import Zip = require('./ZipCodeValidator1')


let strings = ['12365','sdf','23']
let myValidator = new Zip()


strings.forEach(s => {
  console.log(`'${s}' - ${myValidator.isAcceptable(s)? 'matched.': 'not matched.'}`)
})