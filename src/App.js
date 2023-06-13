import React from 'react';
import Auth from "./components/Auth";
import {Routes, Route} from "react-router-dom";
import MainPage from "./components/MainPage";
import Cabinet from "./components/Cabinet";

class App extends React.Component {
    render() {
        return (
            <Routes>
                <Route path={"/"}>
                    <Route index element={<MainPage />}/>
                    <Route path={"/auth"} element={<Auth />}/>
                    <Route path={"/auth/:AuthType"} element={<Auth />}/>
                    <Route path={"/auth/:AuthType/:BindType"} element={<Auth />}/>
                </Route>
                <Route path={"/cabinet"}>
                    <Route index element={<Cabinet />}/>
                </Route>
            </Routes>
        )
    }
}

export default App