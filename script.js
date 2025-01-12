document.getElementById('spinButton').addEventListener('click', function() {
    var wheel = document.getElementById('wheel');
    var resultText = document.getElementById('result');
    var congratulationsLogo = document.getElementById('congratulations-logo'); // Get the logo element
    
    // Hide the logo initially
    congratulationsLogo.style.display = 'none';
    
    // Spin for 5 seconds
    var randomDegree = Math.floor(Math.random() * 360) + 3600; // Adding extra spin for effect

    // Apply rotation and transition for smooth stop
    wheel.style.transition = `transform 5s ease-out`;
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    // Display result and logo after spin completes
    setTimeout(function() {
        // Determine the prize based on the wheel's final position
        var degrees = randomDegree % 360;
        var sliceIndex = Math.floor(degrees / (360 / 7));
        var prizes = [
            'Oppo F7', 
            'Vivo 1814', 
            'Airpods', 
            'Handfree', 
            'T-Shirt Red', 
            'Infinix Hot 11', 
            'Nothing'
        ];
        
        resultText.innerHTML = 'Congratulations! You won: ' + prizes[sliceIndex];
        
        // Show the congratulations logo
        congratulationsLogo.style.display = 'block'; // Show the logo
        congratulationsLogo.classList.add('show-logo'); // Start the animation
        
        // After 2 seconds, hide the logo
        setTimeout(function() {
            congratulationsLogo.classList.remove('show-logo');
            congratulationsLogo.classList.add('hide-logo');
        }, 2000); // Logo stays visible for 2 seconds
    }, 5000); // Wait for 5 seconds (spin time) to show the result
});
