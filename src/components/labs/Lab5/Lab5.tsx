import {gaussianEliminationMethod, isValidMatrix, matrixToNumbered} from "./utils"
import Resizable from "./resizableMatrix/resizable"
import {determinant} from "./determinant"
import {useState} from "react"
import variantImage from "../../../images/matrixvariant.png"
import "../utils.scss"

function Lab5() {
    const [error, setError] = useState<string | null>(null)
    const [answers, setAnswers] = useState<number[]>([])

    const onMatrixChanged = (matrix: string[][], size: number) => {
        if(!isValidMatrix(matrix, size)) return setError("Матриця має містити якісь числа більше нуля")
        const adaptedMatrix = matrixToNumbered(matrix)
        if(determinant(adaptedMatrix.map(row => row.slice(0, adaptedMatrix.length))) === 0) return setError("det  = 0, розв'язків нема")
        setAnswers(gaussianEliminationMethod(adaptedMatrix))
        setError(null)

    }

    return (<div className={"labContainer gap-2"}>
        <Resizable onMatrixChanged={onMatrixChanged} />
        <div className={"d-flex flex-row gap-3 py-4"}>
            {error ?
                <span style={{color: "red"}}>{error}</span>
                :
                answers.slice().reverse().map((answer, index) => <span key={index}>x{index+1} = {answer}</span>)}
        </div>
        <img alt={""} src={variantImage}/>
    </div>)
}

export default Lab5