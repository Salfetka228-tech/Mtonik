const grid = document.getElementById("crystalGrid");
const gridSizeSelect = document.getElementById("gridSize");

// Настройки кристаллов для каждой сетки
const crystalCounts = {
    3: 4, // 3x3
    5: 11 // 5x5
};

// Функция для генерации сетки
function generateGrid() {
    const size = parseInt(gridSizeSelect.value);
    grid.innerHTML = ''; // Очистка сетки
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("button");
        cell.classList.add("cell");
        grid.appendChild(cell);
    }
}

// Функция для предсказания кристаллов с постепенным появлением
function predictCrystals() {
    generateGrid();
    const size = parseInt(gridSizeSelect.value);
    const cells = Array.from(grid.children);
    const crystalCount = crystalCounts[size];

    const randomIndices = [];
    while (randomIndices.length < crystalCount) {
        const randomIndex = Math.floor(Math.random() * cells.length);
        if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
        }
    }

    // Постепенное добавление класса active с интервалом
    randomIndices.forEach((index, i) => {
        setTimeout(() => {
            cells[index].classList.add("active");
        }, i * 500); // Интервал 500 мс между кристаллами
    });
}

// Изначально создать сетку
window.onload = generateGrid;
