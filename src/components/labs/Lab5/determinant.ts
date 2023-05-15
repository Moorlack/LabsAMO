function determinant(matrix: number[][]) {
    const n = matrix.length;

    if (n === 1) {
        return matrix[0][0];
    } else {
        let det = 0;
        for (let i = 0; i < n; i++) {
            const cofactor = getCofactor(matrix, 0, i);
            det += matrix[0][i] * determinant(cofactor) * Math.pow(-1, i);
        }
        return det;
    }
}

function getCofactor(matrix: number[][], row: number, col: number) {
    const n = matrix.length;
    const cofactor = [];
    for (let i = 1; i < n; i++) {
        const temp = [];
        for (let j = 0; j < n; j++) {
            if (j !== col) {
                temp.push(matrix[i][j]);
            }
        }
        if (temp.length > 0) {
            cofactor.push(temp);
        }
    }
    return cofactor;
}

export {determinant}