// Storing an object in Local Storage
const userDetails = {
    name: "Rachel",
    userId: 7
};

localStorage.setItem('userDetails', JSON.stringify(userDetails)); // Serialization

// Retrieving the object from Local Storage // Deserialization
const storedUserDetailsString: string | null = localStorage.getItem('userDetails');

if (storedUserDetailsString) {
    // Parsing the JSON string to get the object
    const storedUserDetails: { name: string; userId: number } = JSON.parse(storedUserDetailsString);

    // Logging the object to the console
    console.log('Stored User Details:', storedUserDetails);
} else {
    console.log('User details not found in Local Storage.');
}
