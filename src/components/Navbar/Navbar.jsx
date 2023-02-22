import React from 'react';
// import { GiHamburgerMenu} from "react-icons/all";
// import { MdOutlineBusiness } from "react-icons/all";
import images from "../../constants/images";
import './Navbar.css';

const Navbar = () => (
    <nav className="app__navbar">
        <div className="app__navbar-logo">
            <img src={images.opticalSalonLogo} alt="optical salon logo"/>
        </div>
        <ul className="app__navbar-links">
            <li className="p__opensans"><a href="#home">Home</a></li>
            <li className="p__opensans"><a href="#about">O nas</a></li>
            <li className="p__opensans"><a href="#contact">Kontakt</a></li>
        </ul>
        <div className="app__navbar-visit">
            <a href="/" className="p__opensans">Umów wizytę u lekarza</a>
        </div>
    </nav>
);

export default Navbar;
