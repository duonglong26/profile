import React, { memo, useState, useEffect, useContext } from 'react';
import styles from './_skills.module.scss';
import clsx from 'clsx';
import * as Fa from "react-icons/fa";
import { DiMysql, DiMsqlServer } from "react-icons/di";
import { SiSpringboot } from "react-icons/si";
import { GiTortoise } from "react-icons/gi";
import { ThemeContext } from '../UserProfile';

function Skills() {
  const [currentCategory, setCurrentCategory] = useState(null);
  const providerValue = useContext(ThemeContext);
  const [profile, setProfile] = useState(null);
  const [change, setChange] = useState(false);

  useEffect(() => {
      if (providerValue?.profile) {
          setProfile(providerValue.profile);
      }
  })

  useEffect(() => {
    // Set current show category
    if (profile?.skillList && profile?.skillList.length > 0) {
      setCurrentCategory(profile?.skillList[0]);
    }
  }, [profile])

  useEffect(() => {
    setChange(!change);
  }, [currentCategory])

  const handleChangeCategory = (obj) => {
    setCurrentCategory(obj)
  }

  const handleShowIcon = (iconName) => {
    let result;
    switch (iconName) {
      case 'FaJava':
        result = <Fa.FaJava className={styles.symbol} />;
        break;
      case 'SiSpringboot':
        result = <SiSpringboot className={styles.symbol} />;
        break;
      case 'FaHtml5':
        result = <Fa.FaHtml5 className={styles.symbol} />;
        break;
      case 'FaDatabase':
        result = <Fa.FaDatabase className={styles.symbol} />;
        break;
      case 'FaCss3':
        result = <Fa.FaCss3 className={styles.symbol} />;
        break;
      case 'FaSass':
        result = <Fa.FaSass className={styles.symbol} />;
        break;
      case 'FaJs':
        result = <Fa.FaJs className={styles.symbol} />;
        break;
      case 'FaReact':
        result = <Fa.FaReact className={styles.symbol} />;
        break;
      case 'FaGitAlt':
        result = <Fa.FaGitAlt className={styles.symbol} />;
        break;
      case 'FaGithub':
        result = <Fa.FaGithub className={styles.symbol} />;
        break;
      case 'DiMysql':
        result = <DiMysql className={styles.symbol} />;
        break;
      case 'DiMsqlServer':
        result = <DiMsqlServer className={styles.symbol} />;
        break;
      case 'GiTortoise':
        result = <GiTortoise className={styles.symbol} />;
        break;
      default:
        result = <></>;
        break;
    }
    return result
  }

  return (
    <>
      <div className={styles.skills} id='skills'>
        <p className={styles.title}>Skills</p>

        {/* Danh sách các loại kỹ năng */}
        <ul
          className={styles.categories}
        >
          {profile?.skillList.map((category, index) => (
            <li
              key={index}
              className={
                clsx(
                  styles.item,
                  category?.id === currentCategory?.id ? styles.active : ''
                )
              }
              onClick={() => handleChangeCategory(category)}
            >
              {category?.name}
            </li>
          ))}
        </ul>

        {/* Danh sách các công nghệ trong thể loại đang active */}
        <ul
          className={styles.technologies}
        >
          {currentCategory?.technologyList?.map((technology, index) => (
            <li
              key={index}
              className={styles.item}
            >
              {/* Biểu tượng của ngôn ngữ */}
              <div className={styles.boxSymbol}>
                {handleShowIcon(technology?.iconName)}
              </div>
              {/* Tên của ngôn ngữ */}
              <div className={styles.name}>
                {technology.name}
              </div>
              {/* Chi tiết khác */}
              <div className={styles.details}>
                {technology.details}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default memo(Skills)
