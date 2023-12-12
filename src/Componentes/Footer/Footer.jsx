import React from 'react'
import { FooterContainer, LogoFooter, OptionsFooter, FooterPadre, RedesFooter, ButtonFooter } from './FooterStyles'
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <>
    <FooterPadre>
      <FooterContainer>
        <LogoFooter>
          <h2>BecaDesign</h2>
          <p>¡Seguinos en nuestras redes!</p>
        </LogoFooter>
        <OptionsFooter>
          <ButtonFooter>
            <button className='Comprar'><a href="#planes">Comprar plan</a></button>
            <button className='Contacto'><a href="https://wa.link/1enlem">Contactanos</a></button>
          </ButtonFooter>
          <RedesFooter>
            <FaWhatsapp className='iconFooter'/>
            <FaInstagram className='iconFooter'/>
            <IoMailOpenOutline className='iconFooter'/>
          </RedesFooter>
        </OptionsFooter>
      </FooterContainer>
      <p>© 2023 <b>Lautaro Clerice.</b> Todos los derechos reservados.</p>
    </FooterPadre>
    </>
  )
}

export default Footer