import React, { RefObject } from "react";

import "./styles.css";
import logo from "./img/logo.svg";

interface NavProps {
  navRef?: RefObject<HTMLElement>;
  onSetSidebarOpen: (open: boolean) => void;
}

export const Nav: React.FC<NavProps> = ({ navRef, onSetSidebarOpen }) => {
  return (
    <nav className="navigation transparent" ref={navRef}>
      <div className="navigation-logo">
        <a href="#top">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="navigation-links">
        <a
          className="navigation-link"
          href="https://docs.google.com/document/d/1unZEQPnvFd2LHnUx8ICC2kbTIy-uAmj9YF56kEAsPQA/edit?usp=sharing"
        >
          <div className="navigation-link-icon">
            <i className="fas fa-file-contract"></i>
          </div>
          <span className="navigation-link-text">CV</span>
        </a>
        <a className="navigation-link" href="#about">
          <div className="navigation-link-icon">
            <i className="fas fa-address-card"></i>
          </div>
          <span className="navigation-link-text">About</span>
        </a>
        <a className="navigation-link" href="#contact">
          <div className="navigation-link-icon">
            <i className="fas fa-address-book"></i>
          </div>
          <span className="navigation-link-text">Contact</span>
        </a>
      </div>
      <div className="navigation-bars" onClick={() => onSetSidebarOpen(true)} style={{zIndex: 1}}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};
