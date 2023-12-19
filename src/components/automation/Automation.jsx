import React , {useState, useEffect} from 'react'
import "./automation.css"
import Home from "../../assets/home.jpg"
import Home2 from "../../assets/home2.jpg"
import Home3 from "../../assets/hero1.jpg"
import {AiOutlineRight} from "react-icons/ai"
import OurServices from '../../utils/OurServices'
import { Link } from 'react-router-dom'


const Automation = () => {
  const images = [Home2, Home, Home3]

  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      var image = (1 + activeImage) % images.length;
      setActiveImage(image)
    },3000)

    return () => {
      clearInterval(interval)
    }
  }, [activeImage])

  return (
    <section className='automation' id='services'>
      <div className="automation__background">
        <div className="blue__background"></div>
        <div className="back-2">
          <div className="grey__background"></div>
          <div className="white__background"></div>
        </div>
      </div>
      <div className="container automation__container">
        <div className="automation__section-1">
          <div className="automation__subtitle">
            <span className="section__subtitle">
              L'AUTOMATISATION
            </span>
          </div>

          <div className="automation__image-container">

            <div className="image__wrapper">
              {
                images.map((image, i) => (
                  <img src={image} alt="Home Images" className={`automation-img ${activeImage ===i ? "active-image": ""}`} key={i}/>
                ))
              }
            </div>

            <div className="automation__main-text">
              <div className="section__title">
                VOX Link:<br />l'avenir de l'automatisation de votre maison!
              </div>
              <p className="normal__text">
              Découvrez la puissance de la technologie de pointe et des services experts de VOX Link. 
              Contactez-nous dès aujourd'hui pour en savoir plus et planifier une consultation. 
              N'attendez pas - transformez votre maison en un espace de vie intelligent et connecté.
              </p>
              <Link to="/vox-link" className="button hero__button">
                Découvrir VOX Link <AiOutlineRight />
              </Link>
            </div>

          </div>
        </div>
        <div className="automation__section-2">
          <div className="automation__container-3">
            <span className="nos__services">
              NOS SERVICES
            </span>
          </div>

          <div className="automation__container-4">
            {
              OurServices.map((service, i) => (
                <div className="services__container" key={i}>
                  <img src={service.image} alt="Home automation Service" className="services__image" />
                  <span className="services__header">{service.title}</span>
                  <p className="services__description">
                    {service.description}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </section>
  )
}

export default Automation

{/**
  <div className="automation__section-2">
          <div className="automation__container-3">
            <span className="nos__services">
              NOS SERVICES
            </span>
          </div>

          <div className="automation__container-4">
            {
              OurServices.map((service, i) => (
                <div className="services__container" key={i}>
                  <img src={service.image} alt="Home automation Service" className="services__image" />
                  <span className="services__header">{service.title}</span>
                  <p className="services__description">
                    {service.description}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
*/}