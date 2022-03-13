import React, { memo } from "react";
import styles from './_home.module.scss';
import { Link } from "react-router-dom";

function Home() {

    return (
        <div className={styles.home} id='home'>
            <div className={styles.content}>
                <span className={styles.welcome}>
                    Hello, my name is
                </span>
                <span className={styles.userName}>
                    Duong Long
                </span>
                <span className={styles.introductionUser}>
                    I'm a Java back-end developer. Now, I'm living in Ha Noi city.
                </span>
                <div className={styles.box}>
                    <button className={styles.btn}>
                        Contact us
                        {/* <i className={styles.}"fa-solid fa-arrow-right"></i> */}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default memo(Home)