// Color Picker functionality
colorPicker.addEventListener('input', function() {
    const selectedColor = colorPicker.value;
    clock.style.color = selectedColor;
    date.style.color = selectedColor;
    scrollIcon.style.color = selectedColor; // Change scroll icon color
    addTileBtn.style.backgroundColor = selectedColor;
    themeBtn.style.backgroundColor = selectedColor;
    greet.style.color=selectedColor;
});

// Font Size Resizer functionality
fontSizeRange.addEventListener('input', function() {
    const fontSize = fontSizeRange.value + "vw"; // Convert the value to 'vw' units
    clock.style.fontSize = fontSize;
});