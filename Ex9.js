"use strict";
alert("Question 9")
let temp;
let sum = 0;
let singles;
for (let num = 100; num < 1000; num++) {
    temp = num;
    while (temp !== 0) {
        singles = temp % 10;
        sum += (singles * singles * singles);
        temp -= singles;
        temp /= 10;
    }
    if (sum === num){
        console.log(num + " Is an armstrong number.")
    }
    sum = 0;
}