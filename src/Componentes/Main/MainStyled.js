import styled from "styled-components";

export const MainContainer = styled.main`
    width: 100%;
    overflow: hidden;
    height: auto;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    &:after {
    position:absolute;
    width:100%;
    height: 100px;
    content:"";
    top: -80px;
    background-color:#0E0B2B;
    transform-origin: top right;
    transform: skewY(-3deg)
}
    
`


export const Services = styled.div`
    width:90%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    h2 {
        text-align: center;
        color: #152c5b;
        font-size: 34px;
        font-weight: 500;
    }
    p {
        margin-top: -20px;
        color: #718096;
    }
`
export const OptionsPadre = styled.div`
    display: flex;
    justify-content: space-around;
    width: 90%;
    height: auto;
    flex-wrap: wrap;

`
export const OptionServices = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .IconoServices {
        font-size: 80px;
        color: #152c5b ;
    }
    p {
        font-weight: 400;
        margin-top: 10px;
        color: #142c5a;
        width: 250px;
        text-align: center;
    }
`

export const Planes = styled.div`

    width:90%;
    height: auto;
    margin-bottom: 70px;
    h2 {
        text-align: center;
        color: #152c5b;
        font-size: 34px;
        font-weight: 500;
    }
`
export const OptionsContainer = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: auto;
    gap: 20px;
    .masVendido {
        border:2px solid #006ECCba;
    }
`
export const PlanesOptions = styled.div`
    border-radius:4px;
    width: 300px;
    height: 600px;
    border: 1.5px solid #006ECC5c;
    display:flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    span {
        margin-top: -20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width:200px;
        height: 40px;
        background-color: #2f9dfe;
        color: white;
        border-radius: 45px;
        h5 {

        }
    }
    h3 {
        margin-top: 50px;
        font-size: 22px;
        color: #152c5b;
    }
    p {
        margin-top:-10px;
        width: 90%;
        color:#718096;
    }
    button {
        margin-top:20px;
        border: none;
        width: 150px;
        height: 60px;
        border-radius: 10px;
        font-size: 17px;
        a {
            text-decoration: none;
        color:white;
        }
    }
    .plan {
        background-color: #006ECC;
        color: #fff; 
        transition: .4s;
        &:hover {
            background-color: #005CAC;
        }
    }
    hr {
        margin: 30px;
        border: 1px solid #006ECC5c;
        width: 80%;
    }
    h4 {
        align-self: start;
        margin-left: 30px;
    }
    transition:.5s;
    &:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0px 5px 8px #80808096;
    }
    
`
export const DetailsPlan = styled.div`
    display: flex;
    flex-direction:column;
    align-items: start;
    margin-left: 30px;
    text-align: start;
    width:100%;
    p {
        margin-top:-10px;
        width: 90%;
        color:#718096;
        .IoCheckmark {
            color: green;
            margin-right: 5px;
        }

        .SlQuestion {
            cursor: pointer;
            margin-left: 20px;
        }
    }
    .Dispositivos{
        font-size: 14px;
    }

`