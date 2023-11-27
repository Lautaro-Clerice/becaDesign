import React from 'react'
import { LayoutWrapper } from './LayoutStyles'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Main from "../Main/Main"
const Layout =() => {
  return (
    <>
    
    <LayoutWrapper>
    <Navbar/>
    <Hero/>
    <Main/>
    </LayoutWrapper>
    </>
  )
}

export default Layout