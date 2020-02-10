import React, { useEffect } from "react";
import {
    Button,
    FormControl, InputAdornment, InputLabel, OutlinedInput, Typography,
} from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchWords as fetchWordsAction } from "../../actions";
import withYandexDictionary from "../hoc/with-yandex-dictionary";
import withWordGameService from "../hoc/with-word-game-service";
import gameInputMuiStyles from "./game-input-mui-styles";

const GameInput = ({ currentWord, fetchWords }) => {
    const classes = gameInputMuiStyles();

    const updateWord = () => {
        fetchWords();
    };

    useEffect(() => {
        updateWord();
    }, []);

    if (!currentWord) return <div>Wait</div>;

    return (
        <>
            <Typography className={classes.gameHeader} variant="h2" component="h2" align="center">
                {currentWord.title}
            </Typography>
            <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Type translate</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    onChange={() => console.log("CHANGE_INPUT")}
                    startAdornment={<InputAdornment position="start">Word</InputAdornment>}
                    labelWidth={105}
                />
            </FormControl>
            <Button
                className={classes.align}
                classes={{
                    root: classes.root,
                }}
                onClick={updateWord}
                variant="contained"
                color="primary"
            >
                Start
            </Button>
        </>
    );
};

const mapStateToProps = ({ currentWord }) => ({
    currentWord,
});

const mapDispatchToProps = (dispatch, { wordGameService }) => bindActionCreators({
    fetchWords: fetchWordsAction(wordGameService),
}, dispatch);

export default withYandexDictionary()(
    withWordGameService()(
        connect(mapStateToProps, mapDispatchToProps)(GameInput),
    ),
);
