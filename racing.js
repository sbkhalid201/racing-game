player1_initial_state = document.getElementById('player1-start');
player2_initial_state = document.getElementById('player2-start');

function play{
  
}
function moveAForward() {
  player1_initial_state++
}
function moveLForward() {
  player2_initial_state++
}
// if (player1 === ){
//   alert("Player One Wins!")
// } else if (player2 reaches initial_state.length){
//   alert("Player Two Wins!")
// } else {
//   alert("You guys are both awesome! Tie :)")
// }

function handleClick(event){

}
function onA(event) {
    if (event.which == 65 || event.keyCode == 65) {
        return moveAForward();
    }
    return false;
}
function onA(event) {
    if (event.which == 76 || event.keyCode == 76) {
        return moveLForward();
    }
    return false;
}