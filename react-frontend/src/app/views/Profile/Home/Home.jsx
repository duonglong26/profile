import React, { memo, useState, useEffect, useContext } from "react";
import styles from './_home.module.scss';
import { Link } from "react-router-dom";
import { ThemeContext } from '../UserProfile';


function Home() {
    const providerValue = useContext(ThemeContext);
    const [isOpenHomeDialog, setIsOpenHomeDialog] = useState(false);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        if (providerValue?.profile) {
            setProfile(providerValue.profile);
        }
    })

    console.log(profile)

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