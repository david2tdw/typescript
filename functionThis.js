var deck = {
    suite: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuite = Math.floor(pickedCard / 13);
            return { suit: this.suite[pickedSuite], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker().call(deck);
console.log(cardPicker);
console.log('card: ' + cardPicker.card + ' of ' + cardPicker.suit);
//let pickedCard = cardPicker()
//console.log('card: ' + pickedCard.card +' of ' + pickedCard.suit) 
