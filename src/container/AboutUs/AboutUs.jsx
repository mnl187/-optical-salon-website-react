import React from 'react';
import {ai_women_sunglasses01} from "../../constants/images";
import {IoGlassesOutline} from "react-icons/io5";
import './AboutUs.css'


import './AboutUs.css';

const AboutUs = () => (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
        {/*<div className="app__aboutus-overlay flex__center">*/}
        {/*    <img src={ai_women_sunglasses01} alt="obrazek kobiety w okularach słonecznych"/>*/}
        {/*</div>*/}

        <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content_about">
                <h1 className="headtext__oswald">O nas</h1>
                <IoGlassesOutline color="fff" className="glasses-img"/>
                <p className="p__opensans">Jesteśmy zespołem doświadczonych specjalistów z branży optycznej, którzy od
                    lat zajmują się doborem najlepszych okularów i soczewek dla naszych Klientów. W naszym Salonie
                    Optycznym stawiamy na najwyższą jakość usług oraz indywidualne podejście do każdego Klienta.
                    Zapewniamy profesjonalną diagnostykę wzroku oraz szeroki wybór oprawek i soczewek, dostosowanych do
                    Twoich potrzeb i preferencji. Nasza pasja do optyki oraz zadowolenie Klientów są dla nas
                    najważniejsze, dlatego zawsze staramy się sprostać najwyższym wymaganiom. Dołącz do grona naszych
                    zadowolonych Klientów.</p>
                <button type="button" className="custom__button">Dowiedz się wiecej</button>
            </div>

            <div className="app__aboutus-content_img flex__center">
                <img src={ai_women_sunglasses01} alt="obrazek kobiety w okularach słonecznych"/>
            </div>
            <div className="app__aboutus-content_history">
                <h1 className="headtext__oswald">historia</h1>
                <IoGlassesOutline color="fff" className="glasses-img"/>
                <p className="p__opensans">Nasz Salon Optyczny powstał z pasji do optyki i dbałości o zdrowie wzroku. Od
                    lat zajmujemy się doborem najlepszych okularów i soczewek dla naszych Klientów. Stawiamy na
                    najwyższą jakość usług oraz indywidualne podejście do każdego Klienta. Nasza historia to historia
                    sukcesu, który zawdzięczamy naszej pasji i zaangażowaniu w branży optycznej. Dzięki zadowoleniu
                    naszych Klientów udało nam się zbudować solidną markę, która cieszy się uznaniem na rynku. Dołącz do
                    grona naszych zadowolonych Klientów i ciesz się perfekcyjnym widzeniem dzięki naszemu doświadczeniu
                    i fachowej opiece.</p>
                <button type="button" className="custom__button">Dowiedz się wiecej</button>
            </div>

        </div>
    </div>
);

export default AboutUs;
