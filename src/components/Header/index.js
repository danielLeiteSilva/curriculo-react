import './styles.css'
import Foto from '../../assets/imagem.jpg'

function Header() {
    return (
        <header id="cabecalho">
            <figure id="imagem-logo">
                <img src={Foto} alt="foto" />
            </figure>
        </header>
    );
}

export default Header;