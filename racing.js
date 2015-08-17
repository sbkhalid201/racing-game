var counter1 = 0;
var counter2 = 0;

function main(n){
    if (counter1 === 7){
       alert("Player One Wins!")
    } else if (counter2 === 7){
        alert("Player Two Wins!")
    } else {
         alert("You guys are both awesome! Tie :)")
    }
}
$(window).keypress(function(event){

    if ((event.which === 65 || event.keyCode === 65) && counter1 < 8) {
        console.log("hello");
        var $player1 = $("table tr td#player1-start").remove();
        var $nextBlock = $(".block").eq(counter1++);
        $nextBlock.append(player1);
    }
    else if ((event.which == 76 || event.keyCode == 76) && counter2 < 8) {
        console.log("hello");
        var $player2 = $("table tr td#player2-start").remove();
        var $nextBlock = $(".block").eq(counter2++);
        $nextBlock.append(player2);
    }
})
function play(){
    alert("3...2...1...RACE!")
}
function handleClick(event){
    //this function should reset the game
}
$(document).ready(function() {
    var counter = 0;
})