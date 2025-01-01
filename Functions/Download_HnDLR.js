function downloadTile(tileId) {
    const tile = document.getElementById(tileId);
    html2canvas(tile).then(canvas => {
      // Create a new canvas
      const newCanvas = document.createElement('canvas');
      const context = newCanvas.getContext('2d');
  
      // Set canvas dimensions
      newCanvas.width = canvas.width;
      newCanvas.height = canvas.height;
  
      // Draw the original canvas onto the new canvas
      context.drawImage(canvas, 0, 0);
  
      // Set watermark properties
      const watermarkText = "Generated from musfiqurjahin.github.io";
      context.font = "italic 15px sans-serif"; // Use sans-serif font
      context.fillStyle = "rgba(255, 255, 255, 0.5)"; // White with 50% opacity
      context.textAlign = "center";
      context.textBaseline = "top";
  
      // Highlight watermark text
      context.shadowColor = "rgba(0, 0, 0, 0.8)"; // Black shadow
      context.shadowBlur = 5; // Shadow blur
      context.shadowOffsetX = 2; // Horizontal shadow offset
      context.shadowOffsetY = 2; // Vertical shadow offset
  
      // Optional: Add a semi-transparent background to the watermark text
      const textWidth = context.measureText(watermarkText).width;
      context.fillStyle = "green"; // Semi-transparent black background
      context.fillRect((newCanvas.width / 2) - (textWidth / 2) - 5, 10 - 5, textWidth + 10, 25);
  
      // Draw the watermark text at the top of the canvas
      context.fillStyle = "white"; // White text
      context.fillText(watermarkText, newCanvas.width / 2, 10);
  
      // Convert the new canvas to a data URL and download the image
      const link = document.createElement('a');
      link.href = newCanvas.toDataURL('image/jpeg');
      link.download = `${tileId}.jpg`;
      link.click();
    });
  }