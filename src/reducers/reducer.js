const initState = {
    isMenuOpen: false,
    currentWord: null,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
    case "SHOW_MENU":
        return {
            ...state,
            isMenuOpen: true,
        };
    case "HIDE_MENU":
        return {
            ...state,
            isMenuOpen: false,
        };
    case "FETCH_RANDOM_WORD_REQUEST":
        console.log("FETCH_WORDS_REQUEST");
        return {
            ...state,
            currentWord: action.payload,
        };
    case "FETCH_RANDOM_WORD_SUCCESS":
        console.log("FETCH_WORDS_SUCCESS");
        console.log(action.payload);
        return {
            ...state,
            currentWord: action.payload,
        };
    case "FETCH_RANDOM_WORD_FAILURE":
        console.log("FETCH_WORDS_FAILURE");
        return {
            ...state,
            currentWord: action.payload,
        };
    default:
        return state;
    }
};

export default reducer;
