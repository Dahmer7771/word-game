import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { connect } from "react-redux";
import { hideMenu } from "../actions";
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
                    {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {["All mail", "Trash", "Spam"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: isMenuOpen,
                })}
            >
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet.
                    Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus
                    id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed
                    adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis.
                    Cursus euismod quis viverra nibh cras.
                    Metus vulputate eu scelerisque felis imperdiet proin
                    fermentum leo. Mauris commodo quis
                    imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget
                    arcu dictum varius duis at consectetur lorem.
                    Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae
                    suscipit. Fringilla est ullamcorper eget nulla
                    facilisi etiam dignissim diam. Pulvinar
                    elementum integer enim neque volutpat ac
                    tincidunt. Ornare suspendisse sed nisi
                    lacus sed viverra tellus. Purus sit amet volutpat
                    consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed
                    vulputate odio. Morbi tincidunt ornare
                    massa eget egestas purus viverra accumsan in. In
                    hendrerit gravida rutrum quisque non tellus
                    orci ac. Pellentesque nec nam aliquam sem et
                    tortor. Habitant morbi tristique senectus et.
                    Adipiscing elit duis tristique sollicitudin
                    nibh sit. Ornare aenean euismod elementum
                    nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere
                    sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </main>
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
