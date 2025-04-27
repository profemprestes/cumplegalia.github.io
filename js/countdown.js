document.addEventListener('DOMContentLoaded', () => {
    // Target date for the party
    const targetDate = new Date("May 10, 2025 13:00:00");

    // Get DOM elements
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        // Handle countdown completed
        if (difference <= 0) {
            daysElement.textContent = '¡';
            hoursElement.textContent = 'Ha';
            minutesElement.textContent = 'comenzado';
            secondsElement.textContent = 'la fiesta!';
            return;
        }

        // Calculate time units
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Update DOM elements with two-digit format
        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }

    // Initial call to set up countdown immediately
    updateCountdown();

    // Update countdown every second
    setInterval(updateCountdown, 1000);
});