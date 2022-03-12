import React, { memo } from 'react';
import styles from './_experience.module.scss'

function Experience() {
    return (
        <div className={styles.experience}>
            <p className={styles.title}>Experience</p>
            <div className={styles.products}>
                <div className={styles.product}>
                    <div className={styles.image}>
                        <img></img>
                    </div>
                    <div className={styles.name}>
                        EQA EPT
                    </div>
                    <div className={styles.description}>
                        "Website quản lý chương trình ngoại kiểm phòng chống lao quốc gia"
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Experience)