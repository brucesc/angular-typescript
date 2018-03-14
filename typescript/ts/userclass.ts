class User{
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    isReviewer: boolean;
    isAdmin: boolean;
    active: boolean

    constructor(id: number, username: string, password: string, firstname: string, lastname: string, phone: string, email: string, isreviewer: boolean, isadmin: boolean, active: boolean){
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

    Print():void{
        console.log(`id = ${this.id}, userName = ${this.userName}, password = WOULDN'T YOU LIKE TO KNOW!,  
        name = ${this.firstName} ${this.lastName}, 
        phone = ${this.phone}, email = ${this.email}, 
        isReviewer = ${this.isReviewer}, isAdmin = ${this.isAdmin}, active = ${this.active}.`)
    }
}

let users: User[] = [
    new User(1, "Brucesc", "123abc", "Steven", "Bruce", "513-600-2851", "Brucesc726@gmail.com", true, true, true),
    new User(2, "DTrain", "123abc", "David", "Haines", "513-333-2851", "DTrain@gmail.com", true, false, true),
    new User(3, "KDog", "123abc", "Kara", "Bruce", "513-502-1286", "kwilliams@gmail.com", true, false, true),
    new User(4, "CharlesInCharge", "123abc", "Charlie", "Bruce", "513-223-2851", "Charlie.Brucee@gmail.com", false, false, true),
    new User(5, "Pastttt", "123abc", "Ghost", "Bruce", "513-400-2851", "Past@gmail.com", true, true, true),    
];

for(let dog of users){
    dog.Print();
}