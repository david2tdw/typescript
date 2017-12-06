let deck = {
  suite: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker : function () {
    return function () {
      let pickedCard = Math.floor(Math.random() *52)
      let pickedSuite = Math.floor(pickedCard / 13 )

      return {suit: this.suite[pickedSuite], card: pickedCard % 13}
    }
  }
}

let cardPicker = deck.createCardPicker().call(deck)
console.log(cardPicker)

console.log('card: ' + cardPicker.card +' of ' + cardPicker.suit)
//let pickedCard = cardPicker()

//console.log('card: ' + pickedCard.card +' of ' + pickedCard.suit)