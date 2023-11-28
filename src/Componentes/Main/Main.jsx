import React from 'react'
import { MainContainer, OptionServices, OptionsPadre, Services } from './MainStyled'
import { MdScreenshotMonitor } from "react-icons/md";
import { PiPaintBrush } from "react-icons/pi";
import { BsEmojiSunglasses } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";

const Main = () => {
  return (
    <>
    <MainContainer>
        <Services>
          <h2>Hacemos tu pagina acorde a tus necesidades</h2>
          <p>Estas son algunas de nuestras caracteristicas al diseñar tu futura pagina web</p>
          <OptionsPadre>
          <OptionServices>

            <MdScreenshotMonitor className='IconoServices'/>
            <p>Nuestras paginas son adaptables a cualquier dispositivo</p>
          </OptionServices>
          <OptionServices>
            <PiPaintBrush className='IconoServices' />
            <p>Podes modificar, cargar, eliminar tus productos vos mismo</p>
          </OptionServices>
          <OptionServices>
            <BsEmojiSunglasses className='IconoServices' />
            <p>Diseños modernos, +20 plantillas para que elijas</p>
          </OptionServices>
          <OptionServices>
            <FaComputer className='IconoServices' />
            <p>Servicio tecnico durante el primer mes gratis</p>
          </OptionServices>
        </OptionsPadre>
        </Services>
    </MainContainer>
    </>
  )
}

export default Main