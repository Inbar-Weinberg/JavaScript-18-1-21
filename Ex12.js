"use strict";
alert("Question 12")
let sum = 0;
for (let i = 3; i < 1000; i += 3) {
    sum += i;
}
for (let i = 5; i < 1000; i += 5) {
    if (i % 3 !== 0)
        sum += i;
}
alert(sum);
