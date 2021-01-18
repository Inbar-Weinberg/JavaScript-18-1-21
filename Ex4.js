"use strict";
alert("Question 4")
let arr = [
    Number(prompt("Insert the first number")),
    Number(prompt("Insert the second number")),
    Number(prompt("Insert the third number")),
    Number(prompt("Insert the fourth number")),
    Number(prompt("Insert the fifth number"))
];

let big = arr[0];
for (let i=1 ; i < arr.length ; i++){
    if (arr[i] > big)
    big = arr[i];
}
alert(big + " Is the biggest number");
