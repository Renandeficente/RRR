import { useEffect, useState } from 'react';
import styles from './Carrinho.module.css';
import { getCart, updateQuantity, removeFromCart, clearCart, cartTotal } from '../../utils/cart';
import { Link } from 'react-router-dom';
import { useCarrinho } from '../../Context/CarrinhoContext';

function Carrinho(){
    const [items, setItems] = useState([]);
    const { finalizarCompra } = useCarrinho();

    useEffect(()=>{ setItems(getCart()); }, []);

    function handleQty(id, qty){
        updateQuantity(id, qty);
        setItems(getCart());
    }

    function handleRemove(id){
        removeFromCart(id);
        setItems(getCart());
    }

    function handleClear(){
        clearCart();
        setItems([]);
    }

    function handleFinalizar(){
        finalizarCompra();
        setItems(getCart());
    }

    
    return (
        <main className="app-container">
            <h1>Seu Carrinho</h1>
            {items.length === 0 ? (
                <div className={styles.empty}>
                    <p>Seu carrinho está vazio.</p>
                    <Link to="/Produtos" className="btn">Continuar comprando</Link>
                </div>
            ) : (
                <div className={styles.grid}>
                    <div className={styles.items}>
                        {items.map(item => (
                            <div key={item.id} className={styles.item}>
                                <img src={item.img} alt={item.nome} />
                                <div className={styles.meta}>
                                    <h3>{item.nome}</h3>
                                    <p className={styles.price}>R$ {item.price.toFixed(2).replace('.',',')}</p>
                                    <div className={styles.controls}>
                                        <button onClick={() => handleQty(item.id, item.qty - 1)}>-</button>
                                        <span>{item.qty}</span>
                                        <button onClick={() => handleQty(item.id, item.qty + 1)}>+</button>
                                        <button className={styles.remove} onClick={() => handleRemove(item.id)}>Remover</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <aside className={styles.summary}>
                        <h3>Resumo</h3>
                        <p>Total: <strong>R$ {cartTotal().toFixed(2).replace('.',',')}</strong></p>
                        <div style={{display:'flex', gap:10, marginTop:12}}>
                            <button className="btn" onClick={handleFinalizar}>Finalizar compra</button>
                            <button className="btn" onClick={handleClear} style={{background:'transparent', color:'var(--text)', border:'1px solid rgba(255,255,255,0.06)'}}>Limpar</button>
                        </div>
                    </aside>
                </div>
            )}
        </main>
    )
}

export default Carrinho;