import React from 'react'
import Navigation from '../components/navigation/Navigation'
import Footer from '../components/footer/Footer'

const MainLayout = ({children}) => {
  return (
    <div className="main">
      <Navigation/>
      <div>{children}</div>
      <Footer/>
    </div>
  )
}

export default MainLayout