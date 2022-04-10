import React, { memo, useState, useEffect } from "react";
import styles from './_header.module.scss';
import { Link } from "react-router-dom";
import { ROOT_PATH } from "../../../../Constraint";
import clsx from "clsx";
import {
    CgMenuGridR,
    CgChevronUp
} from "react-icons/cg";

function Header() {
    const [isShowVerticalNav, setIsShowVerticalNav] = useState(false);

    const handleShowVerticalNav = () => {
        setIsShowVerticalNav(!isShowVerticalNav);
    }

    return (
        <header className={styles.header} >
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
                        <a
                            href="#home"
                            className={styles.link}
                        >
                            Home
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a
                            href="#about-me"
                            className={styles.link}
                        >
                            About me
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a
                            href="#education"
                            className={styles.link}
                        >
                            Education
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a
                            href="#skills"
                            className={styles.link}
                        >
                            Skills
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a
                            href="#experience"
                            className={styles.link}
                        >
                            Experience
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a
                            href="#contact"
                            className={styles.link}
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                <CgMenuGridR className={styles.menu} onClick={() => handleShowVerticalNav()} />

                {isShowVerticalNav &&
                    <ul className={clsx(styles.listItemVertical)}>
                        <li className={styles.item}>
                            <a
                                href="#home"
                                className={styles.link}
                                onClick={() => setIsShowVerticalNav(false)}
                            >
                                Home
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a
                                href="#about-me"
                                className={styles.link}
                                onClick={() => setIsShowVerticalNav(false)}
                            >
                                About me
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a
                                href="#education"
                                className={styles.link}
                                onClick={() => setIsShowVerticalNav(false)}
                            >
                                Education
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a
                                href="#skills"
                                className={styles.link}
                                onClick={() => setIsShowVerticalNav(false)}
                            >
                                Skills
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a
                                href="#experience"
                                className={styles.link}
                                onClick={() => setIsShowVerticalNav(false)}
                            >
                                Experience
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a
                                href="#contact"
                                className={styles.link}
                                onClick={() => setIsShowVerticalNav(false)}
                            >
                                Contact
                            </a>
                        </li>
                        <CgChevronUp
                            className={styles.hiddenNavVertical}
                            onClick={() => setIsShowVerticalNav(false)}
                        />
                    </ul>
                }
            </nav>
        </header>
    );
}

export default memo(Header)