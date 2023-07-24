module.exports = function towelSort (matrix) {
    if (!matrix) return [];
    let resultArr = [];

    for (let i = 0; i < matrix.length; i++) {
        if (i%2 === 0) {
            for (let j = 0; j < matrix[i].length; j++) {
                resultArr.push(matrix[i][j]);
            }
        }

        if (i%2 === 1) {
            for (let j = matrix[i].length - 1; j >= 0; j--) {
                resultArr.push(matrix[i][j]);
            }
        }
    }

    return resultArr;
}
