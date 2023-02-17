import styled from "styled-components";

export const Container = styled.div`
    background: #FFFFFF;
    width: 300px;
    justify-content: center;
    margin-right: 20px;
    padding: 30px 10px;
    box-sizing: border-box; /* isso deixa os cards na mesma linha*/
    border-radius: 4px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    &:nth-child(3n+3){
        margin-right: 0;
    }
`
export const CardBody = styled.div`
    margin-top: auto;
`
export const CardImagem = styled.img`
    max-width: 100%;
    margin: 0 0 0 0;
`
export const CardText = styled.p`
    margin-top: 4px;
    margin-bottom: 10px;
    font-weight: ${({variant})=> {
        return variant=="precoItem" && "bold" 
    }};
    font-size: 16px;
    line-height: 21px;
 
`
export const Button = styled.button`
    background: #7159C1;
    border-radius: 4px;
    /* height: 42px; */
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
        flex: 1;
    }
    div {
        color: #FFFFFF;
        border-radius: 4px;
        line-height: 16px;
        background: #6059c1;
        padding: 11px 10px;
    }
    p{
        color: #FFFFFF;
        border-radius: 4px;
        line-height: 16px;
        background: #6059c1;
        padding: 5px 0 0 10px;
    }
    //para estilizar uma tag pelo atributo, prop que ela tiver
    /* background: ${({variant})=> {
        return variant=="primary" ? "red" : "yellow" 
    }} */
`