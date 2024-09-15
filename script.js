// Countdown Timer Script
const countdownDate = new Date("Sep 19, 2024 00:00:00").getTime();
const timerElement = document.getElementById("timer");
const revealButton = document.getElementById("reveal-letter");
const letterImage = document.getElementById("letter");
const downloadButton = document.getElementById("download-button");

// Countdown timer function
const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    timerElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is finished, show the reveal button and download button
    if (distance < 0) {
        clearInterval(countdown);
        timerElement.innerHTML = "The moment has arrived!";
        revealButton.style.display = "block";  // Show the letter reveal button
        downloadButton.style.display = "block"; // Show the download button
    }
}, 1000);

// Event listener to reveal the letter when the button is clicked
revealButton.addEventListener("click", function() {
    letterImage.style.display = "block";  // Show the handwritten letter
});