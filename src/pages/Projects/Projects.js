import React from "react";
import "./Projects.css"
import Card from "../../components/Card/Card";
import giraffe from  "../../assets/giraffe.jpg"
import Table from "../../components/Table/Table";


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
      <Table elements={projects} />
    </div>
  )
}

export default Projects;