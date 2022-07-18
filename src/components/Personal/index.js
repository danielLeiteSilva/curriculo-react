import './styles.css'

function Personal(props) {

    return (
        <div id="personal-information">
            <h1>{props.children}</h1>
            <div id="information">
                <div class="row">
                    <div class="desc">Nascimento: </div>
                    <div class="cont">09/04/2000</div>
                </div>
                <div class="row">
                    <div class="desc">Nacionalidade: </div>
                    <div class="cont">Brasileiro</div>
                </div>
                <div class="row">
                    <div class="desc">Estado Civil: </div>
                    <div class="cont">Solteiro</div>
                </div>
            </div>
        </div>
    )
}


export default Personal