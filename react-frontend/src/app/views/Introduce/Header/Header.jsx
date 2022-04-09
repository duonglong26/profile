import React, { memo, useState, useEffect } from "react";
import styles from './_header.module.scss';
import { Link } from "react-router-dom";
import { ROOT_PATH } from "../../../../Const";
import { toast } from 'react-toastify';
import { ThemeContext } from '../ProfileManagement/ProfileManagement';
import { AiOutlineBars } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

toast.configure({
    autoClose: 3000,
    draggable: false,
    limit: 3,
    style: {
        fontSize: '1.5rem'
    }
});
function Header() {
    const [isLogin, setIslogin] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('access_token')) {
            setIslogin(true);
        }
    }, [])

    const handleLogout = () => {
        console.log("Logout...")
        localStorage.removeItem("access_token")
        toast.success("Logged out");
    }

    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <div className={styles.title}>
                        <Link
                            className={styles.link}
                            to={ROOT_PATH + "/"}
                        >
                            MY PROFILE
                        </Link>
                    </div>
                    <div className={styles.containerLogInOut}>
                        {!isLogin &&
                            <Link
                                className={styles.link}
                                to={ROOT_PATH + "/login"}
                            >
                                Login
                            </Link>
                        }
                        {isLogin &&
                            <a
                                href="/"
                                className={styles.link}
                                onClick={() => handleLogout()}
                            >
                                Logout
                            </a>
                        }
                    </div>
                    <label htmlFor={styles.nav_input_mb}>
                        <AiOutlineBars className={styles.navbar} />
                    </label>

                   

                    <nav className={styles.nav_mb}>
                        <ul className={styles.listItem_mb}>
                            <div>
                                <FaTimes className={styles.exit} />
                            </div>
                            <li className={styles.item_mb}>
                                <a href="#home" className={styles.link_mb}>
                                    Home
                                </a>
                            </li>
                            <li className={styles.item_mb}>
                                <a href="#about-me" className={styles.link_mb}>
                                    About me
                                </a>
                            </li>
                            <li className={styles.item_mb}>
                                <a href="#education" className={styles.link_mb}>
                                    Education
                                </a>
                            </li>
                            <li className={styles.item_mb}>
                                <a href="#skills" className={styles.link_mb}>
                                    Skills
                                </a>
                            </li>
                            <li className={styles.item_mb}>
                                <a href="#experience" className={styles.link_mb}>
                                    Experience
                                </a>
                            </li>
                            <li className={styles.item_mb}>
                                <a href="#contact" className={styles.link_mb}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </nav>
            </header>
        </>
    );
}

export default memo(Header)