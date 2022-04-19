// store wins, ties and losses

var wins = 0;
var ties = 0;
var losses = 0;
var options = ["R", "P", "S"]

function main() {
    // take user input
 const user0ption = window.prompt ("Please pick an option") ?? '';
const capitalizedUser0ption = user0ption.toUpperCase();


// computer pick a choice at random
const random = math.floor(math.random() * options.length);
const computer0ption = options[random];

// compute who has won
if (user0ption === computer0ption) {
    window.alert("It's a tie!");
    ties++;
}


}

// play again option

main();