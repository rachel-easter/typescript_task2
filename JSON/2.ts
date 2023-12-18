// Adding fields to JSON data:
interface Details {
    name: string;
    class: string;
    'roll-number': number;
    address: {
        district: string;
        pincode?: number; // Make pincode optional
    };
    student?: boolean; // Make student optional
    'reg-number'?: number; // Make reg-number optional
}

const details: Details = {
    name: "Rachel",
    class: "mca",
    'roll-number': 7,
    address: {
        district: "virudhunagar"
    }
};

// Nested adding using dot notation:
details.student = true;

// Nested adding:
details.address.pincode = 626203;

// Normal approach:
details['reg-number'] = 100;

console.log(details);
