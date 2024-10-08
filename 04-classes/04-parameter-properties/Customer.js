"use strict";
class Customer {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
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
