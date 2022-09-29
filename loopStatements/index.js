// typescript looping statements 
var i;
//for loop statement
for (i = 0; i < 10; i++) {
    console.log("Iteration" + i);
}
//while statement 
i = 0;
while (i <= 10) {
    console.log("iteration" + i);
    i++;
}
//do while statements
i = 0;
do {
    console.log("Iteration" + i);
    i++;
} while (i <= 10);
// nested for loop
var x;
var y;
var z;
for (x = 0; x <= 5; x++) {
    for (y = 0; y <= 5; y++) {
        console.log("*");
    }
}
for (x = 0; x <= 5; x++) {
    for (y = x; y <= 5; y++) {
        console.log("*");
    }
    for (z = x; z >= 0; z--) {
        console.log("$");
    }
}
