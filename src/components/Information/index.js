import Header from "../Header";
import Content from '../Content'
import Personal from "../Personal";
import Contato from "../Contato";
import StarWarsService from "../../services/StarwarsService";

import { useEffect, useState } from "react";

import './styles.css'
import Social from "../Social";

function Information() {

    const [info, setInfo] = useState([])
    let ids = 1

    useEffect(() => {
        StarWarsService()
            .then(response => response.json())
            .then(data => {
                setInfo(data.results)
            })
            .catch(error => console.log(error))
    }, [])

    const handlerInfo = (event) => {
        console.log(event.target.value)
    }

    const elements = info.map(element => {
        return (
            <option value={ids++} key={element.name}>{element.name}</option>
        )
    })


    return (
        <div id="content">
            <article id="info">
                <Header />
                <div id="info-nome">
                    <h1>Daniel Leite</h1>
                    <h5>Junior Developer</h5>
                    <select id="names" onClick={handlerInfo}>
                        {elements}
                    </select>
                </div>
                <Personal>Informação pessoal</Personal>
                <Contato>Contato</Contato>
                <Social>Redes Sociais</Social>
            </article>
            <Content />
        </div>
    )
}

export default Information