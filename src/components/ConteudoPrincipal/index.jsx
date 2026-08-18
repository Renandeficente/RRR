import style from "./ConteudoPrincipal.module.css"
import Card from "../Card";
import { Link } from "react-router-dom";
import { produtos } from "../../Data/produtos";

function ConteudoPrincipal() {

    const lista_produtos = produtos;
    return (
        <>
            <div className={style.container}>
                {lista_produtos.map((produto) => (
                    <div key={produto.id} className={style.productCard}>
                        <Card product={produto} />
                        <Link className={style.detailsButton} to={`/Produtos/${produto.id}`}>
                            Ver detalhes
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ConteudoPrincipal;