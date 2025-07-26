import React from "react";
import { FiMenu } from "react-icons/fi";
import { IoSunnySharp } from "react-icons/io5";
import imagegallerylogo from "./assests/imagegallery-logo.png";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Header({selectedMoon, handleSelectedMoon, handleSelectedSun}) {
  return (
    <header className="header">
      <img src={imagegallerylogo} height="50px" width="200px"></img>
      <nav className="navbar">
        <li>Home</li>
        <li>Gallery </li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <section className="menu-theme">
        <FiMenu className="menubar" />
        <div className="theme">
          <div className={`cover ${selectedMoon ? "selectedMoon" : "selectedSun"} `} ></div>
          <IoSunnySharp className="sun" onClick={handleSelectedSun}/>
          <BsFillMoonStarsFill className="moon" onClick={handleSelectedMoon} />
        </div>
      </section>
    </header>
  );
}

export default Header;
