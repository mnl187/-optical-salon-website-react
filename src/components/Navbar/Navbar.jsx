import React from 'react';
import { GiHamburgerMenu} from "react-icons/all";
import { MdOutlineBusiness } from "react-icons/all";
import images from "../../constants/images";
import './Navbar.css';

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
        <img src={images.logo} alt="logo"/>
    </div>
  </nav>
);

export default Navbar;
