import React from 'react'
import {HiOutlineArrowLongRight} from "react-icons/hi2"
import "./footer.css"

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <section className='section footer'>
      <div className="container footer__container">
        <div className="footer__main">
          <div className="main__1">
            <div className="footer__vox">
              V<span className='footer__o'>O</span>X
            </div>
            <span className="location normal__text">Douala PK17 <br />Enface Campus 3</span>
            <div className="location"> 
              <a href="tel: +237654570096"  className='normal__text'>{"(+237) 654570096"}</a>
              <br />
              <a href="mailto: info@voxsytem.cm" className='normal__text'>info@voxsytem.cm</a>
            </div>
          </div>
          <div className="main__1 margin__top">
            <span className="footer__header">
              DECOUVRIR
            </span>
            <a href="#" className='normal__text'>FAQ</a>
            <a href="/#contact" className='normal__text'>Demande de Devis</a>
            <a href="/#contact" className='normal__text'>Contact</a>
          </div>
          <div className="main__1 margin__top">
            <span className="footer__header">
              L'actu VOX Link
            </span>
            <span className='normal__text'>
              Pour recevoir toutes les informations du groupe VOX Link by SYSTEM, inscrivez-vous  à notre newsletter.
            </span>
            <div className="footer__input">
              <input type="email" placeholder='Votre Email' />
              <button type='submit'><HiOutlineArrowLongRight/></button>
            </div>
            <span className='normal__text'>
              Pour plus d'information sur le traitement de vos données personnelles, veillez consultez <a href="" className='notre__notice'> notre notice de 
              protection des données à caractère personnel.</a>
            </span>
          </div>
        </div>
        <div className="footer__secondary">
          <span className='system__logo'>
            BY <span className='system'>SYSTEM</span>
          </span>
          <div className="cookies">
            <a href='#' className="tiny__text">Politique de Cookies</a>
            <span className="tiny__text">Tous droits réservés SYSTEM {year}</span>
            <a href="#" className='tiny__text'>Termes et Conditions</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer