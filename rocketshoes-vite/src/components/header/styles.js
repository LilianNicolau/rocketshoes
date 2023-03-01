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

export const Buscar = styled.div`
    input {
        background: #FFFFFF;
        border-radius: 5px;
        padding: 0 24px;
        font-family: 'Roboto';
        font-style: normal;
        font-size: 14px;
        border: none;
        height: 40px;
        width: 300px;
    }
`

export const Select = styled.select`
    font-family: 'Roboto';
    font-style: normal;
    font-size: 14px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 0 24px;
    border: none;
    height: 40px;
    width: 150px;
`


export const Option = styled.option`
    font-family: 'Roboto';
    font-style: normal;
    font-size: 14px;
    border-radius: 5px;
    padding: 0 24px;
    border: none;
    background: #FFFFFF;
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