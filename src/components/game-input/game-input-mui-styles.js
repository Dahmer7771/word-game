import { makeStyles } from "@material-ui/core/styles";

const gameInputMuiStyles = makeStyles(() => ({
    root: {
        display: "block",
        marginTop: "10px",
        marginBottom: "10px",
    },
    align: {
        marginLeft: "auto",
        marginRight: "auto",
    },
    gameHeader: {
        margin: "10px auto",
    },
}));

export default gameInputMuiStyles;
