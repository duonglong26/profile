import React, { memo, useState, useEffect, useContext } from "react";
import styles from "./_about-me.module.scss";
import { ThemeContext } from '../UserProfile';
import { urlGetImage } from '../../Profile/UserProfileService'

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
                    <div className={styles.boxImage}>
                        {profile?.id &&
                            // eslint-disable-next-line jsx-a11y/img-redundant-alt
                            <img
                                src={
                                    urlGetImage(profile?.id)
                                }
                                alt="picture-of-myself"
                                className={styles.image}
                            />
                        }
                    </div>
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
                </div>
            </div>
        </>
    );
}

export default memo(AboutMe)