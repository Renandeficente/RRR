import { Link } from "react-router-dom";

function Home() {
    return (
        <section>
            <h1>Os carros mais baratos de todos os tempos</h1>
            <p>Bem-vindo ao Magazine Osvaldo Cruz. Aqui você encontra ofertas especiais em carros clássicos e modernos.</p>
            <Link to="/Produtos" className="btn">Ver produtos</Link>
        </section>
    );
}

export default Home;