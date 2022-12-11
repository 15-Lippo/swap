import * as React from 'react'
import logo1 from './perseus.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="per__navbar">
      <div className="per__navbar-links">
        <div className="per__navbar-links_logo">
          <img src={logo1} alt="logo" />
        </div>
        <div className="per__header-content">
          <h1 className="gradient__text">Lisprocoin Bridge</h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar
