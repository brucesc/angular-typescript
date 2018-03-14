"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vendor = /** @class */ (function () {
    function Vendor(id, code, name, address, city, state, zip, phone, email, ispreapproved, active) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
        this.isPreApproved = ispreapproved;
        this.active = active;
    }
    Vendor.prototype.PrintList = function () {
        console.log("id = " + this.id + ", code = " + this.code + ", name = " + this.name + ", \n        address = " + this.address + ", city = " + this.city + ", state = " + this.state + ", zip = " + this.zip + ", \n        phone = " + this.phone + ", email = " + this.email + ", \n        isPreApproved = " + this.isPreApproved + ", active = " + this.active);
    };
    return Vendor;
}());
exports.Vendor = Vendor;
