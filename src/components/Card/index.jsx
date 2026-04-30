import style from './Card.module.css';

// Props são propriedades que passamos para alimentar um componente
function Card({ title, desc, price, img }) {
    const handleImageClick = () => {
        alert(`Você clicou na imagem de ${title}!`);
    };

    return <>
        <div className={style.card}>
            <img className={style.img} src={img} alt={title} onClick={handleImageClick} style={{cursor: 'pointer'}} />
            <h4 className={style.title}>{title}</h4>
            <p className={style.description}>{desc}</p>
            <p className={style.price}>R$ {price.toFixed(2).replace('.', ',')}</p>
        </div>
    </>
}

export default Card;