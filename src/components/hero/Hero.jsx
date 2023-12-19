import React from "react";
import "./hero.css";
import { AiOutlineRight } from "react-icons/ai";
import { RxArrowRight } from "react-icons/rx";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="section hero" id="acceuil">
      <div className="container hero__container">
        <div className="hero__intro">
          <div className="hero__header">
            <span className="logo__bold">
              V<span className="letter__o">O</span>X
            </span>{"  "}
            <span className="logo__link">LINK</span>
          </div>

          <div className="hero__text">
            Spécialisés dans les services d'automatisation de la maison et
            d'assistance vocale, notre technologie de pointe et notre équipe
            d'experts facilitent la transformation de votre maison en un espace
            de vie intelligent et connecté. Avec VOX Link, vous pouvez contrôler
            votre maison avec votre voix ou de votre telephone. Découvrez
            l'avenir de l'automatisation de la maison dès aujourd'hui.
          </div>

          <Link to="/vox-link" className="button hero__button">
            Découvrir VOX Link <AiOutlineRight />
          </Link>
        </div>

        <div className="hero__cta">
          <div className="logo">
            <span className="logo__bold">
              V<span className="letter__o">O</span>X
            </span>
            <span className="logo__link">LINK</span>
          </div>
          <div className="hero__cta-container">
            <span className="normal__text cta__text">
              Câblage de maison pour une habitation sûre et connectée.
            </span>
            <Link  to="/vox-link" className="cta__button">
              Découvrir <RxArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
