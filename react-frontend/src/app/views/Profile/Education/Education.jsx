import React, { memo, useState, useEffect, useContext } from "react";
import styles from './_education.module.scss';
import { ThemeContext } from '../UserProfile';

function Education() {
    const providerValue = useContext(ThemeContext);
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        if (providerValue?.profile) {
            setProfile(providerValue.profile);
        }
    })

    return (
        <div className={styles.educations} id='education'>
            <p className={styles.title}>Education</p>
            <div className={styles.schools}>
                {profile?.educationList.map((school) => (
                    <div
                        className={styles.school}
                        key={school.id}
                    >
                        {console.log(school)}
                        <p className={styles.name}>
                            {school?.schoolName}
                        </p>
                        <p className={styles.specialized}>
                            <span>Major: </span>
                            {school?.major}
                        </p>
                        <p className={styles.course}>
                            <span>Course: </span>
                            {school?.course}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default memo(Education)