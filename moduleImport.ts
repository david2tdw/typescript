import {ZipCodeValidator} from './moduleExportDeclaration'
import {ZipCodeValidator as ZCV} from './moduleExportDeclaration'
import * as validator from './moduleExportDeclaration'

let myValidator  = new ZipCodeValidator()

let myValidator1 = new ZCV()

let myValidator2 = new validator.ZipCodeValidator()