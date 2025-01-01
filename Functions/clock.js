//Clock_Functionality:
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
    const timeString = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
    
    document.getElementById('clock').textContent = timeString;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);
    document.getElementById('date').textContent = dateString;

    //dynamic greetings
    const greetingElement = document.getElementById('greeting');
    let greetingMessage;
    if (hours < 12) {
        greetingMessage = "Good Morning!";
    } else if (hours < 18) {
        greetingMessage = "Good Afternoon!";
    } else {
        greetingMessage = "Good Evening!";
    }
    greetingElement.textContent = greetingMessage;
}
// Set interval for clock and greeting updates
setInterval(updateClock, 1000);
updateClock(); // Initial call to display the clock, date, and greeting immediately :D

