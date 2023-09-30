import React from "react";
import "./Projects.css"
import giraffe from  "../../assets/giraffe.jpg"
import lmsLogo from  "../../assets/lms_logo.png"
import jottaNote from "../../assets/jottanote.png"
import CardTable from "../../components/CardTable/CardTable";

const Projects = () => {

  const rootUrl = window.location.origin

  const projects = [
    {
      imageSrc: lmsLogo,
      description: "Learning Management Software",
      link: "https://github.com/sallyman128/final_project_lms/"
    },
    {
      imageSrc: jottaNote,
      description: "Note Taking App",
      link: "https://github.com/sallyman128/mod4-final-project"
    },
    {
      imageSrc: giraffe,
      description: "Weather",
      link: `${rootUrl}/weather`
    },
    {
      imageSrc: giraffe,
      description: "Future project",
      link: `${rootUrl}`
    },
    {
      imageSrc: giraffe,
      description: "Future project",
      link: `${rootUrl}`
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