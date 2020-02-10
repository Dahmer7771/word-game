import React from "react";
import {
    Container,
} from "@material-ui/core";
import {
    Switch,
    Route,
} from "react-router-dom";
import GameInput from "../game-input/game-input";

const MainSection = () => (
    <div className="main">
        <Container maxWidth="xl">
            <Switch>
                <Route path="/play" component={GameInput} />
            </Switch>
        </Container>
    </div>
);

export default MainSection;
