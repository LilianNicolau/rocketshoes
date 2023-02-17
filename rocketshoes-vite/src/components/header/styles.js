import styled from "styled-components";

export const HeaderContainer = styled.div`
    margin: 52px auto;
    width: 940px;
    display: flex;
    justify-content: space-between;
    
`
export const Logo = styled.div`
    display: flex;
    color: #FFFFFF;
    svg {
        margin-left: 8px;
    }
`
export const NomeLoja = styled.h1`
    color: #FFFFFF;
    cursor: pointer;
        transition: .2s filter;
    &:hover {
        filter: brightness(0.9)
    }
`
export const Nav = styled.nav`
   display: flex;
   svg {
    margin-left: 8px;
   }
`

export const MeuCarrinho = styled.h4`
    color: #FFFFFF;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    margin-right: 0px;
    cursor: pointer;
        transition: .2s filter;
    &:hover {
        filter: brightness(0.9)
    }
`

export const NumeroItens = styled.h5`
    color: #FFFFFF;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: right;
    mix-blend-mode: normal;
    opacity: 0.6;
`