import React, { useContext } from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GlobalContext } from "../../globalState/globalContext";
import FormataPreco from "../../utils/formataPreco";
import { Button, Container, CardBody, CardImagem, CardText } from "./styles";


export default function CardProdutos({produto, adicionarAoCarrinho}) {

    const context = useContext(GlobalContext)
    const {carrinho} = context

    const produtoNoCarrinho = carrinho.find((item) => item.id === produto.id)
    console.log(produtoNoCarrinho);

    return (
        <Container >
            <CardImagem src={produto.imagem} />
                <CardBody >
                    <CardText >{produto.descricao}</CardText>
                    <CardText variant='precoItem'>{FormataPreco(produto.preco)}</CardText>
                    <Button variant="primary" onClick={() => adicionarAoCarrinho(produto)}>
                        <div>
                            {produtoNoCarrinho === undefined ? <AiOutlineShoppingCart size={20}/> : <p>{produtoNoCarrinho.quantidade}</p>}
                        </div>
                        <span>Adicionar ao carrinho</span> 
                    </Button>
                </CardBody>
        </Container>
    );
}