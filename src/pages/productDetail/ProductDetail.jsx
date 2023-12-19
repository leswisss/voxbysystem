import React, {useState} from 'react'
import MainLayout from '../../layout/MainLayout'
import "./productdetail.css"
import IMG from "../../assets/light3.jpg"
import IMG2 from "../../assets/light.jpg"
import IMG3 from "../../assets/light5.jpg"
import IMG4 from "../../assets/light6.jpg"
import {TfiAngleRight} from "react-icons/tfi"
import { Link } from 'react-router-dom'

const ProductDetail = () => {
  const images = [IMG, IMG2, IMG3, IMG4]
  const specs = [
    "Commutateur de lumière à un seul pôle qui nécessite un fil neutre",
    "Certifié UL et ne nécessite pas de concentrateur",
    "Fonctionne avec Alexa et Google Home en utilisant une connexion Wi-Fi 2,4 GHz",
    "Vendu en paquet de 1 avec 3 compteurs"
  ]

  const [activeImage, setActiveImage] = useState(0);

  const handleImageClick = (i) => {
    setActiveImage(i)
  }

  //Contact card slider
  const [activeCard, setActiveCard] = useState(false);

  const handleActiveCard = () => {
    setActiveCard((prev) => !prev)
  }

  return (
    <div className='product__detail-exception'>
      <MainLayout>
        <section className='details__section'>
          <div className="detail__navbar">

          </div>
          <div className="container detail__navbar-2">
            <div className="detail__nav-wrapper">
              <Link to="/vox-produits" className="detail__link">VOX PRODUITS</Link> /
              <a href="" className="detail__link">CONTRÔLE ÉCLAIRAGE</a> /
              <span className="detail__link">INTERRUPTEUR WIFI ADORNE</span>
            </div>
          </div>
          <div className="container product-detail__container">
            <div className="product__img-detail">
              <div className="main-product__images">
                <img src={images[activeImage]} alt="" className="main__img" />
                <div className="other__images">
                  {
                    images.map((image, i) => (
                      <img src={image} alt="Product Image" className={`main__img1 ${activeImage === i ? "active__main": ""}`} key={i} 
                      onClick={() => handleImageClick(i)}
                      />
                    ))
                  }
                </div>
              </div>
              <div className="product__description-container">
                <div className="product__name">INTERRUPTEUR WIFI ADORNE</div>
                <div className="product__category">CONTRÔLE ÉCLAIRAGE</div>
                <span className="product__rating">TOP RATING</span>
                <p className="product__description-text">
                  Interrupteur de lumière intelligent qui vous permet de contrôler vos lumières à distance.
                  Il s'agit d'un commutateur à un seul pôle qui nécessite un fil neutre pour fonctionner. 
                  Il utilise une connexion Wi-Fi 2,4 GHz pour se connecter à votre réseau domestique et fonctionne
                  avec les assistants vocaux populaires tels qu'Alexa et Google Home. Cela signifie que vous pouvez
                  utiliser votre voix pour allumer et éteindre les lumières ou les contrôler à partir de votre
                  smartphone ou tablette.
                </p>
                <span  className="call__ta"
                onClick={() => handleActiveCard()}
                >Vérifiez la disponibilité <TfiAngleRight className={activeCard ? "active__svg": ""}/></span>
                <div className="contact__mini-card">
                  <div className={`call__us ${activeCard ? "active__callus" : ""}`}>
                    <span>Appelez-nous au <a href="tel:+237654570096">+237 654570096</a></span>
                    <span>Envoyez-nous un e-mail à <a href="mailto:info@voxsystem.cm">info@voxsystem.cm</a></span>
                    <span>Envoyez-nous un message <a href='/#contact'>ici</a></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="a__propos-product">
              <span className="main-product__header">À propos de cet article</span>
              <ul className="main-product__specs">
                {
                  specs.map((spec, i) => (
                    <li className="main-product__spec" key={i}>{spec}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        </section>
      </MainLayout>
    </div>
  )
}

export default ProductDetail