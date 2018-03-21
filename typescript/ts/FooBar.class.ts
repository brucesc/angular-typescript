    // let numbers: number[] = [];

    
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

export class FooBar{
       
    array: number[] = [];

    constructor(array: number[]){
        this.array = array;
    }

    FillTheArray(array: number[]):void{
        for (let index = 0; index <= 100; index++) {
          array.push(index + 1);
        }
    }

    PrintFooBar(array: number[]):void{
        array.forEach(n => {
          if (n % 3 == 0 && n % 5 == 0) {
            console.log("FooBar");
          } else if (n % 3 == 0) {
            console.log("Foo");
          } else if (n % 5 == 0) {
            console.log("Bar");
          } else {
            console.log(n);
          }
        });
    }
}