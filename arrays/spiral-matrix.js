const spiralMatrix = (matrix) => {

  let top = 0,
    left = 0,
    bottom = matrix.length - 1,
    right = matrix[0].length - 1,
    result = [];
  while (top <= bottom && left <= right) {
    for (var i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    for (var i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (var i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (var i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
};
console.log(
  spiralMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
