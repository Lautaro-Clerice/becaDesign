import styled from "styled-components";


export const EtapasContainer = styled.div`
width: 100%;
height: auto;
background-color: #0f8fff;
display: flex;
flex-direction: column;
align-items:center;
&:after {
    position:absolute;
    width:100%;
    height: 100px;
    content:"";
    background-color:#0f8fff;
    transform-origin: top right;
    transform: skewY(2deg)
}
`

export const TituloEtapas = styled.div`
    display: flex;
justify-content: center;
flex-direction: column;
align-items:center;
color: white;
margin-top: 60px;
h2 {
    font-size: 30px;
}
p {
    margin-top: -10px;
}

`
export const EtapasPadre = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap:wrap;
    gap: 60px;
    margin-top: 30px;

`
export const EtapasOptions = styled.div`
    border-radius: 15px;
    width: 250px;
    height: 240px;
    background-color: #fff;
    position: relative;
    margin-bottom: 60px;
    .numberUno {
        background-color: #ff8742;
    }
    .numberDos {
        background-color: rgb(56, 195, 255);
    }
    .numberTres {
        background-color: rgb(122, 255, 112);
    }
`
export const NumberEtapa = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-left:-25px;
    margin-top:-25px;
    position: absolute;
    background-color:#7038ff;
    color: white;
`

export const ContentEtapa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h4 {
        font-size: 18px;
        font-weight: 500;
        width: 90%;
        text-align: center;
        color: #152c5b;
    }
    .FaRegUser {
        color:#ff8742 ;
        margin-right: 5px;
    }
    .IoCodeSlash {
        color:rgb(56, 195, 255) ;
        margin-right: 10px;
    }
    .TbEyeStar {
        color:rgb(122, 255, 112) ;
        margin-right: 10px;
        font-size: 24px;
    }
`

export const OpcionesEtapas = styled.div`
    display:flex;
    justify-content:center;
    p {
        margin-top: -10px;
        width: 80%;
        color:#718096 ;
        text-align:center;
    }

`

