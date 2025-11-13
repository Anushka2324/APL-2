import React, { Component } from "react";

class ResumeBody extends Component {
  render() {
    return (
      <div>
        <section>
            <hr />
          <h2>Education</h2>
          <ul>
            <li>D.Y.Patil College of Engineering and Technology, Kasaba Bawada, Kolhapur. (2022 - 2026)<br></br>
            B.E. -  Computer Science | Percentage: 84.42 
            </li>
            <br />
            <li>Brilliant Academy.(2020-2022)
                <br></br>
                12th | HSC | Percentage: 84
            </li>
            <br />
            <li>Kalyani School.<br />
            10th | SSC | Percentage: 89 
            </li>
          </ul>
        </section>
        <hr />

        <section>
          <h2>Skills</h2>
          <ul>
            <li>Technical Skills - Java, Python, SQL, Node.js, Express.js, React.js, HTML, CSS, JavaScript</li>
            <li>Soft Skills - Communication, Leadership, Analytical Thinking, Collaboration</li>
          </ul>
        </section>
        <hr />

        <section>
          <h2>Projects</h2>
          <ul>
            <li><b>InvoTrack</b> - Invoice & Stock Management System</li>
            <li><b>Design 360</b> - AR-based Interior Design Web App</li>
            <li><b>IntelliNote</b> - Generative AI Note Assistant</li>
          </ul>
        </section>
        <hr />
        <section>
          <h2>Co-curricular Activities</h2>
          <p>1. Training & Placement Cell <br /> 2. E-Cell </p>
        </section>

      </div>
    );
  }
}

export default ResumeBody;
