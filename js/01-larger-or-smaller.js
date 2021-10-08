var first = parseInt(window.prompt("Please enter the first number"), 10);
var second = parseInt(window.prompt("Please enter the second number"), 10);
if (first > second) {
    window.document.write("The larger number is " + first);
} else if (second > first) {
    window.document.write("The larger number is " + second);
} else {
    window.document.write("Both numbers are equal.");
}