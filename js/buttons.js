// BUTTONS --------------------------------------------------------------------------

function newgame() {
  window.location.reload();
}

function hit() {
  $("#split").prop("disabled", true);
  $("#surrender").prop("disabled", true);
  $("#double").prop("disabled", true);
  var verte = 0;
  var kortos_verte = 0;
  ranka = ranka.concat(takeCard());
  console.log(ranka);
  imageShow(ranka[ranka.length - 1], "playercards", "playerI");
  verte = kortuverte(ranka);
  console.log(verte);
  $("div.ranka").text(
    "Player hand: " + ranka + " [Value of hand: " + verte + "]"
  );
  $("div.state").text("Status: Took one card!");

  if (checkforOver() == 1) {
    isSplitstand++;
    bust = 1;
    enableButtons(false);
    isDealerWins = true;
    dealerLogic();
    console.log(isSplitstand + " checked!");

    if (isSplit && isSplitstand == 2) {
      dealershowsHand();
    } else if (!isSplit) {
      dealershowsHand();
    }
  }
}

function stand() {
  isSplitstand += 1;
  enableButtons(false);
  $("#split").prop("disabled", true);

  if (isSplitstand == 2) {
    dealerLogic();
  } else if (!isSplit) {
    dealerLogic();
  }
}

function split() {
  isSplit = true;
  rankasplit = rankasplit.concat(ranka.pop());
  var image_x = document.getElementById("playercards");
  image_x.parentNode.removeChild(image_x);
  var pk = document.createElement("div");
  pk.id = "playercards";
  var id = "playerI";
  document.getElementById(id).appendChild(pk);
  displayHand(ranka, "playercards", "playerI");
  hit();
  rankasplit = rankasplit.concat(takeCard());
  verte = kortuverte(rankasplit);
  coins -= currentBet;
  currentBetsplit = currentBet;
  $("#coinsBet").text("Current bet: " + currentBet);
  $("#coinsBetsplit").text("Current bet: " + currentBetsplit);
  $("div.state").text("Status: Choose your play!");
  $("#statesplit").text("Split status: Choose your play!");
  console.log(rankasplit);
  $("div.rankasplit").text(
    "Player split hand: " + rankasplit + " [Value of hand: " + verte + "]"
  );
  $("#splitfield").fadeIn(400);

  displayHand(rankasplit, "splitcards", "splitcards");
}

function double() {
  currentBet = currentBet * 2;
  coins = coins - currentBet;
  $("#coinsBet").text("Current bet: " + currentBet);
  $("#coinsHave").text("Coins left: " + coins);
  hit();
  stand();
  enableButtons(false);
}

function surrender() {
  surrenderV = true;
  isSplitstand += 1;
  enableButtons(false);
  endgame();
  $("div.state").text("Status: You have surrendered!");
}

function bet() {
  currentBet = parseInt($("input:text").val());
  coins = coins - currentBet;
  enableButtons(true);
  $("#coinsBet").text("Current bet: " + currentBet);
  $("#coinsHave").text("Coins left: " + coins);
  $("#bet").prop("disabled", true);

  if (currentBet * 2 > coins) {
    $("#double").prop("disabled", true);
  }

  $("div.state").text("Status: Choose your play!");

  dealerInit();
  playerInit();
  splitcheck();
  blackjackcheck();
  console.log(batas);
}

function enableButtons(onoff) {
  if (onoff == true) {
    $("#hit").prop("disabled", false);
    $("#stand").prop("disabled", false);
    $("#double").prop("disabled", false);
    $("#surrender").prop("disabled", false);
  }

  if (onoff == false) {
    $("#hit").prop("disabled", true);
    $("#stand").prop("disabled", true);
    $("#double").prop("disabled", true);
    $("#surrender").prop("disabled", true);
  }
}

// SPLIT BUTTONS -----------------------------------------------------------------------------

function doublesplit() {
  currentBetsplit *= 2;
  coins = coins - currentBetsplit;
  $("#coinsBet").text("Current bet: " + currentBetsplit);
  $("#coinsHave").text("Coins left: " + coins);
  isSplitstand--;
  hitsplit();
  standsplit();
  console.log(isSplitstand);
}

function surrendersplit() {
  isSplitstand += 1;
  surrendersplitV = true;
  endgamesplit();
  enableButtonssplit(false);
  $("div.statesplit").text("Status: You have surrendered!");
}

function standsplit() {
  enableButtonssplit(false);
  isSplitstand += 1;
  if (isSplitstand == 2) {
    dealerLogic();
  }
}

function hitsplit() {
  $("#surrendersplit").prop("disabled", true);
  $("#doublesplit").prop("disabled", true);
  var verte = 0;
  var kortos_verte = 0;
  rankasplit = rankasplit.concat(takeCard());
  console.log(rankasplit);
  imageShow(rankasplit[rankasplit.length - 1], "splitcards", "splitcards");
  verte = kortuverte(rankasplit);
  console.log(verte);
  $("div.rankasplit").text(
    "Player split hand: " + rankasplit + " [Value of hand: " + verte + "]"
  );
  $("div.statesplit").text("Status: Took one card!");

  if (checkforOversplit() == 1) {
    isSplitstand++;
    enableButtonssplit(false);
    endgamestatesplit = 1;
    endgamesplit();
    console.log(isSplitstand + " checkedsplit!");

    if (isSplit && isSplitstand == 2) {
      dealershowsHand();
    }
  }
}
