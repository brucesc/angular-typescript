export class Savings{

    balance: number = 0;
    interest: number;

    constructor(interest: number){
        if(interest > 1 || interest < 0){
            console.error("Interest should be in decimal form. Please reconsider!");
        }
        this.interest = interest;
    }

    deposit(amount: number): number {
        if (amount < 0) {
          console.error("Amount to deposit cannot be negative");
          return this.balance;
        }
        this.balance += amount;
        return this.balance;
    }

    withdraw(amount: number): number {
        if(amount < 0){
            console.error("Amount to withdraw cannot be negative");
            return this.balance;
        }
        if(amount > this.balance){
            console.error("Insufficient funds")
            return this.balance;
        }
        this.balance -= amount;
        return this.balance;
    }

    getBalance(): number {
        return this.balance;
    }

    calculateInterest(): string {
        let percent: number = this.interest * 100;
        let earned: number = this.balance * this.interest;
        this.balance += earned;
        let msg: string = `At ${percent}% interest you have earned $${earned.toFixed(2)}.
        Your new balance is $${this.balance.toFixed(2)}.`;
        return msg;
    }
}