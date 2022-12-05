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
  if(n===input) {
    console.log(x+y);
    process.exit();
  }
  n++;
}

var n = 1;
var x = null,
    y = null;

var size = Math.ceil(Math.sqrt(input));
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