import React, { memo, useState, useEffect, useContext } from "react";
import styles from "./_about-me.module.scss";
import { ThemeContext } from '../UserProfile';

function AboutMe() {
    const providerValue = useContext(ThemeContext);
    const [profile, setProfile] = useState(null);

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
                        <h3 className={styles.task}>

                        </h3>
                        <p className={styles.description}>
                            {profile?.introduce?.descriptionTask}


                        </p>
                        <div className={styles.box}>
                            <button className={styles.btn}>
                                Contact us
                            </button>
                        </div>
                    </div>
                    <div className={styles.image}>

                    </div>
                </div>
            </div>

            {/* Số liệu, số lượng khách hàng, dự án */}
            {/* <div className={styles.couterRow}>
                <div className={styles.counterBox}>

                </div>
            </div> */}
        </>
    );
}

export default memo(AboutMe)