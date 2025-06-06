import {Route, Router} from "@solidjs/router";
import {Home} from "./pages/Home.jsx";
import {Create} from "./pages/Create.jsx";

export const App = () => {
    return (
        <Router>
            <Route path={"/"} component={Home} />
            <Route path={"/create"} component={Create} />
        </Router>
    )
}

// e57e38
// f8ebd6