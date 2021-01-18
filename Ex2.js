
"use strict";
alert("Question 2")
let x = Number(prompt("Insert the first number"));
let y = Number(prompt("Insert the second number"));
let z = Number(prompt("Insert the third number"));
if (x + y + z > 0) {
    alert("The sign is: +");
} 
else if (x + y + z === 0) {
    alert("The sign is: 0");
}
else
    alert("The sign is: -");
