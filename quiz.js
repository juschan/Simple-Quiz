//create some variables to store player 1 and 2 scores.
//create a variable to store answers
var player1Score=0;
var player2Score=0;
var ans;

//start the quiz here
//print first question to player 1
console.log("Player 1: Sky Colour?");
//print the 4 options for the question
console.log("1) Red");
console.log("2) Blue");
console.log("3) Yellow");
console.log("4) Green");
//capture the answer from player 1
ans = prompt("Your answer");
console.log("Player 1 selected: " + ans);
//check if the answer from player 1 is correct
//if answer is correct, add one to player 1 score.
//if answer is wrong, do nothing.
if(parseInt(ans)===2) {
    player1Score = player1Score + 1;
}
//switch to player 2.

//print second question to player 1
console.log("Player 2: Apple Colour?");
//print the 4 options for the question
console.log("1) Red");
console.log("2) Blue");
console.log("3) Yellow");
console.log("4) Green");
//capture the answer from player 2
ans = prompt("Your answer");
console.log("Player 2 selected: " + ans);
//check if the answer from player 2 is correct
//if answer is correct, add one to player 2 score.
//if answer is wrong, do nothing.
if(parseInt(ans)===1) {
    player2Score = player2Score + 1;
}

//print third question to player 1
console.log("Player 1: Banana Colour?");
//print the 4 options for the question
console.log("1) Red");
console.log("2) Blue");
console.log("3) Yellow");
console.log("4) Green");
//capture the answer from player 1
ans = prompt("Your answer");
console.log("Player 1 selected: " + ans);
//check if the answer from player 1 is correct
//if answer is correct, add one to player 1 score.
//if answer is wrong, do nothing.
if(parseInt(ans)===3) {
    player1Score = player1Score + 1;
}
//switch to player 2.

//print fourth question to player 1
console.log("Player 2: Grass Colour?");
//print the 4 options for the question
console.log("1) Red");
console.log("2) Blue");
console.log("3) Yellow");
console.log("4) Green");
//capture the answer from player 2
ans = prompt("Your answer");
console.log("Player 2 selected: " + ans);
//check if the answer from player 2 is correct
//if answer is correct, add one to player 2 score.
//if answer is wrong, do nothing.
if(parseInt(ans)===4) {
    player2Score = player2Score + 1;
}

//end of all questions
//check to see who wins
//if player 1 and 2 scores are the same, it is a draw.
if(player1Score === player2Score) {
    console.log("DRAW");
//if player 1 score is greater than player 2, player 1 wins.
} else if (player1Score>player2Score) {
    console.log("Player 1 wins.");
//if player 2 score is greater than player 1, player 2 wins.
} else {
    console.log("Player 2 wins.");
}

//end of quiz
