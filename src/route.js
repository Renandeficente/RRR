import { Route, Routes,} from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Carrinho from "./Pages/Carrinho"
import Produtos from "./Pages/Produtos";
import ProdutoDetalhes from "./Pages/Produtos/ProdutoDetalhes";
import Pedidos from "./Pages/Pedidos";
function AppRoutes() {
    return( 
        <Routes>
            <Route path="/" element ={<Home/>} />
            <Route path="/Produtos" element={<Produtos/>}/>
            <Route path="/Carrinho" element={<Carrinho/>}/>
            <Route path="/Pedidos" element={<Pedidos/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/Produtos/:id" element={<ProdutoDetalhes/>}/>
            <Route path="/Carrinho/:id" element={<Carrinho/>}/>
         </Routes>  

    )
}
export default AppRoutes;