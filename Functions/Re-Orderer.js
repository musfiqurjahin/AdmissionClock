function reorderTiles(order) {
    const container = document.getElementById('container');
    const tiles = Array.from(container.getElementsByClassName('tile'));
  
    tiles.sort((a, b) => {
      const dateA = new Date(a.getAttribute('data-date'));
      const dateB = new Date(b.getAttribute('data-date'));
      return order === 'asc' ? dateA - dateB : dateB - dateA;
    });
  
    tiles.forEach(tile => container.appendChild(tile));
  }
  
  document.getElementById('sort-select').addEventListener('change', (event) => {
    reorderTiles(event.target.value);
  });