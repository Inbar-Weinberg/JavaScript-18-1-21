"use strict";
alert("Question 3")
let x = Number(prompt("Insert the first number"));
let y = Number(prompt("Insert the second number"));
let z = Number(prompt("Insert the third number"));
let temp;
if (z > x){
    temp = x;
    x = z;
    z = temp;
}
if (y > x){
    temp = x;
    x = y;
    y = temp;
}
if (z > y){
    temp = y;
    y = z;
    z = temp;
}
alert(x +", " + y + " ," + z)