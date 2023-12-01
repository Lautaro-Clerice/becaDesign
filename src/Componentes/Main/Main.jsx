import React from 'react'
import { DetailsPlan, MainContainer, OptionServices, OptionsContainer, OptionsPadre, Planes, PlanesOptions, Services } from './MainStyled'
import { MdScreenshotMonitor } from "react-icons/md";
import { PiPaintBrush } from "react-icons/pi";
import { BsEmojiSunglasses } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";
import { SlQuestion } from "react-icons/sl";
import EtapasTrabajo from './Trabajo/EtapasTrabajo';

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
              <p>Plan perfecto para pequeños proyectos</p>
              <hr />
              <h4>Incluye</h4>
              <DetailsPlan>
              <p><IoCheckmark className='IoCheckmark'/>Landing page<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Gestion de Dominio<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Diseño de logo<SlQuestion className='SlQuestion'/></p>
              
              <p><IoCheckmark className='IoCheckmark'/>Maximo 3 secciones<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Hosting por un año<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Vinculo a Whatsapp y redes<SlQuestion className='SlQuestion'/></p>
              <p className='Dispositivos'><IoCheckmark className='IoCheckmark'/>Adaptable a todos los dispositivos<SlQuestion className='SlQuestion'/></p>
              <p className='Dispositivos'><IoCheckmark className='IoCheckmark'/>Vinculo a catalogo de productos<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Tiempo de entrega 20 dias<SlQuestion className='SlQuestion'/></p>

              </DetailsPlan>
              <button className='plan'>Consultar precio</button>
            </PlanesOptions>
            <PlanesOptions className='masVendido'>
              <span><h5>MAS VENDIDO</h5></span>
            <h3>Plan Business </h3>
              <p>Paquete enfocado en la venta de productos</p>
              <hr />
              <h4>Incluye</h4>
              <DetailsPlan>
              <p className='Dispositivos'><IoCheckmark className='IoCheckmark'/>Todo lo del plan Emprendedor y..<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>+20 plantillas para elegir<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Hasta 5 secciones<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Boton a Whatsapp<SlQuestion className='SlQuestion'/></p>
              <p className='Dispositivos'><IoCheckmark className='IoCheckmark'/>Seccion de Productos <SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Carrito<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>7 dias de soporte gratis<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Tiempo de entrega 40 dias<SlQuestion className='SlQuestion'/></p>
              </DetailsPlan>
              <button className='plan'>Consultar precio</button>
            </PlanesOptions>
            <PlanesOptions>
            <h3>Plan Premium</h3>
              <p>Atencion premium, personalizable 100%</p>
              <hr />
              <h4>Incluye</h4>
              <DetailsPlan>
              <p><IoCheckmark className='IoCheckmark'/>Todo lo del plan Business y.. <SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Pasarela de pago<SlQuestion className='SlQuestion'/></p>
              <p className='Dispositivos'><IoCheckmark className='IoCheckmark'/>Diseño de pagina personalizado<SlQuestion className='SlQuestion'/></p>
              <p className='Dispositivos'><IoCheckmark className='IoCheckmark'/>Formulario de contacto directo<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Animaciones Premium<SlQuestion className='SlQuestion'/></p>
              <p className='Dispositivos'><IoCheckmark className='IoCheckmark'/>Hasta 5 correos con tu nombre <SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Soporte gratis 15 dias<SlQuestion className='SlQuestion'/></p>
              <p><IoCheckmark className='IoCheckmark'/>Hasta 5 cambios Gratis<SlQuestion className='SlQuestion'/></p>
              </DetailsPlan>
              <button className='plan'>Consultar precio</button>
            </PlanesOptions>
          </OptionsContainer>
        </Planes>
        <EtapasTrabajo/>
    </MainContainer>
    </>
  )
}

export default Main