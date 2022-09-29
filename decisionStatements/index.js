var num1 = 20;
var num2 = 30;
var grade = 86;
// if else if satements 
if (num1 > num2)
    console.log("number 1 is greater than number 2");
else if (num2 > num1)
    console.log("number 2 is grater than number 1");
else
    console.log("the numbers are equal");
// nested if else statements 
if (grade >= 90 && grade <= 100) {
    console.log("A+");
}
else if (grade >= 80 && grade <= 90) {
    if (grade < 85)
        console.log("A");
    else
        console.log("A-");
}
else if (grade >= 70 && grade <= 80) {
    console.log("B");
}
else if (grade > 60 && grade < 70) {
    console.log("B-");
}
else if (grade > 50 && grade < 60) {
    console.log("C");
}
else {
    console.log("F");
}
