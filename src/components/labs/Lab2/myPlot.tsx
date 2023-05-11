import ScaledPlot from "../../utils/ScaledPlot"

interface IParams {
    x: number[],
    y: number[],
    title: string
}

function MyPlot({x, y, title}: IParams) {
    return <ScaledPlot data={[{x, y, mode: 'lines', marker: {color: 'yellow'}}]} title={title} />
}

export default MyPlot