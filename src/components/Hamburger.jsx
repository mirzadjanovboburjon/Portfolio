import { useState } from "react";

const Hamburger = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <nav id="hamburger-nav">
      <div className="logo">
        <a href="/">&lt;Boburjon /&gt;</a>
      </div>
      <div className="hamburger-menu">
        <div className="hamburger-icon" onClick={() => toggleHamburger()}>
          <span
            style={
              hamburgerOpen
                ? { transform: "rotate(45deg) translate(10px, 5px)" }
                : {}
            }
          ></span>
          <span style={hamburgerOpen ? { opacity: "0" } : {}}></span>
          <span
            style={
              hamburgerOpen
                ? { transform: "rotate(-45deg) translate(10px, -5px)" }
                : {}
            }
          ></span>
        </div>
        {hamburgerOpen && (
          <div className="menu-links">
            <li>
              <a href="#about" onClick={() => toggleHamburger()}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => toggleHamburger()}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => toggleHamburger()}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => toggleHamburger()}>
                Contact
              </a>
            </li>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Hamburger;
