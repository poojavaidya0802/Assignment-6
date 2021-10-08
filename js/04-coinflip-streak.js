var coinFlip;
var coinFlip;
do {
    coinFlip = Math.round(Math.random());
    if (coinFlip) {
        window.document.write("<br>");
        window.document.write("You got heads");
    } else {
        window.document.write("<br>");
        window.document.write("You got tails, so end of loop");
    }
} while (coinFlip);