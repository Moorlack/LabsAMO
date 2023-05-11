import InputList from "./inputList"
import {useState} from "react"
import IMeasuredByTime from "./IMeasuredByTime"
import MyPlot from "./myPlot"
import "../utils.scss"

function Lab2() {
    const [measurements, setMeasurements] = useState<IMeasuredByTime[]>([])

    const nList = measurements.map(({n}) => n)

    return (<div className={"labContainer"}>
        <h3>Сортування простими вставками</h3>
        <InputList onTimeMeasured={setMeasurements} />
        <MyPlot x={nList} y={measurements.map(({time}) => time)} title={"Екпериментальний графік"} />
        <MyPlot x={nList} y={nList.map((value) => value ** 2)} title={"Теоретичний графік"} />
    </div>)
}

export default Lab2