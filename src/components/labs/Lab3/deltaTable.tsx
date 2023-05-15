import {TMathFunction} from "./utils"
import {range} from "../../utils/utils"
import getDelta from "./utils/getDelta"
import NumberInput from "../../utils/customInput/numberInput"
import {useState} from "react"
import {a, b} from "./utils/getIntervalData"

interface IParams {
    mathFunction: TMathFunction,
    nodeCount: number,
}

function DeltaTable({ mathFunction, nodeCount }: IParams) {
    const [x, setX] = useState<number>(1)
    const tableValues = range(1, nodeCount).map((node) => getDelta({mathFunction, nodeCount: node, x}))

    return (<>
        <NumberInput placeholder={"X"} className={"classicInput w-25"} onChange={setX} min={a} max={b} />
        <table style = {{width: '100%'}}>
            <thead>
            <tr>
                <th>n</th>
                <th>Δn</th>
                <th>ΔExact</th>
                <th>k</th>
            </tr>
            </thead>
        <tbody>
        {tableValues.map(([n, delta, deltaExact, k]) => {
            return (<tr>
                <td>{n}</td>
                <td>{delta}</td>
                <td>{deltaExact}</td>
                <td>{(isNaN(k) || k === Infinity) ? "-" : k}</td>
            </tr>)
        })}
        </tbody>
    </table>
    </>)
}

export default DeltaTable