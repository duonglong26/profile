/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useState, useEffect, useContext } from "react";
import styles from './_home.module.scss';
import { ThemeContext } from '../UserProfile';


function Home() {
    const providerValue = useContext(ThemeContext);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        if (providerValue?.profile) {
            setProfile(providerValue.profile);
        }
    })


    return (
        <div className={styles.home} id='home'>
            <div className={styles.content}>
                <span className={styles.welcome}>
                    Hello, my name is
                </span>
                <span className={styles.userName}>
                    {profile?.personalInformation?.firstName + " "+ profile?.personalInformation?.lastName}
                </span>
                <span className={styles.introductionUser}>
                    {profile?.introduce?.sentenceWelcome}
                </span>
                <div className={styles.box}>
                    <a 
                        className={styles.btn}
                        href="#contact"
                    >
                        Contact us
                    </a>
                </div>
            </div>

        </div>

    );
}

export default memo(Home)