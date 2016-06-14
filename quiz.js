$(function () {
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
        $('h4').text("DRAW");
    } else if (player1Score>player2Score) {
     $('h4').text("Player 1 wins.");
    } else {
     $('h4').text("Player 2 wins.");
    }
}

//printQn outputs the question and options
//it accepts an array where the first element is the question.
//the remaining 4 elements are the options.
function printQn(qn) {
    $('h2').text(qn[0]);
    $('#1').text(qn[1]);
    $('#2').text(qn[2]);
    $('#3').text(qn[3]);
    $('#4').text(qn[4]);
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
//print the first question
printQn(qnSet[currentQn]);

//event listener to do something when option is clicked.
$( 'h3' ).click(function() {
        //if it's not the last question, then continue the quiz
        if(currentQn!==qnSet.length) {
            ans=$(this).index()-1;
            $('h4').text("Player " + currentPlayer + " selected: " + ans);
            if(parseInt(ans)===qnSet[currentQn][1]) {
                addPlayerScore(player);
            }

            //swop player
            swopPlayer();

            //change to next question
            currentQn++;

            //print next question, only if it is not the last question
            if(currentQn!==qnSet.length) {
                printQn(qnSet[currentQn]);
            } else {
                //else, it is the last question. Determine who is the winner.
                //
                decideWhoWins();
            }
            //nothing else to do
        }
    });

//quiz ends here

});
