import Matrix from "./matrix"
import {useEffect, useState} from "react"
import NumberInput from "../../../utils/customInput/numberInput"
import useCurrentCallback from "../../../../hooks/useCurrentCallback"
import "../../../../styles/inputs.scss"

interface IParams {
    onMatrixChanged: (matrix: string[][], size: number) => any
}

function Resizable({onMatrixChanged}: IParams) {
    const [size, setSize] = useState<number>(3)
    const [matrix, setMatrix] = useState<string[][]>([])
    const onMatrixChangedRef = useCurrentCallback(onMatrixChanged)

    useEffect(() => setMatrix(oldValues => {
        const newValues = oldValues.slice(0, size)
        return newValues.map(row => row.slice(0, size + 1))
    }), [size])

    useEffect(() => onMatrixChangedRef.current(matrix, size), [matrix, size, onMatrixChangedRef])

    return (<div className={"d-flex flex-column align-items-center gap-3"}>
        <NumberInput value={size} className={"classicInput input-1x1"} min={1} max={9} onChange={setSize} />
        <small>Розмір матриці</small>
        <Matrix size={size} values={matrix} onChange={setMatrix} />
    </div>)
}

export default Resizable