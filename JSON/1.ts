// JSON Data are stored as key and value:

interface Person {
    name: string;
    age: number;
    isStudent: boolean;
    address: {
        city: string;
        pinCode: string;
    };
}

let person: Person = {
    name: "Rachel",
    age: 20,
    isStudent: true,
    address: {
        city: "Sattur",
        pinCode: "626203"
    }
};

// Accessing top-level fields
let personName: string = person.name;
let personAge: number = person.age;
let isStudent: boolean = person.isStudent;

console.log("Name:", personName);
console.log("Age:", personAge);
console.log("Is Student:", isStudent);

// Accessing nested fields
let city: string = person.address.city;
let zipCode: string = person.address.pinCode;

console.log("City:", city);
console.log("Zip Code:", zipCode);

// Method 2: Using bracket notation
// This is used if the property name has any special character :
let PersonNameBracket: string = person["name"];
let PinCodeBracket: string = person["address"]["pinCode"];

console.log(PersonNameBracket);
console.log(PinCodeBracket);
