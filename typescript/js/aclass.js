"use strict";
var Customer = /** @class */ (function () {
    function Customer(id, name, active, creditLimit) {
        this.id = id;
        this.name = name;
        this.active = active;
        this.creditLimit = creditLimit;
    }
    Customer.prototype.printOut = function () {
        console.log("id = " + this.id + ", name = " + this.name + ", active = " + this.active + ", creditLimit = " + this.creditLimit);
    };
    return Customer;
}());
var customers = [
    new Customer(1, "MAX", true, 10000),
    new Customer(2, "Starbucks", true, 1000000),
    new Customer(3, "Jimmy Johns", true, 5000)
];
for (var _i = 0, customers_1 = customers; _i < customers_1.length; _i++) {
    var customer = customers_1[_i];
    customer.printOut();
}
