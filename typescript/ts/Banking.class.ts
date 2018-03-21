import { Account } from './Account.class';
import { Savings } from './SavingsAccount.class';

export class Banking{

    constructor(){

    }

    main(): void {
                   let account: Account = new Account();
                   let balance: number = account.deposit(100);
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

                   let savings: Savings = new Savings(.12);
                   let savingsBalance: number = savings.deposit(100);
                   savingsBalance = savings.withdraw(35);
                   console.log(savings.calculateInterest());

                 }
}

let banking: Banking = new Banking();
banking.main();