export class Vendor{
    id: number;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    email: string;
    isPreApproved: boolean;
    active: boolean;

    constructor(id: number, code: string, name: string, address: string, city: string, state: string, zip: string, phone: string, email: string, ispreapproved: boolean, active: boolean){
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

    PrintList(): void {
        console.log(`id = ${this.id}, code = ${this.code}, name = ${this.name}, 
        address = ${this.address}, city = ${this.city}, state = ${this.state}, zip = ${this.zip}, 
        phone = ${this.phone}, email = ${this.email}, 
        isPreApproved = ${this.isPreApproved}, active = ${this.active}`)
    }
}