import {TMathFunction} from "../utils"
import lagrangePolynomial from "./lagrangePolynomial"
import getXList from "./getX"

interface IParams {
    mathFunction: TMathFunction,
    nodeCount: number,
    x: number
}

function getDelta({ mathFunction, nodeCount, x }: IParams) {
    const [polynomial] = lagrangePolynomial(getXList(nodeCount), mathFunction)
    const [nextPolynomial] = lagrangePolynomial(getXList(nodeCount + 1), mathFunction)

    const deltaN = polynomial(x) - nextPolynomial(x)
    const deltaExact = polynomial(x) - mathFunction(x)
    const deltaK = 1 - (deltaExact / deltaN)
    return [nodeCount, deltaN, deltaExact, deltaK]
}

export default getDelta