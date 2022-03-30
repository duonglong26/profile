import React, { memo, useState, useEffect } from 'react';
import styles from './_skills.module.scss';
import clsx from 'clsx';
import * as Fa from "react-icons/fa";
import { DiMysql, DiMsqlServer } from "react-icons/di";
import { SiSpringboot } from "react-icons/si";
import { GiTortoise } from "react-icons/gi";

const skills = [
  {
    id: 1,
    name: 'Back-end',
    technologies: [
      {
        id: 1,
        name: 'Java',
        image: null,
        icon: 'FaJava',
        details: null
      },
      {
        id: 2,
        name: 'Spring boot',
        image: null,
        icon: 'SiSpringboot',
        details: null
      },
      {
        id: 3,
        name: 'Data access',
        image: null,
        icon: 'FaDatabase',
        details: "JDBC, JPA, Hibernate"
      }
    ]
  },
  {
    id: 2,
    name: 'Front-end',
    technologies: [
      {
        id: 1,
        name: 'HTML',
        image: null,
        icon: 'FaHtml5'
      },
      {
        id: 2,
        name: 'CSS',
        image: null,
        icon: 'FaCss3'
      },
      {
        id: 3,
        name: 'SASS',
        image: null,
        icon: 'FaSass'
      },
      {
        id: 4,
        name: 'Javascript',
        image: null,
        icon: 'FaJs'
      },
      {
        id: 5,
        name: 'React Js',
        image: null,
        icon: 'FaReact'
      }
    ]
  },
  {
    id: 3,
    name: 'Database',
    technologies: [
      {
        id: 1,
        name: 'Mysql',
        image: null,
        icon: 'DiMysql'
      },
      {
        id: 2,
        name: 'Sql Server',
        image: null,
        icon: 'DiMsqlServer'
      }
    ]
  },
  {
    id: 4,
    name: 'Version Control',
    technologies: [
      {
        id: 1,
        name: 'Git',
        image: null,
        icon: 'FaGitAlt'
      },
      {
        id: 2,
        name: 'Github',
        image: null,
        icon: 'FaGithub'
      }
    ]
  }
];

function Skills() {
  const [currentCategory, setCurrentCategory] = useState();

  useEffect(() => {
    // Set current show category
    if (skills && skills.length > 0) {
      setCurrentCategory(skills[0])
    }
  }, [])

  useEffect(() => {

  }, [currentCategory])

  const handleChangeCategory = (obj) => {
    setCurrentCategory(() => obj)
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
          {skills.map((category, index) => (
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
              {category.name}
            </li>
          ))}
        </ul>

        {/* Danh sách các công nghệ trong thể loại đang active */}
        <ul
          className={styles.technologies}
        >
          {currentCategory?.technologies?.map((technology) => (
            <li
              key={technology.id}
              className={styles.item}
            >
              {/* Biểu tượng của ngôn ngữ */}
              <div className={styles.boxSymbol}>
                {handleShowIcon(technology?.icon)}
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
