

// CHECKS --------------------------------------------------------------------


function splitcheck(){
kortaA = checkSplit(ranka[0]);
kortaB = checkSplit(ranka[1]);
if(kortaA == kortaB){
    $('#split').prop('disabled', false);
    return true;
} else
    return false;
}


function blackjackcheck() {
    if (kortuverte(ranka) == 21) {
    stand();
    }
}


function kortuverte(ranka){

var verte = 0;
for (var i = 0; i < ranka.length ; i++)
  	{
kortos_verte = checkValue(ranka[i]) ;

		if (kortos_verte == 11 && verte > 10) 
		{
 			kortos_verte = 1;
		}

		verte += kortos_verte ;
	}
return verte ;
}



// 1 dealer wins 0 player wins 2 tie
function checkForWinner(rank){
	var dealerValue = kortuverte(rankadealer);
	var playerValue = kortuverte(rank);
	var diffPlayer = Math.sqrt(Math.pow((21 - playerValue) , 2));
	var diffDealer = Math.sqrt(Math.pow((21 - dealerValue) , 2));
	       if (playerValue > 21 ) {
		return 1 ;
	} else if (dealerValue > 21) {
		return 0 ;
	} else if (diffPlayer > diffDealer) {
		return 1 ;
	} else if (diffPlayer < diffDealer) {
	    return 0 ;
    } else 
        return 2 ;

}

function checkforOver(){
    var playerValue = kortuverte(ranka);
    if (playerValue > 21 ) {
        return 1
    } else
        return 0
}


function dealershowsHand() {

  verte = kortuverte(rankadealer);
  $("div.dealer").text("Dealer hand: " + rankadealer + " [Value of hand: " + verte + "]");
  var image_x = document.getElementById('dealercards');
  image_x.parentNode.removeChild(image_x);
  var pk = document.createElement("div");
  pk.id = "dealercards";
  var id = "dealerI" ;
  document.getElementById(id).appendChild(pk);
  displayHand(rankadealer , "dealercards" , "dealerI");

}

function showModal(state) {

   switch(state) {
    case "surr":
    $(".modal-title").text("What a wuss!");
    $(".modal-body").text("You have surrendered and got " + currentBet / 2 + " coins back.");
    $("#myModal").modal();
    break;
    case 1:
    $(".modal-title").text("Defeat!");
    $(".modal-body").text("You have lost " + currentBet + " coins.");
    $("#myModal").modal();
    break;
    case 2:
    $(".modal-title").text("Victory!");
    $(".modal-body").text("You have won " + currentBet + " coins.");
    $("#myModal").modal();
    break;
    case 3:
    $(".modal-title").text("Tie!");
    $(".modal-body").text("Its a tie , you got back " + currentBet + " coins.");
    $("#myModal").modal();
    break;
   }    
}

function dealerLogic() {
    
    if(bust != 1) {
      while(kortuverte(rankadealer) < 17) {
         dealerHit();
     }  
   }

   if(isSplitstand == 2 || !isSplit) {
    dealershowsHand(); 
   }

   
   console.log(checkForWinner(ranka));
   if(checkForWinner(ranka) == 1) {
   endgamestate = 1 ; // Dealer wins
   endgame();
   } else if (checkForWinner(ranka) == 0) {
   endgamestate = 2 ; // Player wins
   endgame();
   }  else if (checkForWinner(ranka) == 2) {
   endgamestate = 3 ; // Tie
   endgame();
   }

   console.log(checkForWinner(rankasplit));
   if(isSplit) {
   console.log(isSplit + " " + checkForWinner(rankasplit));

   if(checkForWinner(rankasplit) == 1) {
   endgamestatesplit = 1 ; // Dealer wins
   endgamesplit();
   } else if (checkForWinner(rankasplit) == 0) {
   endgamestatesplit = 2 ; // Player wins
   endgamesplit();
   } else if (checkForWinner(rankasplit) == 2) {
   endgamestatesplit = 3 ; // Tie
   endgamesplit();
   }
 

              }
                      
}


function endgame() {
    

    if(surrenderV == false) {

    if(endgamestate == 1) {
    coins = coins - currentBet ;
    $("div.state").text("Status: Dealer wins !");
    showModal(endgamestate);
    } else if (endgamestate == 2) {
    coins = coins + (currentBet * 1.5) ;
    $("div.state").text("Status: Player wins !");
    showModal(endgamestate);
    } else if (endgamestate == 3) {
    coins = coins + currentBet ;
    $("div.state").text("Status: Player ties !");
    showModal(endgamestate);   
    }

    } else {
    coins = coins + (currentBet / 2) ;
    $("div.state").text("Status: You have surrendered !");
    showModal("surr");
    }

    currentBet = 0 ;
    $('#bet').prop('disabled', true);
    $('#coinsBet').text("Current bet: ");
    $('#coinsHave').text("Coins left: " + coins);
}


function checkSplit(card){
 
var value = 0 ; 
switch (card.charAt(0)){

case "K":
        value = 13;
        break;
case "Q":
        value = 12;
        break;
case "J":
        value = 11;
        break;
case "0":
        value = 10;
        break;
case "1":
        value = 14;
        break;
case "2":
        value = 2;
        break;
case "3":
        value = 3;
        break;
case "4":
        value = 4;
        break;
case "5":
        value = 5;
        break;
case "6":
        value = 6;
        break;
case "7":
        value = 7;
        break;
case "8":
        value = 8;
        break;
case "9":
        value = 9;
        break;


}

return value;

}

function checkValue(card){
 
var value = 0 ; 
switch (card.charAt(0)){

case "K":
        value = 10;
        break;
case "Q":
        value = 10;
        break;
case "J":
        value = 10;
        break;
case "0":
        value = 10;
        break;
case "1":
        value = 11;
        break;
case "2":
        value = 2;
        break;
case "3":
        value = 3;
        break;
case "4":
        value = 4;
        break;
case "5":
        value = 5;
        break;
case "6":
        value = 6;
        break;
case "7":
        value = 7;
        break;
case "8":
        value = 8;
        break;
case "9":
        value = 9;
        break;


}

return value;

}


// SPLIT CHECKS --------------------------------------------------------------


function endgamesplit() {

    if(surrendersplitV == false) {
        
    if(endgamestatesplit == 1) {
    coins = coins - currentBetsplit ;
    $("div.statesplit").text("Status: Dealer wins !");
    } else if (endgamestatesplit == 2) {
    coins = coins + (currentBetsplit * 1.5) ;
    $("div.statesplit").text("Status: Player wins !");
    } else if (endgamestatesplit == 3) {
    coins = coins + currentBetsplit ;
    $("div.statesplit").text("Status: Tie !");   
    }

    } else {
    coins = coins + (currentBetsplit / 2) ;
    $("div.statesplit").text("Status: You have surrendered !");
    }

    currentBetsplit = 0 ;
    $('#bet').prop('disabled', true);
    $('#coinsBetsplit').text("Current bet: ");
    $('#coinsHave').text("Coins left: " + coins);
}

function checkforOversplit(){
    var playerValue = kortuverte(rankasplit);
    if (playerValue > 21 ) {
        return 1
    } else
        return 0
}

function enableButtonssplit(onoff){
   if(onoff == true){
    $('#hitsplit').prop('disabled', false);
    $('#standsplit').prop('disabled', false);
    $('#doublesplit').prop('disabled', false);
    $('#surrendersplit').prop('disabled', false);

   }

   if(onoff == false){
    $('#hitsplit').prop('disabled', true);
    $('#standsplit').prop('disabled', true);
    $('#doublesplit').prop('disabled', true);
    $('#surrendersplit').prop('disabled', true);
   }


}