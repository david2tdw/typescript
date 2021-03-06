class Disposable {
  isDisposed: boolean;
  dispose () {
    this.isDisposed = true;
  }
}


class Activatable {
  isActive: boolean;
  active () {
    this.isActive = true
  }
  deactive () {
    this.isActive = false
  }
}

class SmartObject implements Disposable, Activatable {
  constructor () {
    setInterval (() => {
      console.log(this.isActive + ':' + this.isDisposed)
    }, 500)
  }
  interact () {
    this.active();
  }
  isDisposed: boolean = false;
  dispose: () => void;
  isActive: boolean = false;
  active: () => void;
  deactive: () => void;
}


applyMixins(SmartObject, [Disposable, Activatable])

let smartObject = new SmartObject()
setTimeout(() => {smartObject.interact()}, 1000)


function applyMixins (derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name]
    })
  })
}




