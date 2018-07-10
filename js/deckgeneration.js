// DECK GENERATION ------------------------------------------------------------------

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function shuffletimes(arr) {
  for (var i = 0; i < numberOfShuffles; i++) {
    shuffle(arr);
  }
}

function generateDeck() {
  var arr = skaiciai.concat(galvos).concat(tuzai);

  return arr;
}

function generateShoe(numOfDecks) {
  batas = [];

  for (var i = 0; i < numOfDecks; i++) {
    newDeck = generateDeck();
    shuffletimes(newDeck);
    batas = batas.concat(newDeck);
    shuffletimes(batas);
  }

  $("#hit").prop("disaled", true);
  return batas;
}

function clearCards() {
  shoe = [];
}

function generate() {
  clearCards();
  shoe = generateShoe(numberOfDecks);
  console.log(shoe);
}

function takeCard() {
  nextCard = batas.pop();
  return nextCard;
}
