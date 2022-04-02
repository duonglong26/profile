import React, { memo, useState, useEffect, useContext } from "react";
import styles from "./_about-me.module.scss";
import { ThemeContext } from '../UserProfile';

function AboutMe() {
    const providerValue = useContext(ThemeContext);
    const [profile, setProfile] = useState(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (providerValue?.profile) {
            setProfile(providerValue.profile);
        }
    })


    return (
        <>
            {/* Thông tin cá nhân, nghề nghiệp */}
            <div className={styles.aboutMe} id='about-me'>
                <div className={styles.info}>
                    <div className={styles.content}>
                        <h2 className={styles.name}>
                            {profile?.introduce?.titleAboutMe}
                        </h2>
                        <p className={styles.task}>
                            {profile?.introduce?.task}
                        </p>
                        <p className={styles.description}>
                            {profile?.introduce?.descriptionTask}
                        </p>
                        <div className={styles.box}>
                            <a
                                className={styles.btn}
                                href="#contact"
                            >
                                Contact us
                            </a>
                        </div>
                    </div>
                    <div className={styles.image}>

                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(AboutMe)