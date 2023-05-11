import {Data} from "plotly.js"
import Plot from "react-plotly.js"

interface IParams {
    data: Data[],
    title: string
}

function ScaledPlot({data, title} : IParams) {
    return <Plot
        className={"py-4"}
        data={data}
        layout={{width: 700, height: 300, title, plot_bgcolor: '#313133', paper_bgcolor: '#313133',
            font: {color:'white'}, xaxis:{color: 'white'}, yaxis:{color: 'white'}}}
    />
}

export default ScaledPlot