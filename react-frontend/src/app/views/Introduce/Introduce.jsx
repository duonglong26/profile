import React, { memo } from "react";
import Header from './Header/Header';
import ProfileManagement from "./ProfileManagement/ProfileManagement";

function Introduce() {

    return (
        <>
            <Header />
            <ProfileManagement />
        </>
    );
}

export default memo(Introduce)