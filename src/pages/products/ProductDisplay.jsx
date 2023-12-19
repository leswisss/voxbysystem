import React, {useState, useEffect, useRef} from 'react'
import { navbar } from '../../utils/OurProducts'
import {BiSearch} from "react-icons/bi"
import {motion} from "framer-motion"
import { ControleEclairage, 
          SecuriteMaison, 
          SurveillanceEnergie, 
          DivertissementDomicile } from '../../utils/OurProducts'
import {AiOutlineLine, AiOutlineLeft, AiOutlineRight} from "react-icons/ai"



const ProductDisplay = () => {
  const newList = ["Tous", ...navbar]

  //Gallery
  const completeGallery = [...SecuriteMaison, ...ControleEclairage, ...DivertissementDomicile, ...SurveillanceEnergie, ...SecuriteMaison, ...ControleEclairage, ...SecuriteMaison, ...ControleEclairage, ...DivertissementDomicile,]
  const allList = [completeGallery, ControleEclairage, SecuriteMaison, SurveillanceEnergie, DivertissementDomicile]

  //Active Pbar Link
  const [activeLink, setActiveLink] = useState(0)
  const [activeList, setActiveList] = useState(completeGallery)



  //Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerpage, setPostPerpage] = useState(9)
  const [backclickIcon, setBackClickIcon] = useState(< AiOutlineLine/>)
  const [frontclickIcon, setFrontClickIcon] = useState(null)
  const [pages, setPages] = useState([]);


  const lastPostIndex = currentPage * postPerpage;
  const firstPostIndex = lastPostIndex - postPerpage;

  const currentPost = activeList.slice(firstPostIndex, lastPostIndex)

  useEffect(() => {
    const pageCount = Math.ceil(activeList.length / postPerpage);
    const newPages = [];
    for (let i = 1; i <= pageCount; i++) {
      newPages.push(i);
    }
    setPages(newPages);
  }, [activeList, postPerpage]);
  

  useEffect(() => {
    setFrontClickIcon(pages.length > 1 ? <AiOutlineRight/> : <AiOutlineLine/>)

    if (currentPage === pages.length){
      setFrontClickIcon(<AiOutlineLine/>)
    };
    setBackClickIcon(currentPage > 1 ? <AiOutlineLeft/> : <AiOutlineLine/>)

  }, [currentPage, pages])


  //Pagination Button Handlers
  const sectionElement = useRef(null);
  const handleForwardClick = () => {
    if (currentPage < pages.length){
      setCurrentPage((prev) => prev + 1)
    }

    //This is to make sure when user clicks on next page it scrolls to the top of the page.
    if (sectionElement.current){
      if(currentPage !== pages.length){
        const offsetTop = sectionElement.current.offsetTop - 88;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    }
  }

  const handleBackwardClick = () => {
    if (currentPage > 1){
      setCurrentPage((prev) => prev - 1)
    }

    //This is to make sure when user clicks on next page it scrolls to the top of the page.
    if (sectionElement.current){
      if(currentPage !== 1){
        const offsetTop = sectionElement.current.offsetTop - 88;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    }
  }


  const handleLinkClick = (i, list) => {
    setCurrentPage(1) // For the current to be reset to 0
    const fakeList = []
    setActiveLink(i)
    setActiveList(fakeList)
    setTimeout(() => {
      setActiveList(list[i])
    }, 200)
    console.log(pages.length)
  }

  
  //Active Search Bar
  const [searchBar, setSearchBar] = useState(false)

  const handleSearchClick = () => {
    setSearchBar(true)
  }

  
  return (
    <section className='product__display'>
      <div className="container display__container">
        <div className="display__navbar">
          <div className="navbar__links">
            {
              newList.map((item, i) => (
                <span className={`pnavbar__link ${activeLink === i ? "activepbarLink": ""}`} key={i}
                onClick={() => handleLinkClick(i, allList)}
                >{item}</span>
              ))
            }
          </div>
          <div className="search">
            <motion.div className="searchbar"
            animate={{right: searchBar? 0 : "-100vw"}}
            transition={{duration: 0.5, ease: "easeInOut", delay: searchBar? 0.2: 0}}
            >
              <input type="text" placeholder='Recherche'/>
              <BiSearch/>
            </motion.div>
            <motion.div className="searchdisplay" onClick={() => handleSearchClick()}
            animate={{right: searchBar? -600 : 0}}
            transition={{duration: 0.5, ease: "easeInOut"}}
            >
              <BiSearch/>
              <span className="search__text">RECHERCHE</span>
            </motion.div>
          </div>
        </div>
        <div className="display__content" id="display__content" ref={sectionElement}>

          {
            currentPost.map((item, i) => (
              <motion.div className="display__card" key={i}
              layout
              animate={{opacity: 1, scale: 1}}
              initial={{opacity: 0.4, scale: 0.6}}
              exit={{opacity: 0.4, scale: 0.6}}
              transition={{duration: 0.2, ease: "easeInOut"}}
              >
                <img src={item.image} alt={item.title} className="display__img" />
                <div className="display__desc">
                  <span className="display__header">{item.title}</span>
                  <p className="display__text">{item.description}</p>
                  <button className="display__cta">VOIR LES DÉTAILS</button>
                </div>
              </motion.div>
            ))
          }
        </div>
        <div className="pagination__container">
          <div className="pagination">
            <span onClick={() => handleBackwardClick()}>{backclickIcon}</span>
            <span> {currentPage} / {pages.length}</span>
            <span onClick={() => handleForwardClick()}>{frontclickIcon}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDisplay