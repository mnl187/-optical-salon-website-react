import React, {useState} from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {GrClose} from "react-icons/gr";
import {images} from "../../constants";
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
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
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu color="fff" fontSize={27} onClick={() => setToggleMenu(true)}/>

                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <GrClose fontSize={27} className="overlay__close"
                                           onClick={() => setToggleMenu(false)}/>
                        <ul className="app__navbar-smallscreen_links">
                            <li className="p__opensans"><a href="#home">Home</a></li>
                            <li className="p__opensans"><a href="#about">O nas</a></li>
                            <li className="p__opensans"><a href="#contact">Kontakt</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
};

export default Navbar;
