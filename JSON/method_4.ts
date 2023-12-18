// Serialization and deserialization (JSON methods):
interface UserDetails {
    Username: string;
    password: number;
}

const details: UserDetails = {
    Username: "rachel@gmail.com",
    password: 1234
};

// Convert object to string:
let jsonString: string = JSON.stringify(details);

// Convert the string to object:
let newPerson: UserDetails = JSON.parse(jsonString);

console.log(jsonString);
console.log(newPerson);
