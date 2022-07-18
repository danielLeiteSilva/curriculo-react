import "./styles.css"

function Contato(props) {
    return (
        <div id="contato-information">
            <h1>{props.children}</h1>
            <div id="information">
                <div class="row">
                    <div class="desc">Telefone: </div>
                    <div class="cont">(11) 5933-6620</div>
                </div>
                <div class="row">
                    <div class="desc">Celular: </div>
                    <div class="cont">(11) 94366-6624</div>
                </div>
                <div class="row">
                    <div class="desc">E-mail: </div>
                    <div class="cont">daniel199257@hotmail.com</div>
                </div>
                <div class="row">
                    <div class="desc">Endereço: </div>
                    <div class="cont">Rua universal, 333 - Cantinho do Céu São Paulo - SP</div>
                </div>
            </div>
        </div>
    )
}

export default Contato