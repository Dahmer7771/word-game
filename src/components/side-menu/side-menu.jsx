import React from "react";
import "./side-menu.css";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { connect } from "react-redux";
import {
    Link,
} from "react-router-dom";
import { hideMenu } from "../../actions";
import sideMenuMuiStyles from "./side-menu-mui-styles";

const SideMenu = ({ isMenuOpen, toHideMenu }) => {
    const classes = sideMenuMuiStyles();
    const theme = useTheme();

    return (
        <div>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={isMenuOpen}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={toHideMenu}>
                        {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <div className="custom-link__wrapper">
                        <Link to="/">
                            <ListItem button>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItem>
                        </Link>
                    </div>
                    <div className="custom-link__wrapper">
                        <Link to="/play">
                            <ListItem button>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Play" />
                            </ListItem>
                        </Link>
                    </div>
                </List>
            </Drawer>
        </div>
    );
};

const mapStateToProps = ({ isMenuOpen }) => ({
    isMenuOpen,
});

const mapDispatchToProps = {
    toHideMenu: hideMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
