import React from 'react'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar({ title = 'TextUtils', About = 'About', mode, toggleMode }) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">{title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
    aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">{About}</Link>
        </li>
      </ul>
      {/* <div className="d-flex">
        <div className="bg-primary rounded mx-2" onClick={()=>{toggleMode('primary')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
        <div className="bg-danger rounded mx-2" onClick={()=>{toggleMode('danger')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
        <div className="bg-success rounded mx-2" onClick={()=>{toggleMode('success')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
        <div className="bg-warning rounded mx-2" onClick={()=>{toggleMode('warning')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
      </div> */}
      <div className={`form-check form-switch text-${mode==='light'?'dark':'light'} mx-5`}>
        <input className="form-check-input" onClick={()=>{toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes={title: PropTypes.string,
    About: PropTypes.string
};
