import React from "react";
import { Link } from "react-router-dom";

function TopBar() {
  return <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary " id="nav">
        <div className="container-fluid" >
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
             <span className="navbar-toggler-icon"></span> 
          </button>  
          <div className="collapse navbar-collapse me-auto mx-auto text-center fw-bold mb-2 mb-lg-0" id="navbar">
            <ul className="navbar-nav">
            <Link to="/All" className="navbar-brand" href="#">
            ALL
          </Link>
              <li className="nav-item">
                <Link
                  to='/FullStack_Development'
                  className="nav-link active "
                  aria-current="page"
                  href="#"
                >
                  FULL STACK DEVELOPMENT
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/Data_Science' className="nav-link active" href="#">
                  DATA SCIENCE
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/Cyber_Security' className="nav-link active" href="#">
                  CYBER SECURITY
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/Career' className="nav-link active" href="#">
                  CAREER
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
}

export default TopBar;
