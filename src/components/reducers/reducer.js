const initState = {
    isMenuOpen: false,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
    case "SHOW_MENU":
        return {
            isMenuOpen: true,
        };
    case "HIDE_MENU":
        return {
            isMenuOpen: false,
        };
    default:
        return state;
    }
};

export default reducer;
