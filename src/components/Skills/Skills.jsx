// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Skills.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skillsData = [
  { name: "Python", percentage: 84 },
  { name: "Java", percentage: 76 },
  { name: "C/C++/C#", percentage: 67 },
  { name: "Flutter", percentage: 80 },
  { name: "English", percentage: 99 },
  { name: "French", percentage: 98 },
  { name: "Leadership", percentage: 75 },
  { name: "React", percentage: 55 },
];

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill) => (
          <div className={styles.skillItem} key={skill.name}>
            <CircularProgressbar
              value={skill.percentage}
              text={`${skill.percentage}%`}
              styles={buildStyles({
                textColor: "white",
                pathColor: "#4a90e2",
                trailColor: "#d6d6d6",
              })}
            />
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
