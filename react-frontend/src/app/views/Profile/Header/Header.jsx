import React, { memo } from "react";
import styles from "./_header.module.scss";
import { Link } from "react-router-dom";
import { ROOT_PATH } from "../../../../Constraint";
import { AiOutlineBars } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

function Header() {
  const handleShowNav = () => {
      console.log("Click...");
  };
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.title}>
          <Link className={styles.link} to={ROOT_PATH + "/"}>
            My profile
          </Link>
        </div>
        <ul className={styles.listItem}>
          <li className={styles.item}>
            <a href="#home" className={styles.link}>
              Home
            </a>
          </li>
          <li className={styles.item}>
            <a href="#about-me" className={styles.link}>
              About me
            </a>
          </li>
          <li className={styles.item}>
            <a href="#education" className={styles.link}>
              Education
            </a>
          </li>
          <li className={styles.item}>
            <a href="#skills" className={styles.link}>
              Skills
            </a>
          </li>
          <li className={styles.item}>
            <a href="#experience" className={styles.link}>
              Experience
            </a>
          </li>
          <li className={styles.item}>
            <a href="#contact" className={styles.link}>
              Contact
            </a>
          </li>
        </ul>
        <label htmlFor={styles.nav_input_mb}>
          <AiOutlineBars className={styles.navbar} />
        </label>

        <div onClick={() => handleShowNav()} className={styles.overlay}></div>

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
  );
}

export default memo(Header);
