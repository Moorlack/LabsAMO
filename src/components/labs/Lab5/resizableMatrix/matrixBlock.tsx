interface IParams {
    text: string | null,
    onChange: (value: string) => any,
    value?: string
}

function MatrixBlock({text, value, onChange}: IParams) {
    return (<div className={"d-flex align-items-center gap-1"}>
        <input className={"classicInput input-1x1"} value={value} onChange={({target}) => onChange(target.value)} />
        <span style={{width: 50}}>{text}</span>
    </div>)
}

export default MatrixBlock