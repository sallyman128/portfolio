import React from "react";
import giraffe from  "../assets/giraffe.jpg"
import lmsLogo from  "../assets/lms_logo.png"
import jottaNote from "../assets/jottanote.png"
import CardTable from "../components/CardTable/CardTable";

const Projects = () => {

  const rootUrl = window.location.origin

  const projects = [
    {
      imageSrc: lmsLogo,
      title: "Learning Management Software",
      link: "https://github.com/sallyman128/final_project_lms/"
    },
    {
      imageSrc: jottaNote,
      title: "Note Taking App",
      link: "https://github.com/sallyman128/mod4-final-project"
    },
  ]

  return (
    <div>
      <h1>Projects</h1>
      <CardTable elements={projects} />
    </div>
  )
}

export default Projects;