import Graphs from "../Graphs/Proficience"
import GraphLanguage from '../Graphs/Language'

function Content(props) {
    return (
        <aside id="information-perfil">
            <div id="perfil">
                <h1>Meu perfil</h1>
                <div id="content-perfil">
                    {props.data_info.perfil.descricao}
                    <Graphs data_info={props.data_info} />
                </div>
            </div>
            <div id="experiencia">
                <h1>Experiência Profissional</h1>
                <div id="content-experiencia">
                    {props.data_info.experiencia.map(element => {
                        return <div className="content-data">
                            <div className="content-year">
                                <div className="retangule">{element.ano}</div>
                                <div className="triangule"></div>
                            </div>
                            <div className="info-point">
                                <div className="circle"></div>
                                <div className="line"></div>
                            </div>
                            <div className="content-info">
                                <h1>{element.cargo}</h1>
                                <h3>{element.empresa}</h3>
                                {element.description}
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div id="academico">
                <h1>Formação acadêmica</h1>
                <div id="content-academico">
                    {props.data_info.formacao.map(element => {

                        return <div className="content-data-academico">
                            <div className="content-year">
                                <div className="retangule">{element.ano}</div>
                                <div className="triangule"></div>
                            </div>
                            <div className="info-point">
                                <div className="circle"></div>
                                <div className="line"></div>
                            </div>
                            <div className="content-info">
                                <h1>{element.cargo}</h1>
                                <h3>{element.empresa}</h3>
                                {element.description}
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <GraphLanguage />
        </aside>
    )
}

export default Content