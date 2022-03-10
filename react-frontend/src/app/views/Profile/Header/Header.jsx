import React, { memo } from "react";
import styles from './_header.module.scss';
import { Link } from "react-router-dom";
import { ROOT_PATH } from "../../../../Const";

function Header() {

    return (
        <>
            <header className={styles.header} id="header">
                <nav className={styles.nav}>
                    <div className={styles.title}>
                        <Link
                            className={styles.link}
                            to={ROOT_PATH + "/"}
                        >
                            My profile
                        </Link>
                    </div>
                    <ul className={styles.listItem}>
                        <li className={styles.item}>
                            <Link
                                className={styles.link}
                                to="#"
                            >
                                Home
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link
                                className={styles.link}
                                to="#"
                            >
                                About me
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link
                                className={styles.link}
                                to="#"
                            >
                                Education
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link
                                className={styles.link}
                                to="#"
                            >
                                Skills
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link
                                className={styles.link}
                                to="#"
                            >
                                Experience
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link
                                className={styles.link}
                                to="#"
                            >
                                Contact
                            </Link>
                        </li>
                        <li className={styles.item}>
                            {/* <i className="fa-solid fa-bars-sort"></i>
                            <i className="fa-solid fa-bars-sort"></i> */}
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default memo(Header)