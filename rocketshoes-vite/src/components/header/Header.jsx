import { GiRunningShoe } from 'react-icons/gi';
import { irParaCarrinho, irParaPaginaPrincipal } from '../../router/coordinator';
import { HeaderContainer, NomeLoja, Buscar, Select, Option, Nav, MeuCarrinho, NumeroItens, Logo } from "./styles";
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext, useState } from "react";
import { GlobalContext } from '../../globalState/globalContext';

export default function Header(props) {
    const navigate = useNavigate()

    const context = useContext(GlobalContext)
    const {carrinho} = context

    let somaItens = 0
        for(const item of carrinho) {
            somaItens = somaItens + item.quantidade
        }

    return (
        <header>
            <HeaderContainer>
                <Logo>
                    <NomeLoja onClick={() => irParaPaginaPrincipal(navigate)}>ROCKETSHOES </NomeLoja>
                    <GiRunningShoe size={35}/>
                </Logo>
                <Buscar>
                    { props.path !== '/carrinho' && <input type='text' placeholder='Filtrar' onChange={props.handleFiltrar}/>}
                </Buscar>
                <Select onChange={props.handlePreco}>
                    <Option>Selecionar</Option>
                    <Option value="menor">Menor preço</Option>
                    <Option value="maior">Maior preço</Option>
                </Select>
                <Nav>
                    <div>
                        <MeuCarrinho onClick={() => irParaCarrinho(navigate)}>Meu carrinho</MeuCarrinho>
                        <NumeroItens>
                            {`${somaItens} itens` }
                        </NumeroItens>
                    </div>
                    <AiOutlineShoppingCart size={30 } color='white'/>
                </Nav>
            </HeaderContainer>
        </header>
        );
}