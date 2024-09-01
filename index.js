const gridDimensions = 540; // pixels

function getGridSize() {
  const gridSize = prompt("Enter grid cells per side");
  if (gridSize > 100 || gridSize < 1) {
    alert("1 is the minimum and 100 is the maximum");
    return getGridSize();
  }
  return gridSize;
}

function createGrid(gridSize = 16) {
  const grid = document.querySelector("div.grid");
  grid.innerHTML = null;
  grid.style.width = `${gridDimensions}px`;
  const totalCells = gridSize * gridSize;
  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    const cellSize = gridDimensions / gridSize;
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    grid.appendChild(cell);
  }
}

function init() {
  createGrid(16);
  const createNewButton = document.querySelector(".create-new-btn");
  createNewButton.addEventListener("click", (e) => {
    const gridSize = getGridSize();
    createGrid(gridSize);
  });
}

init();
