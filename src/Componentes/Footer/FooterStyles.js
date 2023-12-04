import styled from "styled-components";

export const FooterPadre = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    p {
        margin-top: 30px;
    text-align: center;
    background-color:#0E0B2B ;
    color:white;
    margin:0;
}
`
export const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    height: 200px;
    background-color: #0E0B2B;
    position: relative;
    &:after {
        z-index:-10 ;
    position:absolute;
    width:100%;
    height: 100px;
    top: -50px;
    content:"";
    background-color: #0E0B2B;
    transform-origin: top right;
    transform: skewY(-2deg)
}
@media (max-width:930px) {
    height: 250px;
}

`

export const LogoFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    h2 {
        color:white;
    }
    p {
        margin-top: -20px;
        color:#718096;
        margin-bottom: 30px;
    }
`

export const OptionsFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
export const RedesFooter = styled.div`
    display: flex;
    gap:30px;
    .iconFooter {
        color: white;
        font-size: 35px;
        cursor: pointer;
    }
`

export const ButtonFooter = styled.div`
    display: flex;
    gap: 20px;
    margin-top: -20px;
    margin-bottom: 30px;
    flex-wrap: wrap;
    justify-content: center;
    button {
    border: none;
    width: 150px;
    height: 50px;
    border-radius: 10px;
    font-size: 17px;
    }
    .Contacto {
    color: #006ECC ;
    transition: all.4s;
    &:hover {
        background-color:#D6D6D6 ;
    }
    }
    .Comprar {
        background-color: #006ECC;
        color: #fff; 
        transition: .4s;
            &:hover {
                background-color: #005CAC;
            }
}
`