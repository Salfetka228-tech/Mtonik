const grid = document.getElementById("crystalGrid");
const gridSizeSelect = document.getElementById("gridSize");

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

// Функция для получения случайного числа в диапазоне
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для предсказания кристаллов с постепенным появлением
function predictCrystals() {
    generateGrid();
    const size = parseInt(gridSizeSelect.value);

    // Количество кристаллов для сетки
    let crystalCount;
    if (size === 3) {
        crystalCount = 4; // Для 3x3 всегда 4 кристалла
    } else if (size === 5) {
        crystalCount = getRandomInt(4, 10); // Для 5x5 случайное число от 4 до 10
    }

    const cells = Array.from(grid.children);
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
