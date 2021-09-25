const spacing = 50;

let gridWidth;
let gridHeight;

let grid;
let colors;
let colorCache;
let cacheValidity = false;

let sites;
let weights;

const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(20);

    gridWidth = floor(windowWidth / spacing);
    gridHeight = floor(windowHeight / spacing);

    grid = Array.from({ length: gridHeight }, () => Array.from({ length: gridWidth }, () => 0));
    colors = Array.from({ length: gridWidth * gridHeight }, () => "#000000");
    colorCache = Array.from({ length: gridHeight }, () => Array.from({ length: gridWidth }, () => "#000000"));

    sites = Array.from({ length: gridWidth * gridHeight }, (v, i) => i);
    weights = Array.from({ length: gridWidth * gridHeight }, () => 1);

    stroke(255);
    strokeWeight(0.5);
}

function draw() {
    background(0);
    noFill();

    drawGrid();

    if(mouseIsPressed) {
        const y = floor(mouseY / spacing), x = floor(mouseX / spacing);
        if(isValid(y, x)) {
            connect(y, x);
        }
    }
}

function drawGrid() {
    let x, y;
    x = y = 0;

    let updatedCache = false;

    for (let row = 0; row < gridHeight; row++) {
        for (let col = 0; col < gridWidth; col++) {
            let color;
            if (cacheValidity) {
                color = colorCache[row][col];
            } else {
                color = colors[find(coordToSite(row, col))];
                colorCache[row][col] = color;
                updatedCache = true;
            }

            fill(color);

            rect(x, y, spacing, spacing);
            x += spacing;
        }

        y += spacing;
        x = 0;
    }

    if (updatedCache) {
        cacheValidity = true;
    }
}

function isValid(row, col) {
    return row >= 0 && row < gridHeight && col >= 0 && col < gridWidth;
}

function coordToSite(row, col) {
    return (row * gridWidth) + col;
}

function doAdjacentUnion(row, col, row1, col1) {
    if (isValid(row1, col1) && grid[row1][col1]) {
        const oldParent = find(coordToSite(row1, col1));
        const parent = union(coordToSite(row, col), coordToSite(row1, col1));

        colors[parent] = colors[oldParent];
        return true;
    } else {
        return false;
    }
}

function connect(row, col) {
    if(grid[row][col]) return;
    grid[row][col] = 1;

    const didUnion = doAdjacentUnion(row, col, row + 1, col) | doAdjacentUnion(row, col, row, col + 1) | doAdjacentUnion(row, col, row - 1, col) | doAdjacentUnion(row, col, row, col - 1);

    if (!didUnion) {
        colors[find(coordToSite(row, col))] = randomHexColor();
    }

    cacheValidity = false;
}

function randomHexColor() {
    return "#" + itoh(random(255) + 1) + itoh(random(255) + 1) + itoh(random(255) + 1);
}

function itoh(i) {
    i = floor(i)
    let str = "";

    while (i > 0) {
        str = hex[(i % 16)] + str;
        i = floor(i / 16);
    }

    return str.padStart(2, '0');
}