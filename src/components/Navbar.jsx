import React from "react";

const Navbar = () => {
  return (
    <nav id="desktop-nav">
      <div className="logo">
        <a href="/">&lt;Boburjon /&gt;</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
