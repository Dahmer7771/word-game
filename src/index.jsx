import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import {
    createMuiTheme,
    ThemeProvider,
} from "@material-ui/core/styles";
import {
    orange,
    deepOrange,
} from "@material-ui/core/colors";
import App from "./components/app/app";
import store from "./components/store";

const theme = createMuiTheme({
    palette: {
        primary: deepOrange,
        secondary: orange,
    },
});

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
    document.getElementById("root"),
);
