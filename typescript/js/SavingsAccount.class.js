"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Savings = /** @class */ (function () {
    function Savings(interest) {
        this.balance = 0;
        if (interest > 1 || interest < 0) {
            console.error("Interest should be in decimal form. Please reconsider!");
        }
        this.interest = interest;
    }
    Savings.prototype.deposit = function (amount) {
        if (amount < 0) {
            console.error("Amount to deposit cannot be negative");
            return this.balance;
        }
        this.balance += amount;
        return this.balance;
    };
    Savings.prototype.withdraw = function (amount) {
        if (amount < 0) {
            console.error("Amount to withdraw cannot be negative");
            return this.balance;
        }
        if (amount > this.balance) {
            console.error("Insufficient funds");
            return this.balance;
        }
        this.balance -= amount;
        return this.balance;
    };
    Savings.prototype.getBalance = function () {
        return this.balance;
    };
    Savings.prototype.calculateInterest = function () {
        var percent = this.interest * 100;
        var earned = this.balance * this.interest;
        this.balance += earned;
        var msg = "At " + percent + "% interest you have earned $" + earned.toFixed(2) + ".\n        Your new balance is $" + this.balance.toFixed(2) + ".";
        return msg;
    };
    return Savings;
}());
exports.Savings = Savings;
