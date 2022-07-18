import Graphs from "../Graphs/Proficience"
import GraphLanguage from '../Graphs/Language'

function Content() {
    return (
        <aside id="information-perfil">
            <div id="perfil">
                <h1>Meu perfil</h1>
                <div id="content-perfil">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in lorem tortor.
                    Etiam luctus leo non sapien tristique aliquet. Nulla vel elementum massa, vel hendrerit nunc.
                    Nam elementum quam mauris, sit amet dictum ligula dignissim a. Praesent
                    finibus, lectus et dignissim auctor, ex est ornare augue, vel tristique
                    ex metus non nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc id eleifend ante, nec pretium erat. Integer dictum dignissim enim, ut
                    fringilla dolor varius ac.
                    <Graphs />
                </div>
            </div>
            <div id="experiencia">
                <h1>Experiência Profissional</h1>
                <div id="content-experiencia">
                    <div class="content-data">
                        <div class="content-year">
                            <div class="retangule">2020</div>
                            <div class="triangule"></div>
                        </div>
                        <div class="info-point">
                            <div class="circle"></div>
                            <div class="line"></div>
                        </div>
                        <div class="content-info">
                            <h1>Desenvolvedor Junior</h1>
                            <h3>Indra Company</h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu quam ex. Duis efficitur accumsan diam. Nulla pellentesque pulvinar risus rhoncus mattis. Pellentesque a augue leo. Phasellus vel nunc blandit, aliquet ipsum sit amet, molestie dui.
                        </div>
                    </div>
                    <div class="content-data">
                        <div class="content-year">
                            <div class="retangule">2019</div>
                            <div class="triangule"></div>
                        </div>
                        <div class="info-point">
                            <div class="circle"></div>
                            <div class="line"></div>
                        </div>
                        <div class="content-info">
                            <h1>Trainee em Sistemas na indra</h1>
                            <h3>Indra Company</h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu quam ex. Duis efficitur accumsan diam. Nulla pellentesque pulvinar risus rhoncus mattis. Pellentesque a augue leo. Phasellus vel nunc blandit, aliquet ipsum sit amet, molestie dui.
                        </div>
                    </div>
                    <div class="content-data">
                        <div class="content-year">
                            <div class="retangule">2015</div>
                            <div class="triangule"></div>
                        </div>
                        <div class="info-point">
                            <div class="circle"></div>
                            <div class="line"></div>
                        </div>
                        <div class="content-info">
                            <h1>Analista de Frota</h1>
                            <h3>ATC Telecomunicações</h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu quam ex. Duis efficitur accumsan diam. Nulla pellentesque pulvinar risus rhoncus mattis. Pellentesque a augue leo. Phasellus vel nunc blandit, aliquet ipsum sit amet, molestie dui.
                        </div>
                    </div>
                </div>
            </div>
            <div id="academico">
                <h1>Formação acadêmica</h1>
                <div id="content-academico">
                    <div class="content-data-academico">
                        <div class="content-year">
                            <div class="retangule">2019</div>
                            <div class="triangule"></div>
                        </div>
                        <div class="info-point">
                            <div class="circle"></div>
                            <div class="line"></div>
                        </div>
                        <div class="content-info">
                            <h1>Análise e Desenvolvimento de Sistemas</h1>
                            <h3>Senac</h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                    </div>
                    <div class="content-data-academico">
                        <div class="content-year">
                            <div class="retangule">2015</div>
                            <div class="triangule"></div>
                        </div>
                        <div class="info-point">
                            <div class="circle"></div>
                            <div class="line"></div>
                        </div>
                        <div class="content-info">
                            <h1>Administração</h1>
                            <h3>ETEC</h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                    </div>
                    <div class="content-data-academico">
                        <div class="content-year">
                            <div class="retangule">2014</div>
                            <div class="triangule"></div>
                        </div>
                        <div class="info-point">
                            <div class="circle"></div>
                            <div class="line"></div>
                        </div>
                        <div class="content-info">
                            <h1>Manutenção e suporte em informática</h1>
                            <h3>Sumaré</h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                    </div>
                </div>
            </div>
            <GraphLanguage />
        </aside>
    )
}

export default Content