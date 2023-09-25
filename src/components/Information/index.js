import Header from "../Header";
import Content from '../Content'
import Personal from "../Personal";
import Contato from "../Contato";
import UserService from "../../services/UsersService";

import { useEffect, useState } from "react";

import './styles.css'
import Social from "../Social";

function Information() {

    const [info, setInfo] = useState({})
    const [users, setUsers] = useState([])

    useEffect(() => {

        UserService.get("/api/v1/users")
            .then((response) => {
                let data = response.data
                setInfo(data[0])

                const nomes = []
                data.map(element => nomes.push({ nome: element.nome, id: element._id }))
                setUsers(nomes)

            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

    }, [])

    const handlerInfo = (event) => {
        let id = event.target.value
        UserService
            .get(`/api/v1/user/${id}`)
            .then(response => {
                setInfo(response.data)
            })
            .catch(err => console.log(err))
    }

    if (info.experiencia !== undefined) {
        return (
            <div id="content">
                <article id="info" style={{height: window.document.body.clientHeight}}>
                    <Header data_info={info}/>
                    <div id="info-nome">
                        <h1>{info.nome}</h1>
                        <h5>{info.experiencia[0].cargo}</h5>
                        <select id="names" onClick={handlerInfo}>
                            {users.map(element => {
                                return <option value={element.id} key={element.id}>{element.nome}</option>
                            })}
                        </select>
                    </div>
                    <Personal data_info={info}>Informação pessoal</Personal>
                    <Contato data_info={info}>Contato</Contato>
                    <Social>Redes Sociais</Social>
                </article>
                <Content data_info={info} />
            </div>
        )
    }
}

export default Information