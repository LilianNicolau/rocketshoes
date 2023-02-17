import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    border-bottom: 1px solid #EEEEEE;
    margin: 0 30px 42px;
    flex: 1; //empurra o conteúdo para o canto
`

export const Imagem = styled.img`
    margin-right: 30px;
    width: 100px;
    height: 100px;
`

export const Paragrafo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1; 
`

export const Descricao = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    color: #333333;
    margin-right: 253px;
`

export const PrecoUnitario = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
`

export const NumeroItens = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    color: #666666;
    border: 1px solid #DDDDDD;
    border-radius: 4px;
    width: 51px;
    height: 30px;
    padding: 0 0 0 12px;
`
export const IconeRemove = styled.div`
    font-family: 'material';
    font-size: 20px;
    line-height: 23px;
    color: #7159C1;
    width: 20px;
    height: 20px;
    border: 1px solid #DDDDDD;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    margin-top: 6px;
    cursor: pointer;
`

export const IconeAdiciona = styled.div`
    font-family: 'material';
    font-size: 20px;
    line-height: 23px;
    color: #7159C1;
    width: 20px;
    height: 20px;
    border: 1px solid #DDDDDD;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    margin-top: 6px;
    cursor: pointer;
`

export const PrecoUnitarioVezesNumeroItens = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    margin-left: 25px;
`

export const IconeDeleta = styled.div`
    margin-left: 30px;
    height: 24px;
    width: 24px;
    color: #7159C1;
    cursor: pointer;
`

export const Separador = styled.div`
    width: 880px;
    height: 1px;
    margin-left: 30px;
    margin-bottom: 42px;
`



