interface Card {
  suit : string,
  card: number
}

interface Deck {
  suits: string [],
  cards: number[],
  createCardPicker(this: Deck): () => Card
}


let deck : Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(35),
  createCardPicker: function (this: Deck) {
    return () => {
      let pickedCard = Math.floor( Math.random() * 52)
      let pickedSuit = Math.floor( pickedCard / 13) 
      return {suit: this.suits[pickedSuit], card: pickedCard}
    }
  }
}


let pickedCard = deck.createCardPicker()
let cardPicked = pickedCard()

console.log('card: ' + cardPicked.card + ' of ' + cardPicked.suit)
