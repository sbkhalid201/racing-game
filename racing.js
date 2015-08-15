var player1, player2, counter, table1, table2
//set an initial state at beginning
//and with each reset

player1 = 0
player2 = 0

table1 = 8
table2 = 8

$player1_initial_state = $("table tr td").eq(0)
$player2_initial_state = $("table tr td").eq(9)

if (player1 < table1.length || player2 < table1.length){
  if ($(on("key press")) === a){
    player1++
  } else if ($(on("key press")) === l){
    player2++
  } else {
  	return "'Tis nothing but a tie"
  }
}

if (player1 === ){
  alert("Player One Wins!")
} else if (player2 reaches initial_state.length){
  alert("Player Two Wins!")
} else {
  alert("You guys are both awesome! Tie :)")
}

for (var i = 0; i < 9)
$(document).ready(function() {
  $("").on("")