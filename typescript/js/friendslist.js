"use strict";
var Friend = /** @class */ (function () {
    function Friend(name, email, years) {
        this.name = name;
        this.email = email;
        this.years = years;
    }
    Friend.prototype.Print = function () {
        console.log("name = " + this.name + ", email = " + this.email + ", years as a friend = " + this.years);
    };
    return Friend;
}());
var friendsList = [
    new Friend("Dave", "davesemail@gmail.com", 20),
    new Friend("Jon", "jonsemail@gmail.com", 18),
    new Friend("Chas", "chasemail@gmail.com", 16),
    new Friend("Mike", "mikesemail@gmail.com", 16),
    new Friend("Chris", "chrisemail@gmail.com", 16)
];
for (var _i = 0, friendsList_1 = friendsList; _i < friendsList_1.length; _i++) {
    var cat = friendsList_1[_i];
    cat.Print();
}
