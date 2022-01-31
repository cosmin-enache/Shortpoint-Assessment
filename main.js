// FUNCTIONS
const animateProgressBars = (currentWidthPercentage = 50) => {
    // select all progress bars
    const allProgressBars = document.querySelectorAll(".progress-bar");

    // interval to animate the bar until it reaches 100%
    const animInterval = setInterval(() => {
        for (const progressBar of allProgressBars) {
            progressBar.style.width = `${currentWidthPercentage}%`;
            progressBar.textContent = `${currentWidthPercentage}%`;
        }

        if (currentWidthPercentage === 100) {
            clearInterval(animInterval);
            return;
        }

        currentWidthPercentage++;
    }, 12);
};

// MAIN CODE
const finishButton = document.querySelector(".progress-bar-container > .finish-button");

finishButton.addEventListener("click", () => animateProgressBars());