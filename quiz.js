//create some variables to store player 1 and 2 scores.
//create a variable to store answers
var player1Score=0;
var player2Score=0;
var ans;

//start the quiz here
//print first question and 4 options to player 1
console.log("Player 1: Sky Colour?");
console.log("1) Red");
console.log("2) Blue");
console.log("3) Yellow");
console.log("4) Green");

//capture the answer from player 1
ans = prompt("Your answer");
console.log("Player 1 selected: " + ans);

//Update score for player 1 if correct
if(parseInt(ans)===2) {
    player1Score = player1Score + 1;
}

//switch to player 2.
//print second question and 4 options to player 2
console.log("Player 2: Apple Colour?");
console.log("1) Red");
console.log("2) Blue");
console.log("3) Yellow");
console.log("4) Green");

//capture the answer from player 2
ans = prompt("Your answer");
console.log("Player 2 selected: " + ans);

//Update score for player 2 if correct
if(parseInt(ans)===1) {
    player2Score = player2Score + 1;
}

//print third question and 4 options to player 1
console.log("Player 1: Banana Colour?");
console.log("1) Red");
console.log("2) Blue");
console.log("3) Yellow");
console.log("4) Green");

//capture the answer from player 1
ans = prompt("Your answer");
console.log("Player 1 selected: " + ans);

//Update score for player 2 if correct
if(parseInt(ans)===3) {
    player1Score = player1Score + 1;
}
//switch to player 2.

//print fourth question and 4 options to player 2
console.log("Player 2: Grass Colour?");
console.log("1) Red");
console.log("2) Blue");
console.log("3) Yellow");
console.log("4) Green");

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
