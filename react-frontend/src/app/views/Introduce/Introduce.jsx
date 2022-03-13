import React, { memo } from "react";
import Header from './Header/Header';
import OurTeam from "./OurTeam/OurTeam";

function Introduce() {

    return (
        <>
            <Header />
            <OurTeam />
        </>
    );
}

export default memo(Introduce)