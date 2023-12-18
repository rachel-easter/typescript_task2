interface UserData {
  id: number;
  name: string;
  active: number;
}

// Function to store user data directly in local storage
function storeUser(userData: UserData): void {
  const existingData: { [key: number]: UserData } = JSON.parse(localStorage.getItem('userData')) || {};
  existingData[userData.id] = userData;
  localStorage.setItem('userData', JSON.stringify(existingData));
}

// Function to update the "active" field from 0 to 1 for a specific user
function updateUserActive(userId: number): void {
  const existingData: { [key: number]: UserData } = JSON.parse(localStorage.getItem('userData')) || {};
  if (existingData[userId]) {
    existingData[userId].active = 1;
    localStorage.setItem('userData', JSON.stringify(existingData));
    console.log(`User with ID ${userId} updated successfully.`);
  } else {
    console.error('User not found with ID:', userId);
  }
}

// User data
const user1: UserData = {
  id: 100,
  name: 'Rachel',
  active: 0,
};

const user2: UserData = {
  id: 101,
  name: 'John',
  active: 0,
};

const user3: UserData = {
  id: 102,
  name: 'Alice',
  active: 0,
};

// Store multiple user data
storeUser(user1);
storeUser(user2);
storeUser(user3);

// Verify that the user data is stored
const storedDataBeforeUpdate: { [key: number]: UserData } = JSON.parse(localStorage.getItem('userData')) || {};
console.log('Stored User Data (Before Update):', storedDataBeforeUpdate);

// Update "active" field for the user with ID 102
updateUserActive(102);

// Verify that the user data is updated
const storedDataAfterUpdate: { [key: number]: UserData } = JSON.parse(localStorage.getItem('userData')) || {};
console.log('Stored User Data (After Update):', storedDataAfterUpdate);
