import React, { memo, useState, useEffect, createContext } from "react";
import styles from './_home.module.scss';
import { Link } from "react-router-dom";
import HomeDialog from './HomeDialog';
import { FaPencilAlt } from "react-icons/fa";

export const ThemeContext = createContext();

function Home() {
    const [isLogin, setIsLogin] = useState(false);
    const [isOpenHomeDialog, setIsOpenHomeDialog] = useState(false);

    console.log(localStorage.getItem("access_token"));

    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            setIsLogin(!isLogin);
        }
    }, [])

    const providerValue = {
        isOpenHomeDialog,
        setIsOpenHomeDialog
    };

    return (
        <ThemeContext.Provider value={providerValue}>
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

                {/* Icon open form dialog */}
                {!isOpenHomeDialog && isLogin &&
                    <div
                        className={styles.boxIcon}
                        onClick={() => setIsOpenHomeDialog(!isOpenHomeDialog)}
                    >
                <FaPencilAlt
                    className={styles.iconPen}

                />
            </div>
                }
        </div>

            {/* Open form dialog */ }
    {
        isOpenHomeDialog &&
        <HomeDialog />
    }
        </ThemeContext.Provider >
    );
}

export default memo(Home)