import React, { memo } from "react";
import styles from "./_user-profile.module.scss";
import Header from './Header/Header';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import Education from './Education/Education';

function Introduce() {

    return (
        <>
            <Header />
            <div className={styles.container}>
                <Home />
                <AboutMe />
                <Education />
            </div>
        </>
    );
}

export default memo(Introduce)