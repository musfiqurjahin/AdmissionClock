
// Toggle visibility of controls when clicking on clock or date
clock.addEventListener('click', function() {
    controls.style.display = controls.style.display === 'flex' ? 'none' : 'flex';
    // Show the background upload input
    bgUpload.style.display = 'block';
});

date.addEventListener('click', function() {
    controls.style.display = controls.style.display === 'flex' ? 'none' : 'flex';
    // Show the background upload input
    bgUpload.style.display = 'block';
});