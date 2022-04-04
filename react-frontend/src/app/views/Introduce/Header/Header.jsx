import React, { memo, useState, useEffect } from "react";
import styles from './_header.module.scss';
import { Link } from "react-router-dom";
import { ROOT_PATH } from "../../../../Constraint";
import { toast } from 'react-toastify';
import { ThemeContext } from '../ProfileManagement/ProfileManagement';

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
                </nav>
            </header>
        </>
    );
}

export default memo(Header)