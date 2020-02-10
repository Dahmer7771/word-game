import React from "react";
import { WordGameConsumer } from "../word-game-context/word-game-context";

const withWordGameService = () => (Wrapped) => (props) => (
    <WordGameConsumer>
        {
            (wordGameService) => (
                <Wrapped {...props} wordGameService={wordGameService} />
            )
        }
    </WordGameConsumer>
);

export default withWordGameService;
