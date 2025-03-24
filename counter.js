/* Create a counter in JavaScript (count down from 30 to 0) */

// Starting value of the countdown
let count = 30;

// Function to start the countdown
function startCountdown() {
    // Set the interval to update the countdown every second
    const interval = setInterval(() => {
        // Output the current count to the console
        console.log(count);

        // Decrease the count by 1 each second
        count--;

        // When the count reaches 0, stop the countdown
        if (count < 0) {
            clearInterval(interval);
            console.log('Time\'s up!');
        }
    }, 1000); // 1000ms = 1 second
}

// Call the startCountdown function to begin the countdown
startCountdown();