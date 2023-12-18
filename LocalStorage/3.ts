// Function to create and store user data in Local Storage
function createUserAndStoreData(username: string, email: string, age: number): void {
    const user = {
        username: username,
        email: email,
        age: age
    };

    // Retrieve existing users from Local Storage
    const existingUsers: { username: string; email: string; age: number }[] = JSON.parse(localStorage.getItem('users')) || [];

    // Add the new user to the array
    existingUsers.push(user);

    // Store the updated array in Local Storage
    localStorage.setItem('users', JSON.stringify(existingUsers));
}

// Function to retrieve and display user details from Local Storage
function retrieveAndDisplayUserData(): void {
    // Retrieve users from Local Storage
    const storedUsers: { username: string; email: string; age: number }[] = JSON.parse(localStorage.getItem('users')) || [];

    if (storedUsers.length > 0) {
        // Display user details
        console.log('User Details:', storedUsers);
    } else {
        console.log('No user details found in Local Storage.');
    }
}

// Function to add an item to existing user data in Local Storage
function addItemToUserData(username: string, newItem: string): void {
    // Retrieve users from Local Storage
    const storedUsers: { username: string; email: string; age: number; items?: string[] }[] = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user with the given username
    const userToUpdate = storedUsers.find(user => user.username === username);

    if (userToUpdate) {
        // Add the new item to the user's data
        userToUpdate.items = userToUpdate.items || [];
        userToUpdate.items.push(newItem);

        // Store the updated user data in Local Storage
        localStorage.setItem('users', JSON.stringify(storedUsers));

        console.log(`pincode '${newItem}' added to user '${username}' data.`);
    } else {
        console.log(`User '${username}' not found.`);
    }
}

// Function to search for a user based on email
function searchUserByEmail(email: string): void {
    // Retrieve users from Local Storage
    const storedUsers: { username: string; email: string; age: number }[] = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user with the given email
    const foundUser = storedUsers.find(user => user.email === email);

    if (foundUser) {
        console.log('User found:', foundUser);
    } else {
        console.log(`No user found with email '${email}'.`);
    }
}

// Function to search for a user based on multiple input fields
function searchUserByMultipleFields(username: string, email: string, age: number): void {
    // Retrieve users from Local Storage
    const storedUsers: { username: string; email: string; age: number }[] = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user with the given criteria
    const foundUser = storedUsers.find(user =>
        user.username === username && user.email === email && user.age === age
    );

    if (foundUser) {
        console.log('User found:', foundUser);
        // You can store the matched user in Local Storage or perform other actions as needed
    } else {
        console.log('No matching user found.');
    }
}

// Creating and storing user data
createUserAndStoreData('rra', 'rra@example.com', 25);

// Retrieving and displaying user data
retrieveAndDisplayUserData();

// Adding an item to existing user data
addItemToUserData('rra', '626203');
console.log(localStorage);

// Searching for a user by email
searchUserByEmail('rra@example.com');

// Searching for a user by multiple input fields
searchUserByMultipleFields('rra', 'rra@example.com', 25);
