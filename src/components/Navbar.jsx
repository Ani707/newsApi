import React from 'react'
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg "style={{background: "#3c8696"}}>
  <div className="container-fluid d-flex justify-content-center align-items-center flex-column ">
    <Link className="navbar-brand text-white " to="/"><h1 style={{fontSize:"70px",fontFamily:"cursive"}}>NEWS HUB</h1></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/General">General</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/Business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/Entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/Health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/Science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/Sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/Technology">Technology</Link>
        </li>
       </ul>
      
    </div>
  </div>
</nav>
{/* <hr /> */}
    </>
  )
}

export default Navbar