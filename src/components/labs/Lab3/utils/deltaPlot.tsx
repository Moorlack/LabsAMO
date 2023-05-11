import lagrangePolynomial from "./lagrangePolynomial"
import {TMathFunction} from "../utils"
import ScaledPlot from "../../../utils/ScaledPlot"
import getXList from "./getX"

interface IParams {
    plotXList: number[],
    mathFunction: TMathFunction,
    nodeCount: number
}

function DeltaPlot({ mathFunction, nodeCount, plotXList }: IParams) {
    const [polynomial] = lagrangePolynomial(getXList(nodeCount), mathFunction)
    const [nextPolynomial] = lagrangePolynomial(getXList(nodeCount + 1), mathFunction)
    const deltaFunction = (x: number) => {
        const realX = x
        return Math.abs(polynomial(realX) - nextPolynomial(realX))
    }

    return (<ScaledPlot data={[{
        x: plotXList,
        y: plotXList.map(deltaFunction),
        marker: {color: 'yellow'}
    }]} title={"Похибка |Pn(x) - Pn+1(x)|"} />)
}

export default DeltaPlot