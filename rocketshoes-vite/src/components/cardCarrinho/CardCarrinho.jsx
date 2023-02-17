import React from "react";
import { Container, Imagem, Paragrafo, Descricao, PrecoUnitario, NumeroItens, PrecoUnitarioVezesNumeroItens, IconeRemove, IconeAdiciona, Separador, IconeDeleta } from './styles.js';
import { IoRemoveOutline, IoAddOutline } from 'react-icons/io5';
import { MdDeleteForever } from 'react-icons/md';
import FormataPreco from "../../utils/formataPreco.js";

export default function CardCarrinho(
    {produto, deletarItemDoCarrinho, subtrairUmItemDoCarrinho, adicionarAoCarrinho}
) {

    const precoUnitarioVezesNumeroItens = produto.preco * produto.quantidade
    
    return ( 
        <Container>
            <Imagem src={produto.imagem}/>
            <Paragrafo>
                <Descricao>{produto.descricao}</Descricao>
                <PrecoUnitario>{FormataPreco(produto.preco)}</PrecoUnitario>
            </Paragrafo>
            <IconeRemove onClick={() => subtrairUmItemDoCarrinho(produto)}>
                <IoRemoveOutline size={10}/>
            </IconeRemove>
            <NumeroItens>{produto.quantidade}</NumeroItens>
            <IconeAdiciona onClick={() => adicionarAoCarrinho(produto)}>
                <IoAddOutline size={10}/>
            </IconeAdiciona>
            <PrecoUnitarioVezesNumeroItens>
                {FormataPreco(precoUnitarioVezesNumeroItens)}
            </PrecoUnitarioVezesNumeroItens>
            <IconeDeleta onClick={() => deletarItemDoCarrinho(produto)}>
                <MdDeleteForever size={24}/>
            </IconeDeleta>
        </Container>
    );
}
