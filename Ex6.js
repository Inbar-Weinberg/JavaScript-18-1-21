"use strict";
alert("Question 6")
let grades = [80, 77, 88, 95, 68];
let sum = 0;
for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
}
let avg = sum / grades.length;
alert("The average grade is: " + avg);
if (avg < 60) {
    alert("The grade is an F");
} else if (avg < 70) {
    alert("The grade is a D");
} else if (avg < 80) {
    alert("The grade is a C");
} else if (avg < 90) {
    alert("The grade is a B");
} else {
    alert("The grade is an A");
}
