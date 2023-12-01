import React from 'react'
import { ContentEtapa, EtapasContainer, EtapasOptions, EtapasPadre, NumberEtapa, OpcionesEtapas, TituloEtapas } from './EtapasStyles'
import { FaRegUser } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { TbEyeStar } from "react-icons/tb";
const EtapasTrabajo = () => {
  return (
    <>
    
    <EtapasContainer>
        <TituloEtapas>
            <h2>Nuestra modalidad de trabajo</h2>
            <p>Conoce nuestras etapas de trabajo de principio a fin!</p>
        </TituloEtapas>
        <EtapasPadre>
            <EtapasOptions>
                <NumberEtapa className='numberUno'>
                    1
                </NumberEtapa>
                <ContentEtapa>
                    <h4> <FaRegUser className='FaRegUser'/>
                    Acordar necesidades del cliente</h4>
                </ContentEtapa>
                <OpcionesEtapas>
                    <p> Acordamos el diseño, logo, y las necesidades del cliente en cuanto a la pagina</p>
                </OpcionesEtapas>
            </EtapasOptions>
            <EtapasOptions>
                <NumberEtapa className='numberDos'>
                    2
                </NumberEtapa>
                <ContentEtapa>
                    <h4><IoCodeSlash className='IoCodeSlash'/>Comenzamos a desarrollar!</h4>
                </ContentEtapa>
                <OpcionesEtapas>
                    <p>Esta es la etapa mas importante, en la que diseñamos tu pagina acorde a lo que hayamos acordado en la anterior etapa.</p>
                </OpcionesEtapas>
            </EtapasOptions>
            <EtapasOptions>
                <NumberEtapa className='numberTres'>
                    3
                </NumberEtapa>
                 <ContentEtapa>
                    <h4><TbEyeStar className='TbEyeStar'/>Revision junto al cliente</h4>
                </ContentEtapa>
                <OpcionesEtapas>
                    <p>Revisamos lo desarrollado y ultimamos detalles si necesita algun cambio antes de la entrega</p>
                </OpcionesEtapas>
            </EtapasOptions>
        </EtapasPadre>
    </EtapasContainer>
    </>
  )
}

export default EtapasTrabajo