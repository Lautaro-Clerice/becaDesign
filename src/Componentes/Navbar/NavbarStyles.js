import styled from "styled-components";

export const NavbarContainer = styled.div`
    width: 90%;
    height: 80px;
    background-color: #0E0B2B;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #718096;
    overflow: hidden;
    .IoIosClose {
        display: none;
    }

    .RxHamburgerMenu {
        display: none;
    }

    @media (max-width: 930px) {
        .RxHamburgerMenu {
            display: flex;
            color: #fff;
            font-size: 28px;
        }
        .IoIosClose {
            display: flex;
            position: absolute;
            color: #006ECC;
            font-size: 36px;
            border-radius: 10px;
            background-color: white;
        }
    }
`;

export const NavbarPadre = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #0E0B2B;
    overflow: hidden;
`;

export const LogoStyles = styled.div`
    width: 250px;
    color: #fff;
`;

export const NavbarOptions = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
     overflow-x: hidden;
     .iconNavbar {
        display:none;
      }
    ul {
        display: flex;
        align-items: center;
        width: 60%;
        justify-content: space-between;
        flex-direction: row;
    }

    li {
        cursor: pointer;
        list-style: none;
        color: #d4dadf;
        transition: 0.4s;

        &:hover {
            color: #fff;
        }
    }

    button {
        border-radius: 10px;
        border: none;
        width: 120px;
        height: 40px;
        background-color: white;
        color: #006ECC;
        font-size: 14px;
        font-weight: 600;
        transition: 0.3s;

        &:hover {
            background-color: #006ECC;
            color: #fff;
        }

        .IoBagHandleOutline {
            color: 006ECC;
        }
    }
    
    @media (max-width: 930px) {
        z-index: 10000;
        flex-direction: column;
        width: 350px;
        height: 100%;
        position: fixed;
        top: 1px;
        right: 0;
        justify-content: start;
        align-items: start;
        border-radius: 10px;
        background-color: #fff;
        transform: translateY(-200%);
      transition: all .3s ease;
      .iconNavbar {
        display:flex;
      }
        &.open {
            transform: translateY(0);
        }
        ul {
            flex-direction: column;
            align-items: start;
            width: 100%;
        }

        li {
            font-size: 16px;
            gap: 20px;
            display: flex;
            margin-top: 40px;
            color: #0E0B2B;
        }

        button {
            margin-left: 40px;
        }
    }
`;
