import './styles.css'

function Personal(props) {
    return (
        <div id="personal-information">
            <h1>{props.children}</h1>
            <div id="information">
                <div className="row">
                    <div className="desc">Nascimento: </div>
                    <div className="cont">{props.data_info.personal.nascimento}</div>
                </div>
                <div className="row">
                    <div className="desc">Nacionalidade: </div>
                    <div className="cont">{props.data_info.personal.nacionalidade}</div>
                </div>
                <div className="row">
                    <div className="desc">Estado Civil: </div>
                    <div className="cont">{props.data_info.personal.estado_civil}</div>
                </div>
            </div>
        </div>
    )
}


export default Personal