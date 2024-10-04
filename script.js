// Set the duration for the timer (5 minutes in seconds)
const duration = 5 * 60; // 5 minutes in seconds
let timer = duration, minutes, seconds;

// Function to start the timer
function startTimer() {
    const display = document.querySelector('#timer');
    const pdfViewer = document.querySelector('#pdf-viewer');

    const countdown = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = "Time remaining: " + minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(countdown);
            pdfViewer.style.display = 'none'; // Hide the PDF viewer
            display.textContent = "Time's up! The PDF is no longer available.";
        }
    }, 1000);
}

// Call the startTimer function
startTimer();
