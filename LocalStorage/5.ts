// Storing data in sessionStorage
const userName: string = 'Rachel';
const userId: string = '007';

// Convert userId string to a number
const numericUserId: number = parseInt(userId, 10);

sessionStorage.setItem('name', userName);
sessionStorage.setItem('userId', userId);

// Retrieving data from sessionStorage
const storedName: string | null = sessionStorage.getItem('name');
const storedUserId: number = parseInt(sessionStorage.getItem('userId') || '0', 10);

console.log('Stored Name:', storedName);
console.log('Stored UserId:', storedUserId);

// Short syntax to get data from sessionStorage
const shortSyntaxName: string | undefined = sessionStorage.name;
const shortSyntaxUserId: number = parseInt(sessionStorage.userId || '0', 10);

console.log('Short Syntax - Name:', shortSyntaxName);
console.log('Short Syntax - UserId:', shortSyntaxUserId);

// Removing all items from sessionStorage
sessionStorage.clear();
