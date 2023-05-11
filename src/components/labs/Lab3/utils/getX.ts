import {range} from "../../../utils/utils"
import {a, b} from "./getIntervalData"

const getXList = (count: number) => range(0, count - 1).map((i) => a + (b - a) / (count - 1) * i)

export default getXList