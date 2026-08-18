import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useEffect, useState } from 'react';
import { getCart } from '../../utils/cart';
import { useCarrinho } from '../../Context/CarrinhoContext';

export default function Header() {
    const {totalitens} = useCarrinho();
    const [count, setCount] = useState(0);
    useEffect(()=>{ setCount(getCart().reduce((s,i)=> s + i.qty,0));
        const onStorage = () => setCount(getCart().reduce((s,i)=> s + i.qty,0));
        window.addEventListener('storage', onStorage);
        return () => window.removeEventListener('storage', onStorage);
    },[]);

    return (
        <header className={styles.header}>
            <div className={styles.headerBox}>
                <div className={styles.brand}>Magazine</div>
                <div className="muted">Osvaldo Cruz — Carros clássicos e modernos</div>
            </div>
            <div className={styles.headerBox}>
                <nav className={styles.headerNav}>
                    <Link className={styles.heaaderlink} to="/" >Home</Link>
                    <Link className={styles.heaaderlink} to="/Produtos" >Produtos</Link>
                    <Link className={styles.heaaderlink} to="/Pedidos" >Pedidos</Link>
                    <Link className={styles.heaaderlink} to="/Carrinho" >Carrinho ({totalitens()})</Link>
                </nav>
            </div>
        </header>
    )
}