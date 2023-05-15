import {range} from "../../utils/utils"
import Decimal from "decimal.js"

const gaussianEliminationMethod = (inputMatrix: number[][]): number[] => {
    const matrix = [...inputMatrix]
    for(let i = 0; i < matrix.length - 1; i++) {
        for(let j = i + 1; j < matrix.length; j++) {
            const ratio = new Decimal(matrix[j][i]).div(matrix[i][i]).toNumber()
            matrix[j] = matrix[j].map((value, index) => new Decimal(value).minus(new Decimal(ratio).times(matrix[i][index])).toNumber())
        }
    }
    let answers: number[] = []
    for(let i = 0; i < matrix.length; i++) {
        const j = matrix.length - 1 - i
        let sum = 0;
        for(let k = 0; k < i; k++) sum += matrix[j][matrix.length - 1 - k] * answers[k]
        console.log(matrix[j][matrix.length], sum, matrix[j][j])
        answers[i] = new Decimal(matrix[j][matrix.length] - sum).div(matrix[j][j]).toNumber()
    }
    return answers
}

const isValidMatrix = (matrix: string[][], size: number): boolean => {
    for(const y in range(0, size - 1)) {
        const row = matrix[y]
        if(!row) return false
        for(const x in range(0, size)) if(isNaN(Number(matrix[y][x]))) return false
    }
    return true
}

const matrixToNumbered = (matrix: string[][]): number[][] => {
    return matrix.map(row => row.map(value => Number(value)))
}

export {gaussianEliminationMethod, isValidMatrix, matrixToNumbered}