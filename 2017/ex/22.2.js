const fs = require("fs");

const input = fs
  .readFileSync("22.txt", "utf8")
  .split("\n")
  .map(row => row.split("").map(v => (v === "#" ? 1 : 0)));

const LEFT = 0;
const UP = 1;
const RIGHT = 2;
const DOWN = 3;
let dir = UP;

let grid = [];
const SIZE = 1000;
const mid = SIZE / 2;
const puzzleSize = input[0].length;
const s = mid - Math.floor(puzzleSize / 2);

console.log("init..");
for (let y = 0; y < SIZE; y++) {
  grid[y] = [];
  for (let x = 0; x < SIZE; x++) {
    grid[y][x] = 0;
    if (x >= s && x < s + puzzleSize) {
      if (y >= s && y < s + puzzleSize) {
        grid[y][x] = input[y - s][x - s];
      }
    }
  }
}

const CLEAN = 0;
const INFECTED = 1;
const FLAGGED = 2;
const WEAKENED = 3;
console.log("run..");
let x = SIZE / 2;
let y = SIZE / 2;
let infectCount = 0;
function step() {
  if (grid[y][x] === INFECTED) {
    grid[y][x] = FLAGGED;
    switch (dir) {
      case RIGHT:
        dir = DOWN;
        break;
      case DOWN:
        dir = LEFT;
        break;
      case LEFT:
        dir = UP;
        break;
      case UP:
        dir = RIGHT;
        break;
    }
  } else if (grid[y][x] === CLEAN) {
    grid[y][x] = WEAKENED;

    switch (dir) {
      case RIGHT:
        dir = UP;
        break;
      case DOWN:
        dir = RIGHT;
        break;
      case LEFT:
        dir = DOWN;
        break;
      case UP:
        dir = LEFT;
        break;
    }
  } else if (grid[y][x] === WEAKENED) {
    infectCount++;
    grid[y][x] = INFECTED;
  } else if (grid[y][x] === FLAGGED) {
    grid[y][x] = CLEAN;
    switch (dir) {
      case RIGHT:
        dir = LEFT;
        break;
      case LEFT:
        dir = RIGHT;
        break;
      case UP:
        dir = DOWN;
        break;
      case DOWN:
        dir = UP;
        break;
    }
  }

  switch (dir) {
    case UP:
      y--;
      break;
    case DOWN:
      y++;
      break;
    case LEFT:
      x--;
      break;
    case RIGHT:
      x++;
      break;
  }
}

for (let i = 0; i < 10000000; i++) {
  step();
}

console.log(infectCount);