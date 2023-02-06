import "../header/style.css"
import { GiRunningShoe } from 'react-icons/gi';

export default function Header() {
    return (
    <>
    <header className="header">
    <h1>ROCKETSHOES  </h1>
    <GiRunningShoe className="logo"/>
    <nav>
    <h4>Meu carrinho</h4>
    <h5>3 itens</h5>
    </nav>
    </header>
    </>
    );
}