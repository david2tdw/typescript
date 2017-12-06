var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(35),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard };
        };
    }
};
var pickedCard = deck.createCardPicker();
var cardPicked = pickedCard();
console.log('card: ' + cardPicked.card + ' of ' + cardPicked.suit);
