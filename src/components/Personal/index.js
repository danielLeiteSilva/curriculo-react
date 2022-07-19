import './styles.css'

function Personal(props) {

    return (
        <div id="personal-information">
            <h1>{props.children}</h1>
            <div id="information">
                {
                    props.data_info.map(element => {
                        return (
                            <>
                                <div class="row">
                                    <div class="desc">Nascimento: </div>
                                    <div class="cont">{element.personal.nascimento}</div>
                                </div>
                                <div class="row">
                                    <div class="desc">Nacionalidade: </div>
                                    <div class="cont">{element.personal.nacionalidade}</div>
                                </div>
                                <div class="row">
                                    <div class="desc">Estado Civil: </div>
                                    <div class="cont">{element.personal.estado_civil}</div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Personal