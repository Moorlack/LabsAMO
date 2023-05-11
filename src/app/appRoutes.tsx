import {Route, Routes} from "react-router-dom"
import MainPage from "../components/mainPage/mainPage"
import ErrorPage from "../components/errorPage/errorPage"
import Lab2 from "../components/labs/Lab2/Lab2"
import Lab3 from "../components/labs/Lab3/Lab3"
// import Lab4 from "../components/labs/Lab4/Lab4"
// import Lab5 from "../components/labs/Lab5/Lab5"

function AppRoutes() {
    return (<Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/labs/2"} element={<Lab2 />} />
        <Route path={"/labs/3"} element={<Lab3 />} />
        {/*<Route path={"/labs/4"} element={<Lab4 />} />*/}
        {/*<Route path={"/labs/5"} element={<Lab5 />} />*/}
        <Route path={"*"} element={<ErrorPage header={"404"} subtext={"Page not found"} />} />
    </Routes>)
}

export default AppRoutes