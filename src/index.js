
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) return [];
  return matrix.map((row,i)=> i%2 === 1 ? row.reverse() : row).flat();
}
