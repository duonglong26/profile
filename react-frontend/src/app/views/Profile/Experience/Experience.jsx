import React, { memo, useState, useEffect, useContext } from "react";
import styles from './_experience.module.scss'
import { ThemeContext } from '../UserProfile';

function Experience() {
    const providerValue = useContext(ThemeContext);
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        if (providerValue?.profile) {
            setProfile(providerValue.profile);
        }
    })

    console.log(profile?.projectList)

    return (
        <div className={styles.experience} id='experience'>
            <p className={styles.title}>Experience</p>
            <   div 
                    className={styles.products}
                >
                    {profile?.projectList.map((project, index) => (
                        <div className={styles.product} key={index}>
                            <div className={styles.name}>
                                {project?.name}
                            </div>
                            <div className={styles.description}>
                                {project?.participationProcess}
                                <br/>
                                {project?.description}
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default memo(Experience)