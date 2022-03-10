import React, { memo, useState, useEffect } from 'react';
import styles from './_skills.module.scss';

const skills = [
  {
    id: 1,
    name: 'Back-end',
    technologies: [
      {
        id: 1,
        name: 'Java',
        image: null,
        icon: null
      },
      {
        id: 2,
        name: 'Spring boot',
        image: null,
        icon: null
      },
      {
        id: 3,
        name: 'Java',
        image: null,
        icon: null
      },
      {
        id: 4,
        name: 'Spring boot',
        image: null,
        icon: null
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
        icon: null
      },
      {
        id: 2,
        name: 'CSS',
        image: null,
        icon: null
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
        icon: null
      },
      {
        id: 2,
        name: 'Sql Server',
        image: null,
        icon: null
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
        icon: null
      },
      {
        id: 2,
        name: 'Github',
        image: null,
        icon: null
      }
    ]
  }

];

function Skills() {
  const [currentTechnologies, setCurrentTechnologies] = useState([]);
  const [category, setCategory] = useState();

  useEffect(() => {
    if (skills && skills[0].technologies) {
      setCurrentTechnologies(() => {
        return skills[0].technologies;
      })
    }
  }, [])

  useEffect(() => {

  }, [category])

  const handleCategory = () => {

  }

  return (
    <>
      <div className={styles.skills}>
        <p className={styles.title}>Skills</p>

        {/* Danh sách các loại kỹ năng */}
        <ul
          className={styles.categories}
        >
          {skills.map((category) => (
            <li
              key={category.id}
              className={styles.item}
            >
              {category.name}
            </li>
          ))}
        </ul>

        {/* Danh sách các công nghệ trong thể loại đang active */}
        <ul
          className={styles.technologies}
        >
          {currentTechnologies.map((technology) => (
            <li
              key={technology.id}
              className={styles.item}
            >
              {technology.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default memo(Skills)
