interface Bird {
  fly()
  layEgg()
}

interface Fish {
  swim()
  layEgg()
}

class Fish1 implements Fish {
  swim () {

  }
  layEgg () {

  }
}

function getSmallPet (): Bird|Fish {
  return new Fish1()
}


function isFish(pet : Fish|Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined
}


let pet = getSmallPet()
if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}