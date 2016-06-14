//create some variables to store player 1 and 2 scores.
//create a variable to store answers
//create arrays to store questions
var player1Score=0;
var player2Score=0;
var ans;

var qn1= ["Player 1: Sky Colour?", "1) Red", "2) Blue", "3) Yellow", "4) Green", 2];
var qn2= ["Player 2: Apple Colour?", "1) Red", "2) Blue", "3) Yellow", "4) Green", 1];
var qn3= ["Player 1: Banana Colour?", "1) Red", "2) Blue", "3) Yellow", "4) Green", 3];
var qn4= ["Player 2: Grass Colour?", "1) Red", "2) Blue", "3) Yellow", "4) Green", 4];

var qnSet=[qn1, qn2, qn3, qn4];

var currentQn=0;
var currentPlayer=1;

//functions
//decideWhoWins determines and prints the winner or draw
function decideWhoWins() {
    if(player1Score === player2Score) {
        console.log("DRAW");
    } else if (player1Score>player2Score) {
     console.log("Player 1 wins.");
    } else {
     console.log("Player 2 wins.");
    }
}

//printQn outputs the question and options
//it accepts an array where the first element is the question.
//the remaining 4 elements are the options.
function printQn(qn) {
    console.log(qn[0]);
    console.log(qn[1]);
    console.log(qn[2]);
    console.log(qn[3]);
    console.log(qn[4]);
}

//add one to player scores
//input provides the current player
function addPlayerScore(player) {
    if(player === 1) {
         player1Score = player1Score + 1;
     } else {
         player2Score = player2Score + 1;
    }
}

//switch between the two players
function swopPlayer() {
      if(currentPlayer===1) {
         currentPlayer=2;
      } else {
         currentPlayer=2;
      }
}

//start the quiz here
while(currentQn!==qnSet.length) {
    printQn(qnSet[currentQn]);

    //get answer
    ans = prompt("Your answer");
    console.log("Player " + currentPlayer + " selected: " + ans);
    if(parseInt(ans)===qnSet[currentQn][1]) {
        addPlayerScore(player);
    }

    //swop player
    swopPlayer();

    //change to next question
    currentQn++;
}

//determine who wins
decideWhoWins();
//end of quiz
