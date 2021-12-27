'use strict';

const max = (matrix) => {
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const item = matrix[i];
      if (item[j] > max)
        max = item[j];
    }
  }
  return max;
};

module.exports = { max };
