// function without a parameter 
function disHello() {
    console.log("hello world");
}
// function with parameter 
function disUser(fname, lname, age, weight) {
    console.log("First name is= " + fname);
    console.log("Father name is = " + lname);
    console.log("Age = " + age);
    console.log("Weight " + weight);
}
// pass
function disArray() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var x;
    for (x = 0; x <= 5; x++) {
        console.log(nums[x]);
    }
}
// default value function 
function defaultFunction(f_name, age) {
    if (age === void 0) { age = 25; }
    console.log("First name is = " + f_name);
    console.log("Age = " + age);
}
// calling a function 
disHello();
disUser("abdurehman", "redi", 50, 62.5);
disArray(9, 8, 7, 6, 5, 4);
defaultFunction("abdurehman", 40);
defaultFunction("abdurehman");
