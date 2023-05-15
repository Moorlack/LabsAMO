import {range} from "../../../utils/utils"
import {a, b} from "./getIntervalData"

const getXList = (count: number) => count !==1 ? range(0, count - 1).map((i) => a + (b - a) / (count - 1) * i): [a]

export default getXList