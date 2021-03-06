
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if(!matrix) return [];
	
	let result = [];
	
	for(let i = 0; i < matrix.length; i++) {
		if(i == 0 || i % 2 == 0) {
			matrix[i].sort((a, b) => a - b);
		} else {
			matrix[i].sort((a, b) => b - a);
		}	
	matrix[i].forEach(item => result.push(item));
	}
	
  return result;
}
