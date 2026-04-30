import style from './Footer.module.css';

function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.section}>
                    <h4>Sobre Nós</h4>
                    <p>Loja de produtos gamer com as melhores ofertas do mercado.</p>
                </div>
                
               
                <div className={style.section}>
                    <h4>Contato</h4>
                    <p>Email: RenanGamer@loja.com</p>
                    <p>Telefone: (47) 9977-9179</p>
                </div>
            </div>
            
            <div className={style.bottom}>
                <p>&copy; 2026 Loja Gamer. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;
