import NumberInput from "../../utils/customInput/numberInput"
import {TMathFunction} from "./utils"
import {useMemo, useState} from "react"
import usePlotPolynomial from "./utils/usePlotPolynomial"
import DeltaTable from "./deltaTable"
import "../../../styles/inputs.scss"
import DeltaPlot from "./utils/deltaPlot"
import getXList from "./utils/getX"

const MAX_NODE_COUNT = 19
const MATH_FUNCTION : TMathFunction = (x : number) => x * Math.cos(x + Math.log(1+x))
const PLOT_X_COUNT = 1000

const SIN_TEXT = "sin(x)"
const MAIN_FUNCTION_TEXT = "x * cos(x+ln(1+x))"

function Lab3() {
    const [nodeCount, setNodeCount] = useState<number>(MAX_NODE_COUNT)
    const X_LIST = getXList(nodeCount)

    const plotXList = useMemo(() => getXList(PLOT_X_COUNT), [])
    const plot = usePlotPolynomial({ mathFunction: MATH_FUNCTION, xList: X_LIST, plotXList, name: MAIN_FUNCTION_TEXT })
    const sinusPlot = usePlotPolynomial({ mathFunction: Math.sin, xList: X_LIST, plotXList, name: SIN_TEXT })

    const deltaNodeCount = Math.min(nodeCount, MAX_NODE_COUNT - 1)

    return (<div className={"labContainer"}>
        <div className={"d-flex flex-column align-items-center"}>
            <NumberInput className={"classicInput input-1x1"} onChange={setNodeCount} min={1} max={MAX_NODE_COUNT}/>
            Кількість вузлів
            {sinusPlot}
            {plot}
            <DeltaPlot plotXList={plotXList} mathFunction={MATH_FUNCTION} nodeCount={deltaNodeCount}/>
            <DeltaTable mathFunction={MATH_FUNCTION} nodeCount={deltaNodeCount} />
        </div>
    </div>)
}

export default Lab3