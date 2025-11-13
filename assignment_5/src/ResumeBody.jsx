import React, { Component } from "react";
import styles from "./ResumeBody.module.css"; // 👈 Import CSS module

class ResumeBody extends Component {
  render() {
    return (
      <div className={styles.container}>
        <section className={styles.section}>
        <hr />
          
          <h2>Education</h2>
          <ul>
            <li>
              D.Y.Patil College of Engineering and Technology, Kolhapur. (2022 - 2026)<br />
              B.E. - Computer Science | Percentage: 84.42
            </li>
            <li>
            Brilliant Academy.(2020-2022)<br />
              12th | HSC | Percentage: 84
            </li>
            <li>
            Kalyani School.<br />
              10th | SSC | Percentage: 89
            </li>
          </ul>
        </section><hr />

        <section className={styles.section}>
          <h2>Skills</h2>
          <ul>
            <li>
              <b>Technical Skills:</b> Java, Python, SQL, Node.js, Express.js, React.js, HTML, CSS, JavaScript
            </li>
            <li>
              <b>Soft Skills:</b> Communication, Leadership, Analytical Thinking, Collaboration
            </li>
          </ul>
        </section>
        <hr />

        <section className={styles.section}>
          <h2>Projects</h2>
          <ul>
            <li><b>InvoTrack</b> - Invoice & Stock Management System</li>
            <li><b>Design 360</b> - AR-based Interior Design Web App</li>
            <li><b>IntelliNote</b> - Generative AI Note Assistant</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default ResumeBody;
