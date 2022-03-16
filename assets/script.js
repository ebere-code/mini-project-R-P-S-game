var wins =0;
var loses =0;
var ties =0;

var gameOptions= ["R", "P", "S"];

var player = prompt("Choose R, P, S");

var number = Math.floor(Math.random() * gameOptions.length);
var computer = gameOptions[number];

window.alert ("The computer picked " + computer);

If (player === computer) {
    ties++; 
    window.alert ("It's a tie!, try again?");
}
else if (player === "R" && computer=== "S") || (player === "S" && computer === "P")|| (player === "P" && computer === "R")  {
    wins++;
    window.alert ("You won!!, try again?");
}
else if (player === "S" && computer=== "R") || (player === "P" && computer === "P")|| (player === "P" && computer === "R")  {
    wins++;
    window.alert ("You won!!, try again?");
}