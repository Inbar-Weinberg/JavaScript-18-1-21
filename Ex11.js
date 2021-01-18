"use strict";
alert("Question 11")
let x = Number(prompt("Insert the first number"));
let y = Number(prompt("Insert the second number"));
let big, small;
big = (x > y) ? x : y;
small = (x > y) ? y : x;
let GCD=1;
for (let i = small; i > big / small; i--) {
    if (big % i === 0) {
        if (small % i === 0) {
          GCD=i;
            break;
        }
    }  
}
alert("The GCD is: " + GCD);




