import "./styles.css"

function Contato(props) {

    const { rua, bairro, cidade, numero } = props.data_info.contato.endereco

    return (
        <div id="contato-information">
            <h1>{props.children}</h1>
            <div id="information">
                <div className="row">
                    <div className="desc">Telefone: </div>
                    <div className="cont">{props.data_info.contato.telefone}</div>
                </div>
                <div className="row">
                    <div className="desc">Celular: </div>
                    <div className="cont">{props.data_info.contato.celular}</div>
                </div>
                <div className="row">
                    <div className="desc">E-mail: </div>
                    <div class="cont">{props.data_info.contato.email}</div>
                </div>
                <div className="row">
                    <div className="desc">Endereço: </div>
                    <div className="cont">{`Rua ${rua.toLowerCase()}, ${numero} - ${bairro} - ${cidade}`}</div>
                </div>
            </div>
        </div>
    )
}

export default Contato