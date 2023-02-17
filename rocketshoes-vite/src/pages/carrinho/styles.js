import styled from "styled-components";

export const Container = styled.div`
    background: #FFFFFF;
    border-radius: 4px;
    width: 940px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    section {
        display: flex;
        margin-top: 30px;
        margin-bottom: 42px;
    }
`
export const Produto = styled.div`
    color: #999999;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-left: 160px;
`

export const Qtd = styled.div`
    color: #999999;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-left: 443px;
`

export const Preco = styled.div`
    color: #999999;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-left: 69px;
`

export const RodapeCarrinho = styled.div`
    background: #FFFFFF;
    display: flex;
    /* margin-top: 50px; */
    border-radius: 4px;
`

export const Button = styled.button`
    background: #7159C1;
    border-radius: 4px;
    height: 42px;
    display: flex;
    width: 163px;
    justify-content: center;
    align-items: center;
    margin-left: 34px;
    margin-bottom: 38px;

    span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        font-weight: 700px;
        line-height: 16px;
        color: #FFFFFF;
    }
`
export const Total = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #999999;
    margin-left: 514px;
    margin-top: 10px;
    margin-right: 3px;
`
export const PrecoTotal = styled.h5`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    text-align: right;
    letter-spacing: -1.6px;
    color: #000000;
    margin-bottom: 41px;
`

