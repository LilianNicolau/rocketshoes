import { GiRunningShoe } from 'react-icons/gi';
import { irParaCarrinho, irParaPaginaPrincipal } from '../../router/coordinator';
import { HeaderContainer, NomeLoja, Nav, MeuCarrinho, NumeroItens, Logo } from "./styles";
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext } from "react";
import { GlobalContext } from '../../globalState/globalContext';

export default function Header() {
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