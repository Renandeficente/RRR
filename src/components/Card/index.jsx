import style from './Card.module.css';
import { addToCart } from '../../utils/cart';
import {Button} from 'antd';
import 'antd/dist/reset.css'; 
import { formatarPreco } from '../../utils/formatarPreco';

// Recebe o produto completo como prop
function Card({ product }) {
    const { nome, em_estoque, preco, img, id } = product;

    function handleAdd(){
        addToCart(product, 1);

        alert(`${nome} adicionado ao carrinho`);
    }
    

    return (
        <div className={style.card}>
            <img className={style.img} src={img} alt={nome} />
            <div className={style.cardInner}>
                <h4 className={style.title}>{nome}</h4>
                <p className={style.description}>{em_estoque ? 'Em estoque' : 'Indisponível'}</p>
                <div className={style.row}>
                    <p className={style.price}>{formatarPreco(preco)}</p>
                    <Button className="btn" onClick={handleAdd}>Adicionar</Button>
                </div>
            </div>
        </div>
    );
}

export default Card;