import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrinho from "../pages/carrinho/Carrinho";
import PaginaPrincipal from "../pages/paginaPrincipal/PaginaPrincipal";

export default function Router() {
    return (
    //garante que tudo será compartilhado com as outras páginas, ele fará as rotas
    <BrowserRouter>
        <Routes>
            <Route index element={<PaginaPrincipal/>}/>
            <Route path='/carrinho' element={<Carrinho/>}/>
            <Route path='/*' element={<h1>Erro</h1>}/>
        </Routes>
    </BrowserRouter>
    );
    }