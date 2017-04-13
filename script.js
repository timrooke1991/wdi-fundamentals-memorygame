var cards = [
   {
       rank: 'queen',
       suit: 'hearts',
       cardImage: "images/queen-of-hearts.png"
   },
   {
       rank: 'queen',
       suit: 'diamonds',
       cardImage: "images/queen-of-diamonds.png"
   }, 
   {
       rank: 'king',
       suit: 'hearts',
       cardImage: "images/king-of-hearts.png"
   },
   {
       rank: 'king',
       suit: 'diamonds',
       cardImage: "images/king-of-diamonds.png"
   }
];

var cardsInPlay = [];

// FUNCTION => Alert success/failure message
var checkForMatch = function () {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again!");
		}
}

// FUNCTION => Reveal card clicked, check for match on second click
var flipCard = function () {
	var cardId = this.getAttribute('data-id');

	// console.log("User flipped " + cards[cardId].rank);
	// console.log("Suit: " + cards[cardId].suit);
	// console.log("Image: " + cards[cardId].cardImage);

	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute("src", cards[cardId].cardImage)
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

// FUNCTION => Build board within #game-board
var createBoard = function() {
	 for (var i = 0; i < cards.length; i++) {
	 	var cardElement = document.createElement('img');
	 	cardElement.setAttribute("src", "images/back.png");
	 	cardElement.setAttribute("data-id", i);
	 	cardElement.addEventListener("click", flipCard);
	 	document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();
