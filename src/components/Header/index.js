import './styles.css'

function Header(props) {

    return (

        <header id="cabecalho">
            <figure id="imagem-logo">
                <img src={`data:image/jpg;base64, ${props.data_info.image}`} alt="foto" />
            </figure>
        </header>
    );
}

export default Header;