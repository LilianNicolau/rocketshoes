import Header from "../../components/header/Header";
import CardCarrinho from "../../components/cardCarrinho/CardCarrinho"; 
import { Container, Produto, Qtd, Preco, RodapeCarrinho, Button, Total, PrecoTotal } from './styles'
import { useContext } from "react";
import { GlobalContext } from '../../globalState/globalContext';
import FormataPreco from "../../utils/formataPreco";

export default function Carrinho() {

    const context = useContext(GlobalContext)
    const {carrinho, setCarrinho, adicionarAoCarrinho} = context

    const subtrairUmItemDoCarrinho = (produto) => {
        const produtoNoCarrinho = carrinho.find((item) => item.id === produto.id)
        if(produtoNoCarrinho.quantidade > 1) {
            const novoCarrinho = carrinho.map((item) => {
                if(item.id === produto.id) {
                    return {...produtoNoCarrinho, quantidade: produtoNoCarrinho.quantidade - 1}
                } else {
                    return item
                }
            })
            setCarrinho(novoCarrinho)
        } else {
            const novoCarrinho = carrinho.filter((item) => {
                return item.id !== produto.id
            })
            setCarrinho(novoCarrinho)
        }
    }

    const deletarItemDoCarrinho = (produto) => {
        const novoCarrinho = carrinho.filter((item) => {
            return (item.id !== produto.id)
        })
        setCarrinho(novoCarrinho)
    }

    let somaPrecoTotal = 0
        for(const item of carrinho) {
            somaPrecoTotal = somaPrecoTotal + item.preco * item.quantidade
        }

    const mostrarProdutosDoCarrinho = carrinho.map((item) => {
        return <CardCarrinho  
            adicionarAoCarrinho = {adicionarAoCarrinho}
            subtrairUmItemDoCarrinho = {subtrairUmItemDoCarrinho}
            deletarItemDoCarrinho = {deletarItemDoCarrinho}
            key={item.id} 
            produto={item}
        />
    })

    const path = window.location.pathname
    
    return (
        <>
            <Header path={path}/>
            <Container adicionarAoCarrinho = {adicionarAoCarrinho}>
                <section>
                    <Produto>PRODUTO</Produto>
                    <Qtd>QTD</Qtd>
                    <Preco>PREÇO</Preco>
                </section> 
                    {mostrarProdutosDoCarrinho}
                <RodapeCarrinho>
                    <Button variant="primary" >
                        <span>FINALIZAR PEDIDO</span>
                    </Button>
                    <Total>TOTAL</Total>
                    <PrecoTotal>{FormataPreco(somaPrecoTotal)}</PrecoTotal>
                </RodapeCarrinho>  
            </Container>
        </>
    );
}
