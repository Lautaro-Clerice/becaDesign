import React from 'react'
import { HeroContainer, ImgPrincipal, TextoPrincipal, Buttons } from './HeroStyles'
import ImgMovil from "../../Img/Becamovil.png"
import ImgPc from "../../Img/Becapc.png"
import { FiArrowRight } from "react-icons/fi";


const Hero = () => {
  return (
    <HeroContainer>
      <TextoPrincipal>
        <h1>Lorem ipsum dolor sit.</h1>
        <h2>Lorem, ipsum dolor.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus nostrum numquam iste aliquam veritatis autem?</p>
        <Buttons>
        <button className='plan'>Elegir plan</button>
        <button className='mas-info'>Mas info <FiArrowRight className='FiArrowRight'/></button>
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