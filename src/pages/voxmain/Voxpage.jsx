import React, {useEffect} from 'react'
import MainLayout from '../../layout/MainLayout'
import {CgMouse} from "react-icons/cg"
import {HiArrowLongDown} from "react-icons/hi2"
import "./voxpage.css"
import {BiPlusMedical} from "react-icons/bi"
import {FiArrowUpRight} from "react-icons/fi"
import Team from "../../assets/team.jpg"
import OurServices from '../../utils/OurServices'
import { Link } from 'react-router-dom'

const Voxpage = () => {
  const stats = [
    {
      number: 2,
      value: "Ans d'expérience"
    },
    {
      number: 20,
      value: "Projets Réalisés"
    },
    {
      number: 10,
      value: "Clients Satisfaits"
    },

  ]

  return (
    <MainLayout>
      <section className="voxheader">
        <div className="vox__overlay"></div>
        <div className="container vox__container">
          <div className="vox__hero">
            <div>
              <span className="vox__welcome">BIENVENUE CHEZ VOX LINK</span>
            </div>
            <div>
              <span className="vox__hero-header">AUTOMATISEZ VOTRE MAISON <br />SIMPLIFIER VOTRE VIE</span>
            </div>
            <div className='vox-sub'>
              <span className="vox__sub">Laissez-nous vous aider à simplifier votre routine <br />
              quotidienne et à apporter facilité et commodité <br />à votre vie.
              </span>
            </div>
            <a href="#about__us" className="scroll__down"><CgMouse/></a>
            <a href="#about__us" className="scroll__down-arrow"><HiArrowLongDown/></a>
          </div>
        </div>
      </section>
      <section className="vox__stats">
        <div className="container stats__container">
          {
            stats.map((stat, i) => (
              <div className="stat__wrapper" key={i}>
                <span className="stat__number">{stat.number} <BiPlusMedical className="plus-sign"/></span>
                <span className="stat__text">{stat.value}</span>
              </div>
            ))
          }
        </div>
      </section>
      <section className="about__us" id="about__us">
        <div className="container about__container">
          <div className="about__wrapper">
            <div className="about__image">
              <img src={Team} alt="About Us" className="about__img" />
            </div>
            <div className="about__us-text">
              <span className="a__propos">À propos de nous</span>
              <span className="why__choose">Pourquoi choisir <br /><span className="purple">VOX LINK</span></span>
              <p className="explanation hero__text">Passionnés par la domotique,nous nous engageons à offrir à nos clients les
              meilleures solutions pour automatiser leur maison. Notre technologie de pointe et notre expertise nous 
              permettent de fournir des services de qualité supérieure qui répondent aux besoins de nos clients. 
              Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins et leur offrir 
              des solutions personnalisées qui améliorent leur confort et leur sécurité. 
              </p>
              <a href="/#contact" className="contact__cta-2">CONTACTEZ NOUS <FiArrowUpRight/></a>
            </div>
          </div>
        </div>
      </section>
      <section className="nos__services-section">
        <div className="container nos__services-container">
          <div className="nos__services-header">NOS SERVICES</div>
          <div className="services__wrapper">
            {
              OurServices.map((service, i) => (
                <div className="nos-services__card" key={i}>
                  <img src={service.image2} alt={service.title} className="nos-services__img" />
                  <div className="services__text-wrapper">
                    <span className="nos-services__header">{service.title}</span>
                    <p className="hero__text nos-services__text">
                      {service.description}. <br /> {service.description2}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default Voxpage