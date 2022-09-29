var Drivers = /** @class */ (function () {
    function Drivers(f_name, l_name, age, weight) {
        this.f_name = f_name;
        this.l_name = l_name;
        this.age = age;
        this.weight = weight;
    }
    Drivers.prototype.display = function () {
        console.log("First name is= " + this.f_name);
        console.log("Father name is = " + this.l_name);
        console.log("Age = " + this.age);
        console.log("Weight " + this.weight);
    };
    return Drivers;
}());
var driver1 = new Drivers("abdurehman", "redi", 25, 62.5);
driver1.display();
