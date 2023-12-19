import React, {useState} from 'react'
import "./products.css"
import {AiOutlineRight} from "react-icons/ai"
import {RxArrowRight} from "react-icons/rx"
import {navbar, SecuriteMaison, SurveillanceEnergie, ControleEclairage, DivertissementDomicile} from "../../utils/OurProducts"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'


const Products = () => {
  const [activeBarSelection, setActiveBarSelection] = useState(0);
  const categories = [ControleEclairage, SecuriteMaison, SurveillanceEnergie, DivertissementDomicile]
  const [activeCategory, setActiveCategory] = useState(ControleEclairage)

  const handleBarSelection = (index, list) => {
    const emptyList = [];
    setActiveBarSelection(index)
    setActiveCategory(emptyList);
    setTimeout(() => {
      setActiveCategory(list[index])
    }, 100)
    
  }

  return (
    <section className='product' id='produits'>
      <div className="product__background">
        <div className="pbc-1">
          <div className="pbc-1__black"></div>
          <div className="pbc-1__white"></div>
        </div>
        <div className="pbc-2">
          <div className="pbc-2__top"></div>
          <div className="pbc-2__bottom">
            <div className="pbc-2__bottom-white"></div>
            <div className="pbc-2__bottom-blue"></div>
          </div>
        </div>
      </div>
      <div className="container product__container">
        <div className="product__1">
          <div className="product__1-section1">
            <div className="product__title">
              <div className="section__title">
                VOX Link:<br />Transformez votre maison avec nos produits d'automatisation et de câblage
              </div>
              <p className="normal__text">
                Découvrez notre gamme de produits d'automatisation de la maison et de câblage intelligent
                pour transformer votre maison en un espace de vie connecté et facile à contrôler.
              </p>
              <Link to="/vox-produits" className="button hero__button">
                Découvrir VOX Produits <AiOutlineRight />
              </Link>
            </div>
          </div>
          <div className="product__1-section2"> 
            <div className="section__subtitle">APPAREILLAGE</div>
          </div>
        </div>
        <div className="product__2">
          <div className="product__2-main">
            <div className="product__navbar">
              {
                navbar.map((item, i) => (
                  <span className={`product__link ${activeBarSelection === i? "pactive__link": ""}`} key={i} onClick={() => handleBarSelection(i, categories)}>{item}</span>
                ))
              }
            </div>
            <div className="product__images">
              {
                activeCategory.map((item, i) => (
                  <motion.div className="product__card" key={i}
                  layout
                  animate={{opacity: 1, scale: 1}}
                  initial={{opacity: 0.4, scale: 0.6}}
                  exit={{opacity: 0.4, scale: 0.6}}
                  transition={{duration: 0.2, ease: "easeInOut"}}
                  >
                    <img src={item.image} alt="Product Image" className="product__img" />
                    <div className="product__details">
                      <span className="pd__header">{item.title}</span>
                      <span className="pd__description">{item.description}</span>
                      <a href="#" className="pd__button">VOIR LES DÉTAILS</a>
                    </div>
                  </motion.div>
                ))
              }
            </div>
            <div className="product__footer">
              <Link to="/vox-produits" className="pf__text">Découvrir tous nos appareils VOX <RxArrowRight /></Link>
            </div>
          </div>
          <div className="product__2-secondary">
            <div className="nos__produits">NOS PRODUITS</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products

/**
 <div className="product__2">
          <div className="product__2-main">
            <div className="product__navbar">
              {
                navbar.map((item, i) => (
                  <span className={`product__link ${activeBarSelection === i? "pactive__link": ""}`} key={i} onClick={() => handleBarSelection(i, categories)}>{item}</span>
                ))
              }
            </div>
            <div className="product__images">
              {
                activeCategory.map((item, i) => (
                  <motion.div className="product__card" key={i}
                  layout
                  animate={{opacity: 1, scale: 1}}
                  initial={{opacity: 0.8, scale: 0.7}}
                  exit={{opacity: 0.8, scale: 0.7}}
                  transition={{duration: 0.2, ease: "easeInOut"}}
                  >
                    <img src={item.image} alt="Product Image" className="product__img" />
                    <div className="product__details">
                      <span className="pd__header">{item.title}</span>
                      <span className="pd__description">{item.description}</span>
                      <a href="#" className="pd__button">VOIR LES DÉTAILS</a>
                    </div>
                  </motion.div>
                ))
              }
            </div>
            <div className="product__footer">
              <a href="#" className="pf__text">Découvrir tous nos appareils VOX <RxArrowRight /></a>
            </div>
          </div>
          <div className="product__2-secondary">
            <div className="nos__produits">NOS PRODUITS</div>
          </div>
        </div>
 */