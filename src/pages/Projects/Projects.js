import React from "react";
import "./Projects.css"
import giraffe from  "../../assets/giraffe.jpg"
import lmsLogo from  "../../assets/lms_logo.png"
import jottaNote from "../../assets/jottanote.png"
import CardTable from "../../components/CardTable/CardTable";

const Projects = () => {

  const projects = [
    {
      imageSrc: lmsLogo,
      description: "Learning Management Software",
      githubLink: "https://github.com/sallyman128/final_project_lms/"
    },
    {
      imageSrc: jottaNote,
      description: "Note Taking App",
      githubLink: "https://github.com/sallyman128/mod4-final-project"
    },
    {
      imageSrc: giraffe,
      description: "Future project"
    },
    {
      imageSrc: giraffe,
      description: "Future project"
    },
    {
      imageSrc: giraffe,
      description: "Future project"
    }
  ]

  return (
    <div>
      <h1>Projects</h1>
      <CardTable elements={projects} />
    </div>
  )
}

export default Projects;