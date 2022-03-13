import React, { memo } from "react";
import styles from './_education.module.scss';

const schools = [
    {
        id: 1,
        name: "Viet Nam - Ba Lan High School",
        course: "2017-2020",
        specialized: "None"
    },
    {
        id: 2,
        name: "Thuy Loi University",
        course: "2020-2024",
        specialized: "Information Technology"
    }
]

function Education() {

    return (
        <div className={styles.educations} id='education'>
            <p className={styles.title}>Education</p>
            <div className={styles.schools}>
                {schools.map((school) => (
                    <div
                        className={styles.school}
                        key={school.id}
                    >
                        <p className={styles.name}>
                            {school?.name}
                        </p>
                        <p className={styles.specialized}>
                            <span>Specialized: </span>
                            {school?.specialized}
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