var coinFlip  = Math.round(Math.random());
var choice = window.prompt("Heads or Tails?");

if (coinFlip) {
    if (choice.toLowerCase() === "heads") {
        window.document.write("The flip was heads and you chose heads...you win!");
    } else {
        window.document.write("The flip was heads and you chose tails...you lose!");
    }
} else {
    if (choice.toLowerCase() === "heads") {
        window.document.write("The flip was tails and you chose heads...you lose!");
    } else {
        window.document.write("The flip was tails and you chose tails...you win!");
    }
}