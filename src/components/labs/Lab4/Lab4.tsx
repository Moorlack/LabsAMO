import NumberInput from "../../utils/customInput/numberInput"
import ScaledPlot from "../../utils/ScaledPlot"
import {rangeWithStep} from "../../utils/utils"
import {TMathFunction} from "../Lab3/utils"
import {useEffect, useState} from "react"
import "../../../styles/inputs.scss"
import {Data} from "plotly.js";

const mathFunction: TMathFunction = (x) => x ** 3 + 2 * x - 4

const mathFunctionString = "x^3+2x-4"
const mathFunctionAnswer = [1.17950902]
const graphicDotsCount = 1000

const method = (f: TMathFunction, a: number, b: number, e: number): [number, number] => {
    if(a === b || e === 0) throw new Error("Невірні значення проміжку або точності")
    if(f(a) * f(b) >= 0) throw new Error("Функція не є монотонною або не мах коренів на даному проміжку")
    let c = a;
    let i = 0;
    while ((b - a) >= e) {
        i++;
        c = (a + b) / 2;

        if (f(c) === 0) {
            break;
        }
        else if (f(c) * f(a) < 0) {
            b = c;
        } else {
            a = c;
        }
    }
    return [c, i];
}

function Lab4() {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)
    const [accuracy, setAccuracy] = useState<number>(0.1)
    const [answer, setAnswer] = useState<number>()
    const [error, setError] = useState<string | null>()
    const [iterationsCount, setIterationsCount] = useState<number>()

    useEffect(() => {
        let x, iterationsCount: number
        try {
            [x, iterationsCount] = method(mathFunction, a, b, accuracy)
        } catch (error) {
            setError((error as Error).message)
            return
        }
        setError(null)
        setIterationsCount(iterationsCount)
        setAnswer(x)
    }, [a, accuracy, b])

    const plotX = rangeWithStep(a, b, (b - a) / graphicDotsCount)
    let plotData: Data[] = [
        { x: plotX, y: plotX.map(mathFunction), name: "Графік функції", marker: {color: 'yellow'}},
        { x: mathFunctionAnswer, y: mathFunctionAnswer.map(mathFunction), name: "Корінь", marker: {color: 'green'}},
    ]
    if(answer) plotData = [...plotData, { x: [answer], y: [mathFunction(answer),], name: "Наближене", marker: {color: 'red'}}]

    return (<div className={"labContainer"}>
        <div className={"py-4 text-center"}>
            <h4>Функція: {mathFunctionString}</h4>
            <h4>Корінь рівняння: {mathFunctionAnswer.join(", ")}</h4>
        </div>
        <div className={"d-flex flex-column align-items-center gap-3"}>
            <div className={"d-flex gap-1 align-items-center"}>
                Відрізок:[<NumberInput className={"classicInput input-1x1"} placeholder={"a"} onChange={setA} />,
                <NumberInput className={"classicInput input-1x1"} placeholder={"b"} onChange={setB} />]
            </div>
            Точність:<NumberInput className={"classicInput"} onChange={setAccuracy} />
            {error ? <span style={{color: "red"}}>{error}</span> : <span>Знайдене x = {answer}, Ітерацій: {iterationsCount}</span>}
        </div>
        <ScaledPlot data={plotData} title={"Функція на проміжку [a,b]"}/>
    </div>)
}

export default Lab4