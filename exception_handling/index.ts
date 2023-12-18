function calculateFare(): void {
    try {
        const numKms: number = parseFloat((document.getElementById('numKms') as HTMLInputElement).value);

        if (isNaN(numKms) || numKms <= 0) {
            throw new Error('Please enter a valid number of kilometers.'); // Error Message
        }

        const cabType: string = (document.getElementById('cabType') as HTMLInputElement).value;
        let farePerKm: number;

        switch (cabType) {
            case 'micro':
                farePerKm = 10;
                break;
            case 'mini':
                farePerKm = 15;
                break;
            case 'prime':
                farePerKm = 25;
                break;
            default:
                throw new Error('Invalid cab type selected.');
        }

        const discountCode: string = (document.getElementById('discountCode') as HTMLInputElement).value;
        let discountMultiplier: number = 1; // if any of the discount is applicable then it will give the result without any discount

        if (discountCode === 'FAST') {
            discountMultiplier = 0.8;
        }
        if (discountCode === 'MEDIUM') {
            discountMultiplier = 0.5;
        }

        const totalFare: number = numKms * farePerKm * discountMultiplier;

        (document.getElementById('result') as HTMLElement).innerHTML = `Total Fare: Rs. ${totalFare.toFixed(2)}`; // It will display the result
    } catch (error) {
        (document.getElementById('result') as HTMLElement).innerHTML = `Error: ${error.message}`; // If any error occurs, it will catch and show here without crashing the whole application
    }
}
