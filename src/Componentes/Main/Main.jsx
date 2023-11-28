import React from 'react'
import { DetailsPlan, MainContainer, OptionServices, OptionsContainer, OptionsPadre, Planes, PlanesOptions, Services } from './MainStyled'
import { MdScreenshotMonitor } from "react-icons/md";
import { PiPaintBrush } from "react-icons/pi";
import { BsEmojiSunglasses } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";
import { SlQuestion } from "react-icons/sl";

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
        <Planes>
          <h2>Elegi el plan ideal para tu negocio</h2>
          <OptionsContainer>
            <PlanesOptions>
              <h3>Plan emprendedor</h3>
              <p>Ideal para mostrar tus productos y darte a conocer</p>
              <button className='plan'>Consultar precio</button>
              <hr />
              <h4>Caracteristicas</h4>
              <DetailsPlan>
              <p><IoCheckmark className='IoCheckmark'/>Pagina auto administrable <SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/> <SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Pagina auto administrable <SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Pagina auto administrable <SlQuestion className='SlQuestion'/></p>

              </DetailsPlan>
            </PlanesOptions>
            <PlanesOptions>

            </PlanesOptions>
            <PlanesOptions>

            </PlanesOptions>
          </OptionsContainer>
        </Planes>
    </MainContainer>
    </>
  )
}

export default Main