interface ClockInterface {
  tick()
}

interface ClockConstructor {
  new (hour: number, minute: number) : ClockInterface
}

function createClock (ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor( hour, minute)
}

class DigitalClock implements ClockInterface {
  constructor (h: number, m: number) {

  }
  tick () {
    console.log('tick method')
  }
}

class AnalogClock  implements ClockInterface {
  constructor (hour: number, minute: number) {

  }
  tick() {
    console.log('analogclock method')
  }
}

let digital  = createClock(DigitalClock, 12, 198)
let angolog = createClock(AnalogClock, 7,31)