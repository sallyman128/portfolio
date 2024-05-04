import React from "react";
import giraffe from  "../assets/giraffe.jpg"

const Error = () => {
  return (
    <div id='error_message'>
      <h1>404 Error Page</h1>
      <h2>This route does not exist.</h2>
      <img alt="cute giraffe" className="error_image" src={giraffe} />
    </div>
  )
}

export default Error