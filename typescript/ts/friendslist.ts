class Friend{
    name: string;
    email: string;
    years: number;

    constructor(name: string, email: string, years: number){
        this.name = name;
        this.email = email;
        this.years = years;
    }

    Print(): void{
        console.log(`name = ${this.name}, email = ${this.email}, years as a friend = ${this.years}`);
    }
}

let friendsList: Friend[] = [
  new Friend("Dave", "davesemail@gmail.com", 20),
  new Friend("Jon", "jonsemail@gmail.com", 18),
  new Friend("Chas", "chasemail@gmail.com", 16),
  new Friend("Mike", "mikesemail@gmail.com", 16),
  new Friend("Chris", "chrisemail@gmail.com", 16)
];

for(let cat of friendsList){
    cat.Print();
}