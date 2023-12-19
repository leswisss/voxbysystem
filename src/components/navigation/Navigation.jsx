import React, {useState, useEffect} from 'react'
import "./navigation.css"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'

const Navigation = () => {
  const [activeNavBar, setActiveNavBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 500){
        setActiveNavBar(true)
      } else {
        setActiveNavBar(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })


  const navElements = [
    'acceuil',
    'services',
    'produits',
    'interface',
    'contact'
  ]

  //ActiveSideBar
  const [activeSideBar, setActiveSideBar] = useState(false);

  const handleNavIcon = () => {
    setActiveSideBar(!activeSideBar)
  }

  //So that when i click on the link the activeSidebar is set to false
  const handleLinkClick = () => {
    setActiveSideBar(false)
  }

  //Sidebar variants
  const sideVariants = {
    open: { right: "-32px" },
    closed: { right: "-400px" }
  };

  //SideLink Variants
  const linkVariants = {
    open: {x: 0},
    closed: {x: "800px"}
  }

  //Check if screen is < 1000px in width
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 850);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`navbar ${activeNavBar ? "activeNavbar": ""}`}>
      <div className="container navigation">
        <Link to="/" className="logo">
          <span className="logo__bold">V<span className="letter__o">O</span>X</span>
          <span className="logo__link">LINK</span>
        </Link>
        <motion.div className="nav__menu"
          animate={isMobile ? (activeSideBar ? "open" : "closed") : "open"}
          variants={sideVariants}
          transition={{
            duration: 0.7,
            type: "tween",
            ease: [.62,0,.6,.98],
            delay: !activeSideBar ? 1 : 0,
          }}
        >
          {
            navElements.map((element, i) => (
              <motion.a href={`/#${element}`} className={`nav__link ${activeNavBar && !isMobile ? "activeNavbarLinks": ""}`} key={i}
              animate={isMobile ? (activeSideBar ? "open" :"closed"): false}
              variants={linkVariants}
              transition={{
                duration: 0.25,
                type: "tween",
                ease: [.62,0,.6,.98],
                delay: i*0.2,
              }}
              onClick={() => handleLinkClick()}
              >{element}</motion.a>
            ))
          }
        </motion.div>
        <div className="nav__icon" onClick={() => handleNavIcon()}>
          <span className={`nav-line line-1 ${activeSideBar ?"activeLine1":""} ${activeNavBar ?"changeLineColor":""}`}></span>
          <span className={`nav-line line-2 ${activeSideBar ?"activeLine2":""} ${activeNavBar ?"changeLineColor":""}`}></span>
        </div>
      </div>
    </header>
  )
}

export default Navigation