import React from "react";

const Home = () => {
  return (
    <div>
      <header>
        <h1>John Doe</h1>
        <p>Frontend Developer</p>
      </header>
      <main>
        <section className="about-section">
          <h2>About Me</h2>
          <p>
            Hi, I'm John Doe, a passionate frontend developer with a strong focus on creating
            user-friendly and visually appealing web applications. I have experience working with
            HTML, CSS, JavaScript, and various frontend frameworks.
          </p>
        </section>
        <section className="skills-section">
          <h2>Skills</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Vue.js</li>
            <li>Responsive Web Design</li>
            <li>UI/UX Design</li>
          </ul>
        </section>
        <section className="projects-section">
          <h2>Projects</h2>
          <div className="project">
            <h3>Project 1</h3>
            <p>A brief description of the project.</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>A brief description of the project.</p>
          </div>
          <div className="project">
            <h3>Project 3</h3>
            <p>A brief description of the project.</p>
          </div>
        </section>
        <section className="contact-section">
          <h2>Contact Me</h2>
          <p>
            If you're interested in working together or have any questions, feel free to reach out
            to me.
          </p>
          <button className="cta-button">Get in Touch</button>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home;