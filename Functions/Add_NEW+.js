//Initially_Add_New_CountdownTile

function createTile(tileData) {
    const { id, title, date, time, center } = tileData;
    const formattedDate = new Date(date).toLocaleDateString('en-GB'); // Format to dd/mm/yyyy
    const newTile = document.createElement('div');
    newTile.classList.add('tile', 'dark');
    newTile.id = id;
    newTile.setAttribute('data-date', date);
  
    newTile.innerHTML = `
      <h2>${title}</h2>
      <p>Date: ${formattedDate}</p>
      <p>Time: ${time}</p>
      <p><strong>Center:</strong> ${center}</p>
      <div class="countdown dark" id="countdown${id}"></div>
      <button class="download-btn" onclick="downloadTile('${id}')"><i class="fas fa-download"></i></button>
      <button class="delete-btn" onclick="deleteTile('${id}')"><i class="fas fa-trash"></i></button>
    `;
  
    document.getElementById('container').appendChild(newTile);
    updateCountdown(new Date(`${date}T${time}`), `countdown${id}`);
    setInterval(() => updateCountdown(new Date(`${date}T${time}`), `countdown${id}`), 1000);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const savedTiles = JSON.parse(localStorage.getItem('tiles')) || [];
    savedTiles.forEach((tile) => createTile(tile));
    reorderTiles(document.getElementById('sort-select').value); // Reorder tiles after loading
  });
  
  const AddBtn = document.getElementById('addTileBtn');
  const floatingForm = document.getElementById('floatingForm');
  const addTile = document.getElementById('addTile');
  const cancelTile = document.getElementById('cancelTile');
  
  addTileBtn.addEventListener('click', () => {
    floatingForm.style.display = 'block';
  });
  
  cancelTile.addEventListener('click', () => {
    floatingForm.style.display = 'none';
  });
  
  function saveTile(tileData) {
    const savedTiles = JSON.parse(localStorage.getItem('tiles')) || [];
    savedTiles.push(tileData);
    localStorage.setItem('tiles', JSON.stringify(savedTiles));
  }
  
  addTile.addEventListener('click', saveTileHandler);
  
  //Enter-Key as Done btn:
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const currentInput = document.activeElement;
      const inputs = Array.from(floatingForm.querySelectorAll('input, button'));
      const currentIndex = inputs.indexOf(currentInput);
  
      if (currentIndex < inputs.length - 1) {
        inputs[currentIndex + 1].focus();
      } else if (currentInput === addTile) {
        saveTileHandler();
      }
    }
  });
  
  function saveTileHandler() {
    const title = document.getElementById('tileTitle').value;
    const date = document.getElementById('tileDate').value;
    const time = document.getElementById('tileTime').value;
    const center = document.getElementById('tileCenter').value;
  
    if (title && date && time && center) {
      const newTileId = `tile${Date.now()}`;
      const tileData = { id: newTileId, title, date, time, center };
  
      createTile(tileData);
      saveTile(tileData);
  
      // Clear form and hide
      floatingForm.style.display = 'none';
      document.getElementById('tileTitle').value = '';
      document.getElementById('tileDate').value = '';
      document.getElementById('tileTime').value = '';
      document.getElementById('tileCenter').value = '';
  
      reorderTiles(document.getElementById('sort-select').value); // Reorder tiles after adding new tile
    } else {
      alert('Please fill out all fields.');
    }
  }
  //Delete_btn
  function deleteTile(tileId) {
    const savedTiles = JSON.parse(localStorage.getItem('tiles')) || [];
    const updatedTiles = savedTiles.filter(tile => tile.id !== tileId);
    localStorage.setItem('tiles', JSON.stringify(updatedTiles));
  
    const tileElement = document.getElementById(tileId);
    if (tileElement) {
      tileElement.remove();
    }
  }