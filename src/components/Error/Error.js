import React from "react";
import { Link } from "react-router-dom";
import './Error.css'

const Error = () => {
  return (
    <div id='errorMessage'>
      <h1>404 Error Page</h1>
      <h2>This route does not exist. Return <Link to='/'>Home</Link></h2>
    </div>
  )
}

export default Error