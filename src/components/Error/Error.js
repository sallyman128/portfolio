import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>404 Error Page</h1>
      <h2>This route does not exist. Return <Link to='/'>Home</Link></h2>
    </div>
  )
}

export default Error