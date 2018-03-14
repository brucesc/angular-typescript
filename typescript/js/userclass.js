"use strict";
var User = /** @class */ (function () {
    function User(id, username, password, firstname, lastname, phone, email, isreviewer, isadmin, active) {
        this.id = id;
        this.userName = username;
        this.password = password;
        this.firstName = firstname;
        this.lastName = lastname;
        this.phone = phone;
        this.email = email;
        this.isReviewer = isreviewer;
        this.isAdmin = isadmin;
        this.active = active;
    }
    User.prototype.Print = function () {
        console.log("id = " + this.id + ", userName = " + this.userName + ", password = WOULDN'T YOU LIKE TO KNOW!,  \n        name = " + this.firstName + " " + this.lastName + ", \n        phone = " + this.phone + ", email = " + this.email + ", \n        isReviewer = " + this.isReviewer + ", isAdmin = " + this.isAdmin + ", active = " + this.active + ".");
    };
    return User;
}());
var users = [
    new User(1, "Brucesc", "123abc", "Steven", "Bruce", "513-600-2851", "Brucesc726@gmail.com", true, true, true),
    new User(2, "DTrain", "123abc", "David", "Haines", "513-333-2851", "DTrain@gmail.com", true, false, true),
    new User(3, "KDog", "123abc", "Kara", "Bruce", "513-502-1286", "kwilliams@gmail.com", true, false, true),
    new User(4, "CharlesInCharge", "123abc", "Charlie", "Bruce", "513-223-2851", "Charlie.Brucee@gmail.com", false, false, true),
    new User(5, "Pastttt", "123abc", "Ghost", "Bruce", "513-400-2851", "Past@gmail.com", true, true, true),
];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var dog = users_1[_i];
    dog.Print();
}
