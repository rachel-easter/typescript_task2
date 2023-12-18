// Deleting a password property from JSON object:
interface UserDetails {
    Username: string;
    password?: number; // Make password optional
}

const details: UserDetails = {
    Username: "rachel@gmail.com",
    password: 1234
};

delete details.password;

console.log(details);
