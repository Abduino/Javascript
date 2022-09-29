"use strict";
// typescript basic data types 
let age = 25; // intiger 
let lname = "abdurehman"; // string data type
let fname = "redi";
var weight = 62.5;
let activated = true; // boolean data type
// display values 
console.log("First name is= " + fname);
console.log("Father name is = " + lname);
console.log("Age = " + age);
console.log("Weight " + weight);
console.log("Active user = " + activated);
// array variables 
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 4, 5];
console.log(arr1);
// tuple variable 
var user = ["abdroid", 1234];
console.log(user);
// constant variable
const small = 1;
const mid = 2;
const larg = 3;
// enum variable type
var Size;
(function (Size) {
    Size[Size["small"] = 0] = "small";
    Size[Size["Mid"] = 1] = "Mid";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
// typescript object
let drivers = { id: 23, name: "abdre" };
console.log(drivers);
drivers.name = "belete";
drivers.id = 3242;
