// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <div className={styles.personalInfo}>
          <p>
            <strong>First name:</strong> Linus
          </p>
          <p>
            <strong>Last Name:</strong> Sharp
          </p>
          <p>
            <strong>Age:</strong> 20
          </p>
          <p>
            <strong>Nationality:</strong> British & French
          </p>
          <p>
            <strong>Language:</strong> English, French
          </p>
          <p>
            <strong>Phone:</strong> +44 7763411048
          </p>
          <p>
            <strong>Freelance:</strong> Available
          </p>
          <p>
            <strong>Location:</strong> Nottingham, UK
          </p>
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("About/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I’m a front-end developer with experience in building responsive
                and optimized apps and websites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("About/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimized back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("About/peopleIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Team Management</h3>
              <p>
                Led a team of in the UNiDAYS-sponsored project to deliver
                client-specific solutions using various scrum methods
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
