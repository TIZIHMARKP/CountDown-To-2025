
document.addEventListener('DOMContentLoaded', () => {
    const daysEl = document.getElementById('day-box');
    const hoursEl = document.getElementById('hr-box');
    const minutesEl = document.getElementById('min-box');
    const secondsEl = document.getElementById('sec-box');
    const yearDiv = document.querySelector('.Year');
    const headingDiv = document.querySelector('.heading');
    const endDate = new Date('January 1, 2025 00:00:00');
    // const endDate = new Date('December 31, 2024 18:01:00');
    const endTime = endDate.getTime();

    function countdown() {
        const now = new Date();
        const timeDifference = endTime - now;

        if (timeDifference <= 0) {
            clearInterval(interval);
            document.querySelector(".countdown").innerHTML = `
                <div class="happy-new-year">
                    <h1>🎉 HAPPY NEW YEAR 2025 🎉</h1>
                    <p>May this new year bring you joy, peace, and happiness. Here's to new beginnings and wonderful adventures. Happy New Year 2025! <br> </p>
                    <video class="new-year-video" autoplay muted loop>
                        <source src="./assets/happy new yr.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            `;
            document.body.style.backgroundImage = "url('./assets/happy25.jpeg')";
            if (headingDiv) {
                headingDiv.remove();
            }
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        daysEl.innerHTML = days < 10 ? '0' + days : days;
        hoursEl.innerHTML = hours < 10 ? '0' + hours : hours;
        minutesEl.innerHTML = minutes < 10 ? '0' + minutes : minutes;
        secondsEl.innerHTML = seconds < 10 ? '0' + seconds : seconds;
    }

    const interval = setInterval(countdown, 1000);
    countdown();
});
