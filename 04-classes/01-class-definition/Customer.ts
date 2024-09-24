class Customer {

    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

/*
let myCustomer = new Customer();

myCustomer.firstName = "Martin";
myCustomer.lastName = "Dixon";
*/

let myCustomer = new Customer("Martin", "Dixon");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
