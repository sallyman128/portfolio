import React from "react";
import "./Projects.css"
import giraffe from  "../../assets/giraffe.jpg"
import CardTable from "../../components/CardTable/CardTable";

const Projects = () => {

  const projects = [
    {
      imageSrc: giraffe,
      description: "fdafda"
    },
    {
      imageSrc: giraffe,
      description: "fdafda"
    },
    {
      imageSrc: giraffe,
      description: "fdafda"
    },
    {
      imageSrc: giraffe,
      description: "fdafda"
    },
    {
      imageSrc: giraffe,
      description: "fdafda"
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