"use strict";

const input = 265149;

const direction = {
  right: function(times) {
    for(let i = 0; i < times; ++i) {
      setPoint();
      x++;
    }
  },
  up: function(times) {
    for(let i = 0; i < times; ++i) {
      setPoint();
      y++;
    }
  },
  left: function(times) {
    for(let i = 0; i < times; ++i) {
      setPoint();
      x--;
    }
  },
  down: function(times) {
    for(let i = 0; i < times; ++i) {
      setPoint();
      y--;
    }
  },
};

const setPoint = function() {
  var result = 0;
  for(let i = x-1; i<=x+1; ++i) {
    for(let j = y-1; j<=y+1; ++j) {
      if(grid[i] && grid[i][j]) {
        result += grid[i][j];
      }
    }
  }
  if(n==1) {
    result = 1;
  }
  if(result>input) {
    console.log(result); 
    process.exit();
  }
  grid[x][y] = result;
  n++;
}

var grid = [];
var n = 1;
var x = null,
    y = null;

var size = Math.ceil(Math.sqrt(input));
for (let i = 0; i < size; ++i) {
  grid[i] = [];
}
if (size % 2 === 0) {
  x = size / 2 - 1;
  y = size / 2 - 1;
} else {
  x = Math.floor(size / 2);
  y = Math.floor(size / 2);
}
for (let i = 1; i < size; ++i) {
  if (i % 2 === 1) {
    direction.up(i);
    direction.right(i);
  } else {
    direction.down(i);
    direction.left(i);
  }
}
if (size % 2 === 1) {
  direction.up(size);
} else {
  direction.down(size);
}