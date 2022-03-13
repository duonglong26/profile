import React, { memo } from "react";
import styles from './_header.module.scss';
import { Link } from "react-router-dom";
import { ROOT_PATH } from "../../../../Const";

function Header() {

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
                </nav>
            </header>
        </>
    );
}

export default memo(Header)