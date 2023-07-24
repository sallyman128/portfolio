import React from "react";
import "./About.css"

const About = () => {
  return (
    <div>
      <header>
        <h1>Salmaan Ali</h1>
        <p>Fullstack Web Developer</p>
      </header>
      <main>
        <section className="about-section">
          <h2>About</h2>
          <p>
          Full stack engineer experienced in developing Java Spring Boot, Ruby on Rails, and JavaScript-based applications with a background in Economics. 
          Possess strong skills in logic, abstraction, and teamwork that help companies build robust software that is designed to drive growth and adaptability.
          </p>
        </section>
        <br/>
        <section className="skills-section">
          <h2>Skills</h2>
          <ul className="skill-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>ReactJs</li>
            <li>Java Springboot</li>
            <li>Ruby on Rails</li>
            <li>Web development</li>
            <li>SQL</li>
            <li>Kafka Asynchronous Messaging</li>
            <li>RESTful API</li>
            <li>Microservice Architecture</li>
          </ul>
        </section>
        <br/>
        <section className="contact-section">
          <h2>Contact Me</h2>
          <p>
            If you're interested in working together or have any questions, feel free to reach out to me.
          </p>
          <br/>
          <button class="email-button">
            <a class="email-link" href = "mailto: salmaan.arif.ali@gmail.com">Send Email</a>
          </button>  
        </section>
      </main>
    </div>
  )
}

export default About;