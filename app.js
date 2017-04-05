// Multiplication Table

function multiplicationTable() {
    var input = +prompt("Enter a number to print it's Multiplication Table");
    document.write("<h2>Multiplication Table of " + input + ".</h2>")
    for (var number = 1; number <= 10; number++)
        document.write("<p>" + input + " x " + number * 1 + " = " + input * number + "</p>");
        document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

// Right Angle Triangle

function rightAngleTriangle() {
    document.write("<h1>Right Angle Triangle:</h1>");
    var r;
    for (var b = 1; b <= 20; ++b) {
        document.write("<br/>");
        for (var t = 1; t <= b; ++t) {
            document.write("*");
        }
    }
}

// Diamond

function diamond() {
    document.write("<h1>Diamond:</h1>");
    var a = 15;
    for (var k = 1; k <= a; k++) {
        for (var c = k; c < a; c++) {
            document.write("&nbsp&nbsp");
        }
        for (var d = 1; d <= (2 * k - 1); d++) {
            document.write("*");
        }
        document.write("</br>");
    }
    for (k = a; k >= 1; k--) {
        for (c = k; c < a; c++) {
            document.write("&nbsp&nbsp");
        }
        for (d = 1; d <= (2 * k - 1); d++) {
            document.write("*");
        }
        document.write("</br>");
    }
}