import React from 'react'
import { LayoutWrapper } from './LayoutStyles'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Main from "../Main/Main"
import Footer from '../Footer/Footer'
const Layout =() => {
  return (
    <>
    
    <LayoutWrapper>
    <Navbar/>
    <Hero/>
    <Main/>
    <Footer/>
    </LayoutWrapper>
    </>
  )
}

export default Layout