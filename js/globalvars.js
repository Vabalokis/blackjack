var numberOfDecks    = 1,
    numberOfShuffles = 4,
    coins = 1000,
    currentBet = 0,
    currentBetsplit = 0,
    rankadealer = [],
    ranka = [],
    rankasplit = [],
    shoe = [],
    isbet = false,
    surrenderV = false,
    surrendersplitV = false,
    isSplitstand = 0,
    isSplit = false,
    endgamestate = 0,
    endgamestatesplit = 0,
    bust = 0,
    facedDown = "img/Different-BikeBack.png",

    skaiciai =   ["2D" , "2H" , "2C" , "2S" , 
				  "3D" , "3H" , "3C" , "3S" , 
				  "4D" , "4H" , "4C" , "4S" , 
				  "5D" , "5H" , "5C" , "5S" ,
				  "6D" , "6H" , "6C" , "6S" ,
				  "7D" , "7H" , "7C" , "7S" ,
				  "8D" , "8H" , "8C" , "8S" ,
				  "9D" , "9H" , "9C" , "9S" ],

    galvos   =   ["0D" , "0H" , "0C" , "0S" , 
		          "JD" , "JH" , "JC" , "JS" , 
		          "QD" , "QH" , "QC" , "QS" , 
		          "KD" , "KH" , "KC" , "KS" ],

    tuzai    =   ["1D" , "1H" , "1C" , "1S" ];