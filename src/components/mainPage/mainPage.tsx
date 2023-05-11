import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "./mainPage.scss"

function MainPage() {
    return (<div className={"w-100 h-100 d-flex flex-column justify-content-center align-items-center text-yellow"}>
        <h1 className={"text-center"}>АМО Лаби</h1>
        <h4 className={"text-center"}>Васютинський Олександр</h4>
        <div className={"d-flex flex-row gap-3 py-3"}>
            <Link to={"/labs/2"} className={"classicButton"}>Лаба 2</Link>
            <Link to={"/labs/3"} className={"classicButton"}>Лаба 3</Link>
            {/*<Link to={"/labs/4"} className={"classicButton"}>Лаба 4</Link>*/}
            {/*<Link to={"/labs/5"} className={"classicButton"}>Лаба 5</Link>*/}
        </div>
    </div>)
}

export default MainPage