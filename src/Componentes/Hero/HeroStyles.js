import styled from "styled-components";


export const HeroContainer = styled.div`
    width: 100%;
    height: 650px;
    background-color: #0E0B2B;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width:930px) {
    flex-direction: column;
    height: 1000px;
}
.whatsapp {
        border-radius: 50%;
        width: 60px;
        height: 60px;
        background-color: #24ff24;
        color: white;
        position:fixed;
        right: 10px;
        bottom: 20px;
        border: none;
        z-index: 10000000;
        transition: .2s;
        &:hover {
            transform: scale(1.07);
        }
        a {
            color: white;
        }
        .logo {
            font-size: 28px;
        }
    }
`

export const TextoPrincipal = styled.div`
width: 45%;
height: 600px;
display: flex;
flex-direction: column;
align-items: start;
text-align: start;
justify-content: center;
h1 {
    color: #fff;
    font-size: 38px;
    font-weight:400 ;
}
h2 {
    margin-top: -10px;
    font-size:26px;
    font-weight: 400;
    color:#006ECC;
}
p {

    margin-top:-20px;
    width:70%;
    text-align: start;
    color: #718096;
    font-size: 17px;
}
@media (max-width: 930px) {
    width: 90%;
    p {
        width:100%;
    }
}
`
export const ImgPrincipal = styled.div`
width: 45%;
height: 500px;
.pc {
    width: 100%;
    height: 70%;
    border-radius:10px;

}
.movil {
    position: absolute;
    left: 45%;
    border-radius: 10px;
    width: 20%;
    height: 450px;
    margin-top: 100px;
}
@media (max-width: 930px) {
    width: 90%;
    .movil {
        left:35%;
        width: 50%;
        height: 350px;
    }
}

`

export const Buttons = styled.div`
display: flex;
gap: 20px;
justify-content: center;
flex-wrap: wrap;
margin-bottom: 15px;
button {
    border: none;
    width: 150px;
    height: 50px;
    border-radius: 10px;
    font-size: 17px;
}
.FiArrowRight {
    margin-left: 5px;
}
.mas-info {
    color: #006ECC ;
    box-shadow: 0px 0px 5px #fff;
    transition: all.4s;
    &:hover {
        background-color:#D6D6D6 ;
    }
}
.plan {
    background-color: #006ECC;
    color: #fff; 
    box-shadow: 0px 0px 4px #006ECC ;
    transition: .4s;
    &:hover {
        background-color: #005CAC;
    }
}
`