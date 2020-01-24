import React from "react";
import { Container } from "@material-ui/core";

const MainSection = (props) => {
    const { children } = props;

    return (
        <Container maxWidth="xl">
            <div className="main">
                {children}
            </div>
        </Container>
    );
};

export default MainSection;
