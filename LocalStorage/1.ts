// Store data in Local Storage
localStorage.setItem('name', 'Rachel');
localStorage.setItem('userId', '7');

// Retrieve data from Local Storage
const storedName: string | null = localStorage.getItem('name');
const storedUserIdString: string | null = localStorage.getItem('userId');

// Convert userId string to number
const storedUserIdNumber: number | NaN = parseInt(storedUserIdString || '', 10);

// Short syntax to get data from Local Storage
const { name, userId } = localStorage;

// Remove an item from Local Storage
localStorage.removeItem('name');

// Remove all items from Local Storage
localStorage.clear();

// Logging the results
// console.log(localStorage);
console.log('Stored Name:', storedName);
console.log('Stored UserId (String):', storedUserIdString);
console.log('Stored UserId (Number):', storedUserIdNumber);
console.log('Short Syntax - Name:', name);

// After removing an item and clearing Local Storage
console.log('After removing "name":', localStorage.getItem('name'));
console.log('After clearing all items:', localStorage);
