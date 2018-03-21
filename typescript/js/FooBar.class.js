"use strict";
// let numbers: number[] = [];
Object.defineProperty(exports, "__esModule", { value: true });
//     for (let index = 0; index <= 100; index++) {
//         numbers.push(index +1);            
//     }
//     numbers.forEach(n => {
//         if (n % 3 == 0 && n % 5 == 0) {
//             console.log("FooBar");
//         }
//         else if (n % 3 == 0) {
//             console.log("Foo");
//         }
//         else if (n % 5 == 0){
//             console.log("Bar");
//         }
//         else {
//             console.log(n);
//         }
//     });
var FooBar = /** @class */ (function () {
    function FooBar(array) {
        this.array = [];
        this.array = array;
    }
    FooBar.prototype.FillTheArray = function (array) {
        for (var index = 0; index <= 100; index++) {
            array.push(index + 1);
        }
    };
    FooBar.prototype.PrintFooBar = function (array) {
        array.forEach(function (n) {
            if (n % 3 == 0 && n % 5 == 0) {
                console.log("FooBar");
            }
            else if (n % 3 == 0) {
                console.log("Foo");
            }
            else if (n % 5 == 0) {
                console.log("Bar");
            }
            else {
                console.log(n);
            }
        });
    };
    return FooBar;
}());
exports.FooBar = FooBar;
