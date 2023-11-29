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
              <hr />
              <h4>Incluye</h4>
              <DetailsPlan>
              <p><IoCheckmark className='IoCheckmark'/>Pagina autoadministrable <SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Hasta 5 secciones<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Gestion de Dominio<SlQuestion className='SlQuestion'/></p>
              <p className='Dispositivos'><IoCheckmark className='IoCheckmark'/>Adaptable a todos los dispositivos<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Pasarela de pago<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Diseño de logo<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Carrito<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Vinculo a tus redes<SlQuestion className='SlQuestion'/></p>
              </DetailsPlan>
              <button className='plan'>Consultar precio</button>
            </PlanesOptions>
            <PlanesOptions>
            <h3>Plan emprendedor</h3>
              <p>Ideal para mostrar tus productos y darte a conocer</p>
              <hr />
              <h4>Incluye</h4>
              <DetailsPlan>
              <p><IoCheckmark className='IoCheckmark'/>Pagina autoadministrable <SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Hasta 5 secciones<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Gestion de Dominio<SlQuestion className='SlQuestion'/></p>
              <p className='Dispositivos'><IoCheckmark className='IoCheckmark'/>Adaptable a todos los dispositivos<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Pasarela de pago<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Diseño de logo<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Carrito<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Vinculo a tus redes<SlQuestion className='SlQuestion'/></p>
              </DetailsPlan>
              <button className='plan'>Consultar precio</button>
            </PlanesOptions>
            <PlanesOptions>
            <h3>Plan emprendedor</h3>
              <p>Ideal para mostrar tus productos y darte a conocer</p>
              <hr />
              <h4>Incluye</h4>
              <DetailsPlan>
              <p><IoCheckmark className='IoCheckmark'/>Pagina autoadministrable <SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Hasta 5 secciones<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Gestion de Dominio<SlQuestion className='SlQuestion'/></p>
              <p className='Dispositivos'><IoCheckmark className='IoCheckmark'/>Adaptable a todos los dispositivos<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Pasarela de pago<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Diseño de logo<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Carrito<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Vinculo a tus redes<SlQuestion className='SlQuestion'/></p>
              </DetailsPlan>
              <button className='plan'>Consultar precio</button>
            </PlanesOptions>
          </OptionsContainer>
        </Planes>
    </MainContainer>
    </>
  )
}

export default Main