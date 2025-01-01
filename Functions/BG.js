
// Handle background image upload
bgUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        const bgImage = reader.result;
        clockContainer.style.backgroundImage = `url(${bgImage})`; // Set BG
        localStorage.setItem('backgroundImage', bgImage); // Save the image in LS
    };
    reader.readAsDataURL(file);
});

//Function to load the BG img from LS when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const savedBgImage = localStorage.getItem('backgroundImage');
    if (savedBgImage) {
        clockContainer.style.backgroundImage = `url(${savedBgImage})`;
    }
});

// Event listener to remove the background image
document.getElementById('removeBgBtn').addEventListener('click', () => {
    clockContainer.style.backgroundImage = ''; // Remove the background image
    localStorage.removeItem('backgroundImage'); // Remove the image from local storage
});