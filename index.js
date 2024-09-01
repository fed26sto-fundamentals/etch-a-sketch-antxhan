const gridDimensions = 540; // pixels
let rgb = {
  red: 0,
  green: 0,
  blue: 0,
};

function getGridSize() {
  const gridSize = prompt("Enter grid cells per side");
  if (gridSize > 100 || gridSize < 1) {
    alert("1 is the minimum and 100 is the maximum");
    return getGridSize();
  }
  return gridSize;
}

function getRandomValue(color) {
  const randomValue = Math.floor(Math.random() * 255);
  if (rgb.color === randomValue) {
    return getRandomValue(color);
  }
  return randomValue;
}

function setRandomRGB() {
  for (color in rgb) {
    const randomValue = getRandomValue(color);
    rgb[color] = randomValue;
  }
}

function setOpacity(cell) {
  if (cell.style.opacity === 0) {
    return;
  }
  cell.style.opacity = cell.style.opacity - 0.1;
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
    cell.style.backgroundColor = "white";
    cell.style.opacity = 1;
    cell.addEventListener("mouseover", (e) => {
      setOpacity(e.target);
      setRandomRGB();
      cell.style.backgroundColor = `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`;
    });
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
