import Deck from "../deck.js"
let  assert = require('assert');
  describe('shffle cards', function() {
    it('should return random cards when the game starts', function() {
        const deck = new Deck();
        deck.shuffle();
        const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
        playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
        computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
        playerDeck.indexOf(0).should.not.be(computerDeck.indexOf(0));
    });
});