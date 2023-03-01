import { useContext, useState } from 'react';
import CardProdutos from '../../components/cardProduto/CardProdutos';
import Header from '../../components/header/Header';
import listaProdutos from '../../shoes.json';
import { Container, Buscar } from './style'
import { GlobalContext } from '../../globalState/globalContext';

export default function PaginaPrincipal() {
   
    const context = useContext(GlobalContext)
    const {adicionarAoCarrinho} = context

    const [listaDeProdutos, setListaDeProdutos] = useState(listaProdutos)

    const handleAdicionarProdutos =(event) => {
        setListaDeProdutos([...listaDeProdutos,
            {
                "id": "7",
                "nome": "Tênis masculino",
                "imagem": "https://static.netshoes.com.br/produtos/tenis-mizuno-wave-titan-2/06/2FU-6367-006/2FU-6367-006_zoom2.jpg?ts=1657368380&ims=326x",
                "descricao": "Tênis infantil",
                "preco": 359.90,
                "quantidade": 0
            }
        ])
    }

    const handleFiltrar = (event) => {
        if(event.target.value === '') {
            setListaDeProdutos(listaProdutos)
            return 
        } 
        const listaFiltrada = listaDeProdutos.filter((item) => {
            return item.descricao.includes(event.target.value) 
        })
        setListaDeProdutos(listaFiltrada) 
    }

    const handleOrganizarPorPreco = (event) => {
        if(event.target.value === 'menor'){
            const ordenandoMenorPreco = listaDeProdutos.sort((a,b) => a.preco - b.preco)
            setListaDeProdutos(ordenandoMenorPreco)
        } else if(event.target.value === 'maior') {
            const ordenarMaiorPreco = listaDeProdutos.sort((a,b) => b.preco - a.preco)
            setListaDeProdutos(ordenarMaiorPreco);
        }
    }
    console.log(listaDeProdutos);

    return (
    <>
        <Header
            handleFiltrar = {handleFiltrar}
            handlePreco = {handleOrganizarPorPreco}
        /> 
        <div></div>
        {/* <button onClick={handleAdicionarProdutos}>Adicionar</button> */}
        <Container>
            {listaDeProdutos.map((item) => {
                return(
                    <CardProdutos 
                        produto={item} 
                        key={item.id} 
                        adicionarAoCarrinho = {adicionarAoCarrinho}
                    />
                )
            })}
        </Container>
    </>
    );
}


// function adicionarAoCarrinho(produto) {
//     //1) verificar se o produto.id === ao que está guardado no lista de produtos, recebo e guardo na variável
//     //1) verificar se produto já existe através do id no carrinho, função find
//     //se ele existe, vamos colocar somente a quantidade
//     //se ele não existir, adicionar produto no carrinho (função setCarrinho) e alterar a quantidade
//     //de 0 para 1
//     //no react, não conseguimos alterar array diretamente no array, criamos cópia primeiro pra depois 
//     //adicionar a cópia a esse array (spread)
// }

//maneira de fazer o filter dos produtos
// const handleFiltrar = (event) => {
//     const listaFiltrada = listaDeProdutos.filter((item) => {
//        //se tiver algum valor dentro do input, voltar o valor, se não, voltar a lista inteira
//         return item.descricao.includes(event.target.value) 
//     })
//     setListaFiltrada(listaFiltrada) 
// }

//     return (
//     <>
//         <Header/>
//         <button onClick={handleAdicionarProdutos}>Adicionar</button>
//         <div></div>
//         <input type='text' placeholder='Filtrar' onChange={handleFiltrar}/>
//         <Container>
            
//             {!!listaFiltrada.length ? listaFiltrada.map((item) => {
//                 return(
//                     <CardProdutos 
//                     produto={item} 
//                     key={item.id} 
//                     adicionarAoCarrinho = {adicionarAoCarrinho}
//                 />
//                 )
//             }) :
            
//             listaDeProdutos.map((item) => {
//                 return(
//                     <CardProdutos 
//                         produto={item} 
//                         key={item.id} 
//                         adicionarAoCarrinho = {adicionarAoCarrinho}
//                     />
//                 )
//             })}
//         </Container>
//     </>
//     );