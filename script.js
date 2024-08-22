document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Show the popup
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('animatedButton').addEventListener('click', function() {
    // Hide the popup
    document.getElementById('popup').style.display = 'none';
    
    // Show the countdown section
    document.getElementById('countdownSection').style.display = 'flex';

    // Countdown logic
    let countdownNumber = 10;
    const countdownElement = document.getElementById('countdown');
    
    const countdownInterval = setInterval(() => {
        countdownElement.textContent = countdownNumber;
        countdownNumber -= 1;

        if (countdownNumber < 0) {
            clearInterval(countdownInterval);
            setTimeout(() => {
                // Hide the countdown section
                document.getElementById('countdownSection').style.display = 'none';
                
                // Show the final message section
                document.getElementById('finalMessageSection').style.display = 'flex';
            }, 1000); // Wait for 1 second before showing the final message
        }
    }, 1000); // Update countdown every second
});
