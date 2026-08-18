import { BrowserRouter, Routes,route} from "react-router-dom";
import Home from "./Pages/Home";


function Produtos() {
    return( 
        <BrowserRouter>
        <route>
            <route path="/" element ={<Home/>} />
            </route>
        </BrowserRouter>
    )
}
export default Produtos;