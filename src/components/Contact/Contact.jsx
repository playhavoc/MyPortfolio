// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            className={styles.images}
            src={getImageUrl("Contact/emailIcon.png")}
            alt="Email icon"
          />
          <a className={styles.words} href="mailto:linuscolesharp@gmail.com">
            linuscolesharp@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            className={styles.images}
            src={getImageUrl("Contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            className={styles.words}
            href="https://www.linkedin.com/in/linus-sharp-0a827421b/"
          >
            linkedin.com/linus-sharp
          </a>
        </li>
        <li className={styles.link}>
          <img
            className={styles.images}
            src={getImageUrl("Contact/githubIcon.png")}
            alt="Github icon"
          />
          <a className={styles.words} href="https://github.com/playhavoc">
            github.com/playhavoc
          </a>
        </li>
      </ul>
    </footer>
  );
};
