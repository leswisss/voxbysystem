import { useState, useEffect } from 'react'
import './App.css'
import Navigation from './components/navigation/Navigation'
import Hero from './components/hero/Hero'
import Automation from './components/automation/Automation'
import Products from './components/products/Products'
import Interface from './components/interface/Interface'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import MainLayout from './layout/MainLayout'


const navHeight = 88;

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = 88;
      const sectionId = window.location.hash.substring(1);

      if (sectionId){
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement){
          const offsetTop = sectionElement.offsetTop - navbarHeight;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          })
        }
      }
    }

    window.addEventListener("hashchange", handleScroll)

    return () => {
      window.removeEventListener("hashchange", handleScroll)
    }
  }, []);

  return (
      <MainLayout>
        <Hero />
        <Automation/>
        <Products/> 
        <Interface/>
        <Contact/>
      </MainLayout>
  )
}

export default App
