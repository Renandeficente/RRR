import Card from"../../components/Card";
import { useState} from "react";
import { produtos } from "../../Data/produtos";
import { Link} from "react-router-dom";

function Produtos() {

    const [busca, setBusca] = useState("");

    const filtrados = produtos.filter((p) =>
     p.nome.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <section>
            <h2>Produtos</h2>
            <input value={busca} 
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Pesquisar..." />

            <div className="produtos">
                {filtrados.map((p) => (
                    <Link to={`/produto/${p.id}`} key={p.id}>
                        <Card 
                            product={p}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Produtos;
