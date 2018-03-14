class Customer{
    id: number;
    name: string;
    active: boolean;
    creditLimit: number;

    constructor(id: number, name: string, active: boolean, creditLimit: number){
        this.id = id;
        this.name = name;
        this.active = active;
        this.creditLimit = creditLimit;
    }

    printOut(): void{
        console.log(`id = ${this.id}, name = ${this.name}, active = ${this.active}, creditLimit = ${this.creditLimit}`)
    }
}

let customers: Customer[] = [
  new Customer(1, "MAX", true, 10000),
  new Customer(2, "Starbucks", true, 1000000),
  new Customer(3, "Jimmy Johns", true, 5000)
];

for(let customer of customers){
   customer.printOut();
}