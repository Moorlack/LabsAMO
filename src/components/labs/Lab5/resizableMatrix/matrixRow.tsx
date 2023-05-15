import {range} from "../../../utils/utils"
import MatrixBlock from "./matrixBlock"

interface IParams {
    column: number,
    length: number,
    values?: string[]
    onChange: (row: string[]) => any
}

function MatrixRow({column, length, values, onChange}: IParams) {

    const getBlockText = (index: number) => "x" + (index + 1)
    const getValue = (index: number) => values ? values[index] || "" : ""

    const onRowChanged = (x: number, value: string) => {
        let newRow = [...(values || [])]
        newRow[x] = value
        onChange(newRow)
    }

    return (<div className={"d-flex gap-3 align-items-center"}>
        {range(0, length - 1).map(x => <MatrixBlock key={x} text={getBlockText(x)} value={getValue(x)} onChange={(val) => onRowChanged(x, val)} />)}
        =
        <MatrixBlock text={null} value={getValue(length)} onChange={(val) => onRowChanged(length, val)} />
    </div>)
}

export default MatrixRow