import styled from "styled-components";


export const HeroContainer = styled.div`
    width: 100%;
    height: 600px;
    background-color: #0E0B2B;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width:930px) {
    flex-direction: column;
    height: 800px;
}
`

export const TextoPrincipal = styled.div`
width: 45%;
height: 600px;
display: flex;
flex-direction: column;
align-items: start;
text-align: center;
justify-content: center;
h1 {
    color: #fff;
    font-size: 40px;
    font-weight:400 ;
}
h2 {
    margin-top: -10px;
    font-size: 35px;
    font-weight: 400;
    color:#006ECC;
}
p {
    text-align: start;
    color: #718096;
    font-size: 18px;
}
@media (max-width: 930px) {
    width: 90%;
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