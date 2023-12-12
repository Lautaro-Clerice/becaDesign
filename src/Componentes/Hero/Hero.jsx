import React from 'react'
import { HeroContainer, ImgPrincipal, TextoPrincipal, Buttons } from './HeroStyles'
import ImgMovil from "../../Img/Becamovil.png"
import ImgPc from "../../Img/Becapc.png"
import { FiArrowRight } from "react-icons/fi";
import {FaWhatsapp } from "react-icons/fa6";

const Hero = () => {
  return (
    <HeroContainer>
      <button className='whatsapp'><a href="https://wa.link/ajdwep"><FaWhatsapp className='logo'/></a></button>
      <TextoPrincipal>
        <h1>Buscas destacar con tu pagina web?</h1>
        <h2>En BecaTemplates tenemos lo que necesitas</h2>
        <p>Armamos tu pagina web para que puedas mostrar tus productos o vender tus servicios!</p>
        <Buttons>
        <button className='plan'><a href="#planes">Elegir plan</a></button>
        <button className='mas-info'><a href="https://wa.link/wzgmao">Mas info</a> <FiArrowRight className='FiArrowRight'/></button>
        </Buttons>
      </TextoPrincipal>
      <ImgPrincipal>
      <img className='pc' src={ImgPc} alt="beca" />
      <img className='movil' src={ImgMovil} alt="beca" />
      </ImgPrincipal>
      </HeroContainer>
  )
}

export default Hero