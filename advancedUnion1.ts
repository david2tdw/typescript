interface Bird {
  fly()
  layEgg()
}

interface Fish {
  swim()
  layEgg()
}

function getSmallPet (): Fish | Bird {
  //return new Fish()
}

let pet  = getSmallPet()
pet.fly()
pet.layEgg()