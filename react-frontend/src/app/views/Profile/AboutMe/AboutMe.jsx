import React, { memo } from "react";
import styles from "./_about-me.module.scss";

function AboutMe() {

    return (
        <>
            {/* Thông tin cá nhân, nghề nghiệp */}
            <div className={styles.aboutMe}>
                <div className={styles.info}>
                    <div className={styles.content}>
                        <h2 className={styles.name}>
                            I'm Ryan Thompson
                        </h2>
                        <h3 className={styles.task}>
                            I'm a Lead UX & UI designer based in Canada
                        </h3>
                        <p className={styles.description}>
                            I design and develop services for customers of all sizes, specializing in creating stylish,
                            modern websites, web services and online stores.

                            My passion is to design digital user experiences through the bold interface and meaningful
                            interactions. Check out my PORTFOLIO
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
            <div className={styles.couterRow}>
                <div className={styles.counterBox}>

                </div>
            </div>
        </>
    );
}

export default memo(AboutMe)