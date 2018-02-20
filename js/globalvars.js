var numberOfDecks    = 1;
var numberOfShuffles = 4;
var coins = 1000 ;
var currentBet = 0 ;
var currentBetsplit = 0 ;
var rankadealer = [];
var ranka = [];
var rankasplit = [];
var shoe = [];
var isbet = false ;
var surrenderV = false;
var surrendersplitV = false;
var isSplitstand = 0 ;
var isSplit = false;
var endgamestate = 0;
var endgamestatesplit = 0;
var bust = 0;
var facedDown = "img/Different-BikeBack.png" ;

var skaiciai =   ["2D" , "2H" , "2C" , "2S" , 
				  "3D" , "3H" , "3C" , "3S" , 
				  "4D" , "4H" , "4C" , "4S" , 
				  "5D" , "5H" , "5C" , "5S" ,
				  "6D" , "6H" , "6C" , "6S" ,
				  "7D" , "7H" , "7C" , "7S" ,
				  "8D" , "8H" , "8C" , "8S" ,
				  "9D" , "9H" , "9C" , "9S" ];

var galvos   =   ["0D" , "0H" , "0C" , "0S" , 
		          "JD" , "JH" , "JC" , "JS" , 
		          "QD" , "QH" , "QC" , "QS" , 
		          "KD" , "KH" , "KC" , "KS" ];

var tuzai    =   ["1D" , "1H" , "1C" , "1S" ];