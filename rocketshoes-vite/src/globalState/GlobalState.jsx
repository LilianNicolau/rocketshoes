import { GlobalContext } from "./globalContext"
import { useState } from "react"

const GlobalState = (props) => {
    const [carrinho, setCarrinho] = useState([])
   
    const adicionarAoCarrinho = (produto) => {
        const novoProduto = carrinho.find((item) => item.id === produto.id)
        if (novoProduto === undefined) {
            setCarrinho([...carrinho, {...produto, quantidade: 1}])
        } else {
            const novoCarrinho = carrinho.map((item) => {
                if(item.id === produto.id) {
                    return {...novoProduto, quantidade: novoProduto.quantidade + 1}
                } else {
                    //retorna os outros produtos que já estão no carrinho
                    return item
                }
            })
            setCarrinho(novoCarrinho)
        }
    }

    // localStorage.setItem('carrinho', JSON.stringify(carrinho))
    // const carrinhoExistente = JSON.parse(localStorage.getItem('carrinho'))
    // console.log(carrinhoExistente);

    const context = {carrinho, setCarrinho, adicionarAoCarrinho}

    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState
