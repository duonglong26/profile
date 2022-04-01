import React, { memo } from "react";
import { Link } from "react-router-dom";
import { ROOT_PATH } from "../../../../Const";
import styles from "./_footer.module.scss"
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineBehance } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { FaSkype } from "react-icons/fa";


function Footer() {
    return (

        <footer className={styles.footer}>
            <div className={styles.title}>
                MY PROFILE
            </div>
            <div className={styles.iconContainer}>
               
                    <AiFillFacebook className={styles.icon}></AiFillFacebook>
                    <AiFillTwitterCircle className={styles.icon}></AiFillTwitterCircle>
                    <AiOutlineInstagram className={styles.icon}></AiOutlineInstagram>
                    <AiOutlineBehance className={styles.icon}></AiOutlineBehance>
                    <AiOutlineCodepen className={styles.icon}></AiOutlineCodepen>
                    <BsMessenger className={styles.icon}></BsMessenger>
                    <GoMarkGithub className={styles.icon}></GoMarkGithub>
                    <FaSkype className={styles.icon}></FaSkype>
                    
                </div>
            <div className={styles.subtitle}>
            Copyright 2022
            </div>



        </footer>

    )
}
export default Footer