import React, {useState}from 'react'
import "./contact.css"
import PhoneInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import 'react-phone-number-input/style.css'
import {GrStar} from "react-icons/gr"
import { RxArrowLeft, RxArrowRight } from 'react-icons/rx';
import Testimony from "../../assets/testimony.jpg"
import TestimonyDetails from '../../utils/Testimonials';

const Contact = () => {
  const [value, setValue] = useState();

  const UserRating = ({ numberOfStars }) => {
    const stars = [];
  
    for (let i = 0; i < numberOfStars; i++) {
      stars.push(<GrStar key={i} />);
    }
  
    return <div className="user__rating">{stars}</div>;
  };

  //Testimonial Slider
  const [activeSlide, setActiveSlide] = useState(0)

  const handleForwardClick = () => {
    if (activeSlide < TestimonyDetails.length -1 ){
      setActiveSlide(activeSlide + 1)
    } else {
      setActiveSlide(0)
    }
  }

  const handleBackwardClick = () => {
    if (activeSlide > 0){
      setActiveSlide(activeSlide - 1)
    } else{
      setActiveSlide(TestimonyDetails.length -1)
    }
  }

  return (
    <section className='contact' id='contact'>
      <div className="container contact__container">
        <div className="form__container">
          <div className="logo__container">
            <div>
              <span className='contact__vox'>V<span className='contact__o'>O</span>X</span>  <span className='contact__link'>LINK</span>
            </div>
          </div>
          <div className="form__wrap">
            <div className="form__wrapper">
              <div className="form__header">Contactez Nous</div>
              <p className="form__description">
                N'hésitez pas à nous contacter  pour des solutions en domotique sur mesure.
              </p>
              <div className="form__input">
                
                <input type="text" placeholder='Nom Complet'/>
              </div>
              <div className="form__input">
                <input type="email" placeholder='Email'/>
              </div>
              <div className="tel__input">
                <PhoneInput
                  flags={flags}
                  value={value}
                  onChange={setValue}
                  defaultCountry='CM'
                  placeholder="Numéro de Téléphone"
                />
              </div>
              <div className="textarea">
                <textarea name="" placeholder='Comment pouvons-nous vous aider?'></textarea>
              </div>
              <div className='contact__cta'>
                <button type='submit' className="send__button">ENVOYER</button>
                <span className="prefer__email">Préférez-vous l'email ? <a href='mailto:info@voxsystem.cm' className="email__bold">info@voxsystem.cm</a></span>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial__container">
          <div className="testimonial__wrapper">
            {
              TestimonyDetails.map((item, i) => (
                <div className={`testimonial__card ${activeSlide === i ? "activeTestimony" :""}`} key={i}>
                  <img src={item.image} alt="Testimony" className='testimony__img'/>
                  <div className="testimony">
                    <p className="testimony__text">
                      “{item.description}”
                    </p>
                    <div className="user__name-rating">
                      <span className="user__name">
                        {item.name}
                      </span>
                      <UserRating numberOfStars={item.stars}/>
                    </div>
                    <div className="user__level-slider">
                      <div className="user__level">{item.category}, {item.workplace}</div>
                      <div className="slider__buttons">
                        <span className="slider__button" onClick={() => handleBackwardClick()}><RxArrowLeft /></span>
                        <span className="slider__button" onClick={() => handleForwardClick()}><RxArrowRight /></span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact