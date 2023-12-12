import React, { useState } from 'react'
import { LogoStyles, NavbarContainer, NavbarOptions, NavbarPadre } from './NavbarStyles'
import { IoBagHandleOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { LuSend } from "react-icons/lu";
import { IoCodeWorkingOutline } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <NavbarPadre>
        <NavbarContainer>
            <LogoStyles>
                <h2>BecaTemplates</h2>
            </LogoStyles>
            <NavbarOptions className={ isOpen ? 'open' : ''}>
                <ul>
                    <li><LuSend className='iconNavbar'/><a href="#">Contacto</a></li>
                    <li><IoCodeWorkingOutline className='iconNavbar'/>Nuestros Trabajos</li>
                    <li><MdAttachMoney className='iconNavbar'/><a href="#planes">Planes</a></li>
                    <li><IoPersonOutline className='iconNavbar'/><a href="#nosotros">Sobre nosotros</a></li>
                </ul>
                <button><IoBagHandleOutline className='IoBagHandleOutline'/><a href="https://wa.link/1yoki2">  Contratar</a></button>
                <IoIosClose className='IoIosClose' onClick={() => setIsOpen(false)}/>

            </NavbarOptions>
            <RxHamburgerMenu className='RxHamburgerMenu ' onClick={() => setIsOpen(!isOpen)}/>
        </NavbarContainer>
    </NavbarPadre>
  )
}

export default Navbar