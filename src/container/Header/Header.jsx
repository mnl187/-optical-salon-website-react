import React from 'react';
// import {women01} from "../../constants/images";
import './Header.css';
import {SubHeading} from "../../components";

const Header = () => (
    <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
            <SubHeading title="Salon Optyczny M - Twoje doskonałe widzenie"/>
            <h1 className="app__header-h1">Klucz do Najlepszych Okularów</h1>
            <p className="p__opensans" style={{margin: '2rem 0'}}>Odwiedź nasz Salon Optyczny i ciesz się perfekcyjnym widzeniem! Oferujemy najwyższej jakości okulary i profesjonalną opiekę nad Twoimi oczami. Przekonaj się już dziś!</p>
            <button type="button" className="custom__button">Przeglądaj usługi</button>
        </div>
        <div className="app__wrapper_img">

        </div>

    </div>
);

export default Header;
