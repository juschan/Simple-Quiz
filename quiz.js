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

//start the quiz here
//print first question and 4 options to player 1
console.log(qn1[0]);
console.log(qn1[1]);
console.log(qn1[2]);
console.log(qn1[3]);
console.log(qn1[4]);

//capture the answer from player 1
ans = prompt("Your answer");
console.log("Player 1 selected: " + ans);

//Update score for player 1 if correct
if(parseInt(ans)===2) {
    player1Score = player1Score + 1;
}

//switch to player 2.
//print second question and 4 options to player 2
console.log(qn2[0]);
console.log(qn2[1]);
console.log(qn2[2]);
console.log(qn2[3]);
console.log(qn2[4]);

//capture the answer from player 2
ans = prompt("Your answer");
console.log("Player 2 selected: " + ans);

//Update score for player 2 if correct
if(parseInt(ans)===1) {
    player2Score = player2Score + 1;
}

//print third question and 4 options to player 1
console.log(qn3[0]);
console.log(qn3[1]);
console.log(qn3[2]);
console.log(qn3[3]);
console.log(qn3[4]);

//capture the answer from player 1
ans = prompt("Your answer");
console.log("Player 1 selected: " + ans);

//Update score for player 2 if correct
if(parseInt(ans)===3) {
    player1Score = player1Score + 1;
}
//switch to player 2.

//print fourth question and 4 options to player 2
console.log(qn4[0]);
console.log(qn4[1]);
console.log(qn4[2]);
console.log(qn4[3]);
console.log(qn4[4]);

//capture the answer from player 2
ans = prompt("Your answer");
console.log("Player 2 selected: " + ans);

//Update score for player 2 if correct
if(parseInt(ans)===4) {
    player2Score = player2Score + 1;
}


//Check to see who wins
if(player1Score === player2Score) {
    //if player 1 and 2 scores are the same, it is a draw.
    console.log("DRAW");
} else if (player1Score>player2Score) {
    //if player 1 score is greater than player 2, player 1 wins.
    console.log("Player 1 wins.");

} else {
    //if player 2 score is greater than player 1, player 2 wins.
    console.log("Player 2 wins.");
}

//end of quiz
