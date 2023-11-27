import React from 'react'
import { LayoutWrapper } from './LayoutStyles'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'

const Layout =() => {
  return (
    <>
    <LayoutWrapper>
    <Navbar/>
    <Hero/>
    </LayoutWrapper>
    </>
  )
}

export default Layout