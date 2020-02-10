import React from "react";
import { connect } from "react-redux";
import {
    Container,
    AppBar,
    IconButton,
    Typography,
    Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { showMenu } from "../../actions";
import headerMuiTheme from "./header-mui-styles";

const Header = ({ isMenuOpen, toShowMenu }) => {
    const classes = headerMuiTheme();

    return (
        <AppBar position="sticky" className={classes.root}>
            <Container maxWidth="xl">
                <div className={classes.customToolBar}>
                    <IconButton
                        className={clsx(classes.menuButton, isMenuOpen && classes.hide)}
                        onClick={toShowMenu}
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                            Word Game
                    </Typography>
                    <Button color="inherit">Login</Button>
                </div>
            </Container>
        </AppBar>
    );
};

const mapStateToProps = ({ isMenuOpen }) => ({
    isMenuOpen,
});

const mapDispatchToProps = {
    toShowMenu: showMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
