"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Account_class_1 = require("./Account.class");
var SavingsAccount_class_1 = require("./SavingsAccount.class");
var Banking = /** @class */ (function () {
    function Banking() {
    }
    Banking.prototype.main = function () {
        var account = new Account_class_1.Account();
        var balance = account.deposit(100);
        if (balance != 100) {
            console.log("We have a problem!");
            return;
        }
        balance = account.withdraw(25);
        if (balance != 75) {
            console.log("We have a problem!");
            return;
        }
        // check for negative balance
        balance = account.withdraw(100);
        if (balance != 75) {
            console.log("We still have a problem");
        }
        // check for negative amount
        balance = account.withdraw(-100);
        if (balance != 75) {
            console.log("We still have a problem");
        }
        // check for negative amount
        balance = account.deposit(-100);
        if (balance != 75) {
            console.log("We still have a problem");
        }
        // get balance
        balance = account.getBalance();
        if (balance != 75) {
            console.log("We still have a problem");
        }
        console.log("Everything is Honkey Dorey! (Account)");
        var savings = new SavingsAccount_class_1.Savings(.12);
        var savingsBalance = savings.deposit(100);
        savingsBalance = savings.withdraw(35);
        console.log(savings.calculateInterest());
    };
    return Banking;
}());
exports.Banking = Banking;
var banking = new Banking();
banking.main();
