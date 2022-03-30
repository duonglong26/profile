import React, { memo, useContext, useEffect, useState } from 'react'
import styles from './_home.module.scss';
import { ThemeContext } from './Home';
import { FaRegWindowClose } from "react-icons/fa";
import { MdClose } from "react-icons/md";


function HomeDialog() {
    const providerValue = useContext(ThemeContext);
    const [sentenceWelcome, setSentenceWelcome] = useState("");
    // const []

    const handleClose = () => {
        providerValue.setIsOpenHomeDialog(false)
    }

    return (
        <div className={styles.homeDialog}>
            <div className={styles.contentBox}>
                {/* icon close form */}
                <div className={styles.rowBoxClose}>
                    <div
                        className={styles.boxClose}
                        onClick={handleClose}
                    >
                        <MdClose
                            className={styles.iconClose}
                        />
                    </div>
                </div>
                <h2>FORM HOME</h2>
                {/* Sentence welcome */}
                <div className={styles.rowContent}>
                    <h3>Sentence welcome:</h3>
                    <input
                        type="text"
                    />
                </div>
                {/* Introduce user */}
                <div className={styles.rowContent}>
                    <h3>Introduce user:</h3>
                    <input
                        type="text"
                    />
                </div>
                {/* Save */}
                <div>
                    <button
                        type="button"
                    >
                        SEND
                    </button>
                </div>
            </div>
        </div>
    )
}

export default memo(HomeDialog);
