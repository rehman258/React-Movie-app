import React from 'react';
// import * as BootstrapItem from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
/*Components*/

export default function NavigationBar() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">LOGO</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 customizationNavbar">
            <li className="nav-item me-3 ">
              <NavLink to="/"  className=" text-light text-decoration-none" exact>Home</NavLink>
            </li>
            <li className="nav-item me-3 ">
              <NavLink to="/topRated" className=" text-light text-decoration-none"  exact>Top Rated</NavLink>
            </li>
            <li className="nav-item me-5 ">
              <NavLink to="/contact" className=" text-light text-decoration-none"  exact>Contact</NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2 bg-transparent text-light" type="search" placeholder="Search" aria-label="Search"/>
          </form>
        </div>
      </div>
    </nav>
            
  );
}
