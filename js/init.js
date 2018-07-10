// INIT --------------------------------------------------------------------------

function init() {
  generate();
  $("#coinsHave").text("Coins left: " + coins);
  $("div.state").text("Status: Place your bet!");
}

function dealerInit() {
  rankadealer = rankadealer.concat(takeCard()).concat(takeCard());
  console.log(rankadealer);
  verte = checkValue(rankadealer[1]);
  $("div.dealer").text(
    "Dealer hand: X," + rankadealer[1] + " [Value of hand: " + verte + " + X ]"
  );
  var img = document.createElement("img");
  img.src = facedDown;
  img.width = 110;
  img.height = 160;
  img.id = "dealerI";
  var id = "dealercards";
  document.getElementById(id).appendChild(img);
  $(img)
    .hide()
    .fadeIn(400);
  imageShow(rankadealer[1], "dealercards", "dealerI");
}

function playerInit() {
  ranka = ranka.concat(takeCard()).concat(takeCard());
  verte = kortuverte(ranka);
  console.log(verte);
  $("div.ranka").text(
    "Player hand: " + ranka + " [Value of hand: " + verte + "]"
  );
  displayHand(ranka, "playercards", "playerI");
}

function dealerHit() {
  rankadealer = rankadealer.concat(takeCard());
  verte = kortuverte(rankadealer);
  $("div.dealer").text(
    "Dealer hand: " + rankadealer + " [Value of hand: " + verte + "]"
  );
  imageShow(rankadealer[rankadealer.length - 1], "dealercards", "dealerI");
}
