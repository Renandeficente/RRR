import { useParams, Link, useNavigate } from "react-router-dom";
import { produtos } from "../../Data/produtos";
import styles from "./ProdutoDetalhes.module.css";
import { addToCart } from '../../utils/cart';
import 'antd/dist/reset.css'; 

export default function ProdutoDetalhes(){
    const { id } = useParams();
    const navigate = useNavigate();
    const produto = produtos.find(p => p.id === Number(id));

    if(!produto) return (
        <section className="app-container">
            <p>Produto não encontrado.</p>
            <Link to="/Produtos" className="btn">Voltar</Link>
        </section>
    )

    function handleAdd(){
        addToCart(produto,1);
        alert(`${produto.nome} adicionado ao carrinho`);
    }

    return (
        <main className={`app-container ${styles.wrapper}`}>
            <div className={styles.card}>
                <div className={styles.media}>
                    <img src={produto.img} alt={produto.nome} />
                </div>
                <div className={styles.info}>
                    <h2 className={styles.title}>{produto.nome}</h2>
                    <p className={styles.price}>R$ {produto.preco.toFixed(2).replace('.',',')}</p>
                    <p className={styles.stock}>{produto.em_estoque ? 'Em estoque' : 'Indisponível'}</p>
                    <p className={styles.description}>Descrição do veículo. Visual limpo e informações relevantes para ajudar na decisão de compra.</p>
                    
                    <div className={styles.actions}>
                        <button className="btn" onClick={handleAdd}>Adicionar ao carrinho</button>
                        <button className="btn" onClick={() => navigate(-1)} style={{background:'transparent', color:'var(--text)', border:'1px solid rgba(255,255,255,0.06)'}}>Voltar</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
