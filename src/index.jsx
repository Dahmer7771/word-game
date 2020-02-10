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
import { YandexDictionaryProvider } from "./components/yandex-dictionary-context/yandex-dictionary-context";
import { WordGameProvider } from "./components/word-game-context/word-game-context";
import YandexDictionary from "./services/yandex-dictionary";
import WordGameService from "./services/word-game-service";
import store from "./store";

const theme = createMuiTheme({
    palette: {
        primary: deepOrange,
        secondary: orange,
    },
});

const yandexDictionary = new YandexDictionary();
const wordGameService = new WordGameService();

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <YandexDictionaryProvider value={yandexDictionary}>
                <WordGameProvider value={wordGameService}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </WordGameProvider>
            </YandexDictionaryProvider>
        </ThemeProvider>
    </Provider>,
    document.getElementById("root"),
);
