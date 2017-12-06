class Animal {
  name: string
  constructor (theName: string) {
    this.name = theName
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} move ${distanceInMeters} m.`)
  }
}


class Snake extends Animal {
  constructor (name : string) {
    super(name)
  }
  move(distanceInMeters: number = 10) {
    console.log('slighting....')
    super.move(distanceInMeters)
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name)
  }

  move(distanceInMeters: number = 45) {
    console.log('Gallaping...')
    super.move(distanceInMeters)
  }
}

let sam  = new Snake('sammy the python')
let tom: Animal = new Horse('Tommy the Palomino')

sam.move()
tom.move(14)