// VISUAL ----------------------------------------------------

function imageShow(card, idx, pORd) {
  var img = document.createElement("img");
  img.src = checkSrc(card);
  img.width = 110;
  img.height = 160;
  img.id = pORd;

  document.getElementById(idx).appendChild(img);
  $(img)
    .hide()
    .fadeIn(400);
}

function displayHand(hand, idx, pORd) {
  for (var i = 0; i < hand.length; i++) {
    imageShow(hand[i], idx, pORd);
  }
}

// Card image checks ------------------------------------------------------------------------

// 0-D 1-C 2-S 3-H

function checkSrc(card) {
  var value = 0;
  switch (card.charAt(1)) {
    case "D":
      value = checkDiamonds(card);
      break;
    case "C":
      value = checkClubs(card);
      break;
    case "S":
      value = checkSpades(card);
      break;
    case "H":
      value = checkHearts(card);
      break;
  }
  return value;
}

function checkDiamonds(card) {
  var value;
  switch (card.charAt(0)) {
    case "1":
      value = "img/ace_of_diamonds.png";
      break;
    case "2":
      value = "img/2_of_diamonds.png";
      break;
    case "3":
      value = "img/3_of_diamonds.png";
      break;
    case "4":
      value = "img/4_of_diamonds.png";
      break;
    case "5":
      value = "img/5_of_diamonds.png";
      break;
    case "6":
      value = "img/6_of_diamonds.png";
      break;
    case "7":
      value = "img/7_of_diamonds.png";
      break;
    case "8":
      value = "img/8_of_diamonds.png";
      break;
    case "9":
      value = "img/9_of_diamonds.png";
      break;
    case "0":
      value = "img/10_of_diamonds.png";
      break;
    case "J":
      value = "img/jack_of_diamonds.png";
      break;
    case "Q":
      value = "img/queen_of_diamonds.png";
      break;
    case "K":
      value = "img/king_of_diamonds.png";
      break;
  }
  return value;
}

function checkSpades(card) {
  var value;
  switch (card.charAt(0)) {
    case "1":
      value = "img/ace_of_spades.png";
      break;
    case "2":
      value = "img/2_of_spades.png";
      break;
    case "3":
      value = "img/3_of_spades.png";
      break;
    case "4":
      value = "img/4_of_spades.png";
      break;
    case "5":
      value = "img/5_of_spades.png";
      break;
    case "6":
      value = "img/6_of_spades.png";
      break;
    case "7":
      value = "img/7_of_spades.png";
      break;
    case "8":
      value = "img/8_of_spades.png";
      break;
    case "9":
      value = "img/9_of_spades.png";
      break;
    case "0":
      value = "img/10_of_spades.png";
      break;
    case "J":
      value = "img/jack_of_spades.png";
      break;
    case "Q":
      value = "img/queen_of_spades.png";
      break;
    case "K":
      value = "img/king_of_spades.png";
      break;
  }
  return value;
}

function checkClubs(card) {
  var value;
  switch (card.charAt(0)) {
    case "1":
      value = "img/ace_of_clubs.png";
      break;
    case "2":
      value = "img/2_of_clubs.png";
      break;
    case "3":
      value = "img/3_of_clubs.png";
      break;
    case "4":
      value = "img/4_of_clubs.png";
      break;
    case "5":
      value = "img/5_of_clubs.png";
      break;
    case "6":
      value = "img/6_of_clubs.png";
      break;
    case "7":
      value = "img/7_of_clubs.png";
      break;
    case "8":
      value = "img/8_of_clubs.png";
      break;
    case "9":
      value = "img/9_of_clubs.png";
      break;
    case "0":
      value = "img/10_of_clubs.png";
      break;
    case "J":
      value = "img/jack_of_clubs.png";
      break;
    case "Q":
      value = "img/queen_of_clubs.png";
      break;
    case "K":
      value = "img/king_of_clubs.png";
      break;
  }
  return value;
}

function checkHearts(card) {
  var value;
  switch (card.charAt(0)) {
    case "1":
      value = "img/ace_of_hearts.png";
      break;
    case "2":
      value = "img/2_of_hearts.png";
      break;
    case "3":
      value = "img/3_of_hearts.png";
      break;
    case "4":
      value = "img/4_of_hearts.png";
      break;
    case "5":
      value = "img/5_of_hearts.png";
      break;
    case "6":
      value = "img/6_of_hearts.png";
      break;
    case "7":
      value = "img/7_of_hearts.png";
      break;
    case "8":
      value = "img/8_of_hearts.png";
      break;
    case "9":
      value = "img/9_of_hearts.png";
      break;
    case "0":
      value = "img/10_of_hearts.png";
      break;
    case "J":
      value = "img/jack_of_hearts.png";
      break;
    case "Q":
      value = "img/queen_of_hearts.png";
      break;
    case "K":
      value = "img/king_of_hearts.png";
      break;
  }
  return value;
}
