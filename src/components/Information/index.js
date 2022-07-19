import Header from "../Header";
import Content from '../Content'
import Personal from "../Personal";
import Contato from "../Contato";
import UsersService from "../../services/UsersService";

import { useEffect, useState } from "react";

import './styles.css'
import Social from "../Social";

function Information() {

    const [info, setInfo] = useState([])

    useEffect(() => {
        UsersService()
            .then(response => response.json())
            .then(data => {
                setInfo(data)
            })
            .catch(error => console.log(error))
    }, [])

    const handlerInfo = (event) => {
        console.log(event.target.value)
    }

    // const elements = info.map(element => {
    //     return (
    //         <option value={element.name} key={element.name} />
    //     )
    // })


    return (
        <div id="content">
            <article id="info">
                <Header />
                <div id="info-nome">
                    <h1>{info[0]?.nome}</h1>
                    <h5></h5>
                    {/* <input list="names" id="search"/> */}
                    <select id="names" onClick={handlerInfo}>
                        {info.map(element => {
                            return <option value={element._id} key={element._id}>{element.nome}</option>
                        })}
                    </select>
                </div>
                <Personal data_info={info}>Informação pessoal</Personal>
                <Contato>Contato</Contato>
                <Social>Redes Sociais</Social>
            </article>
            <Content />
        </div>
    )
}

export default Information