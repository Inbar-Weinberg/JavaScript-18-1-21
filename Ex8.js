"use strict";
alert("Question 8")
let msg = "The first five happy numbers are: 1, ";
let count = 1;
let digSum;
let temp;
let singles;
let checked;

for (let num = 2; count < 5; num++) {
    digSum = 0;
    checked = [];
    checked[num] = true;
    while (digSum !== 1 && checked[digSum] !== true) {
        if (digSum !== 0)
            temp = digSum;
        else
            temp = num;

        checked[digSum] = true;
        digSum = 0;

        while (temp !== 0) {
            singles = temp % 10;
            digSum += (singles * singles);
            temp -= singles;
            temp /= 10;
        }
    }
    if (digSum === 1) {
        count++;
        if (count === 5) {
            msg += num;
        } else {
            msg += num + ", ";
        }
    }
}
alert(msg);
