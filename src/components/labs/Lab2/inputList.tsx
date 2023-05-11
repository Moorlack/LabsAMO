import {countExecutionTime, randomArray, range} from "../../utils/utils"
import MultipleNumbersInput from "../../utils/customInput/multipleNumbersInput"
import useFileImport from "../../../hooks/useFileImport"
import IMeasuredByTime from "./IMeasuredByTime"
import useInputList from "../../../hooks/useInputList"
import {simpleInserts} from "../../utils/sorts"
import {useState} from "react"

interface IParams {
    onTimeMeasured: (measurements: IMeasuredByTime[]) => any,
}

function InputList({onTimeMeasured}: IParams) {
    const {values, setValues, arraysCount, setArraysCount, onTyped} = useInputList()
    const [defaultValues, setDefaultValues] = useState<number[][]>([])

    const addArray = () => setArraysCount(arraysCount + 1)
    const removeArray = () => setArraysCount(arraysCount - 1)
    const fillArrays = () => {
        const randomValues = range(0, arraysCount - 1).map((index) => randomArray(1, 99999, 1000 + index * 100))
        setDefaultValues(randomValues)
        setValues(randomValues)
    }

    const startExecutionCount = () => {
        const sortedValues = values.sort((a, b) => a.length - b.length)
        const newMeasurements = sortedValues.map((array) => ({time: countExecutionTime(() => simpleInserts([...array])), n: array.length}))
        onTimeMeasured(newMeasurements)
    }

    const [fileInput, openFile] = useFileImport((file) => {
        const lines = file.replace(/\r/g, "").split("\n")
        if(lines.some((line) => line.split(",").some((value) => isNaN(Number(value)) || value === ""))) return alert("Невірний формат файлу")
        const newValues = lines.map((line) => line.replace(/\s/g, "").split(",").map((value) => Number(value)))
        setArraysCount(newValues.length)
        setDefaultValues(newValues)
        setValues(newValues)
    })

    return (<div className={"d-flex flex-column align-items-center gap-2"}>
        <div className={"d-flex flex-column gap-3 cum"}>
        {range(1, values.length).map((_, index) => {
            return <MultipleNumbersInput key={index}
                                         className={"classicInput"}
                                         placeholder={"Введіть масив чисел"}
                                         onChange={(values) => onTyped(index, values)}
                                         defaultValue={defaultValues[index]}
                />
            })}
        </div>
        <div className={"d-flex gap-1"}>
            {fileInput}
            <button className={"classicButton"} onClick={openFile}>Завантажити файл</button>
            <button className={"classicButton"} onClick={addArray}>+Масив</button>
            <button className={"classicButton"} onClick={removeArray}>-Масив</button>
            <button className={"classicButton"} onClick={fillArrays}>Заповнити рандомними числами</button>
            <button className={"classicButton"} onClick={startExecutionCount}>Показати результати</button>
        </div>
    </div>)
}

export default InputList