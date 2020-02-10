const showMenu = () => ({
    type: "SHOW_MENU",
});

const hideMenu = () => ({
    type: "HIDE_MENU",
});

const wordRequested = () => ({
    type: "FETCH_RANDOM_WORD_REQUEST",
});

const wordLoaded = (word) => ({
    type: "FETCH_RANDOM_WORD_SUCCESS",
    payload: word,
});

const wordError = (error) => ({
    type: "FETCH_RANDOM_WORD_FAILURE",
    payload: error,
});

const fetchWords = (wordGameService) => () => (dispatch) => {
    dispatch(wordRequested());
    wordGameService.getRandomWord()
        .then((res) => res.json())
        .then((data) => dispatch(wordLoaded(data)))
        .catch((err) => dispatch(wordError(err)));
};

export {
    showMenu,
    hideMenu,
    fetchWords,
};
