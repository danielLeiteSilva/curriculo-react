import { Link } from "react-router-dom"
import "./styles.css"

function Update(props) {
    return (
        <>  
            <header>
                <nav>
                    <ul>
                        <li><Link to="/" className="link">Inicio</Link></li>
                        <li><Link to="/information" className="link">Information</Link></li>
                    </ul>
                </nav>
            </header>

            <section>
                <article>
                    <form>
                        
                    </form>
                </article>
            </section>
        </>

    )
}

export default Update