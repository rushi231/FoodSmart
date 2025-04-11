
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Make sure to update your CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img src="/logo.png" alt="GUSTO" className="logo-image" />
          <span className="logo-text">GUSTO</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/pantry">My Pantry</Link>
        <Link to="/recipes">Find Recipes</Link>
        <Link to="/faq">FAQs</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Icons - Search, Cart, Account */}
      <div className="navbar-icons">
        <Link to="/search" className="icon-link">
          <i className="fa fa-search"></i>
        </Link>
        <Link to="/cart" className="icon-link">
          <i className="fa fa-shopping-cart"></i>
        </Link>
        <Link to="/account" className="icon-link">
          <i className="fa fa-user"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;