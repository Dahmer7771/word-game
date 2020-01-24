import React from "react";
import "./app.css";
import {
    CssBaseline,
} from "@material-ui/core";
import Header from "../header/header";
import Aside from "../side-menu/side-menu";
import MainSection from "../main-section/main-section";

function App() {
    return (
        <div className="app">
            <CssBaseline />
            <Header />
            <MainSection>
                <Aside />
            </MainSection>
        </div>
    );
}

export default App;
