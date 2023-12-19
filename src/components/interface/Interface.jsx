import React, {useState} from 'react'
import "./interface.css"
import voxinterface from "../../assets/interface.png"
import voxinterface2 from "../../assets/interface2.jpg"
import voxinterface3 from "../../assets/interface3.png"
import {RxArrowRight, RxArrowLeft} from "react-icons/rx"

const Interface = () => {
  const voxInterfaces = [voxinterface, voxinterface2, voxinterface3]

  const [activeImage, setActiveImage] = useState(0)

  const handleForwardClick = () => {
    if (activeImage < (voxInterfaces.length - 1)) {
      setActiveImage(activeImage + 1);
    } else {
      setActiveImage(0);
    }
  }

  const handleBackwardClick = () => {
    if (activeImage > 0){
      setActiveImage(activeImage - 1)
    } else {
      setActiveImage(voxInterfaces.length - 1)
    }
  }

  return (
    <section className='interface' id='interface'>
      <div className="container interface__container">
        <div className="interface__subtitle">
          <div className="section__subtitle">
            VOX INTERFACE
          </div>
        </div>
        <div className="interface__main">
          <div className="section__title">
            VOX Link:<br />Découvrez notre interface domotique révolutionnaire
          </div>
          <p className="normal__text">
          Notre interface utilisateur intuitive et facile à utiliser vous permet de contrôler 
          votre maison en toute simplicité. Découvrez une expérience domotique exceptionnelle 
          avec notre solution innovante.
          </p>
        </div>
        <div className="interface__wrapper">
          <div className="interface__images">
            {
              voxInterfaces.map((item, i) => (
                <img src={item} alt="VOX Interface Images" className={`interface__image ${activeImage===i?"activeInterface":""}`} key={i}/>
              ))
            }
            
          </div>
          <div className="interface__buttons">
            <span className="int__button btn-1" onClick={() => handleBackwardClick()}>PRÉCÉDENT</span>
            <span className="int__button btn-2" onClick={() => handleForwardClick()}>SUIVANT</span>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Interface