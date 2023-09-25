import { useRef, useEffect } from 'react'
import "./styles.css"

function GraphLanguage() {

    const refIdioma = useRef();
    const refSoftware = useRef();

    useEffect(() => {

        const { Chart } = window;

        const graphIdioma = refIdioma.current
        const graphSoftware = refSoftware.current

        const loadGraph = (element, values, proficience, types, cores) => {
            return new Chart(element, {
                type: types,
                data: {
                    labels: proficience,
                    datasets: [{
                        label: '# of Votes',
                        data: values,
                        backgroundColor: cores,
                        borderColor: [
    
                        ],
                        borderWidth: 1
                    }]
                }
            })
        }

        loadGraph(graphIdioma, [20, 30], ['Inglês', 'Espanhol'], 'bar', ['rgba(0,128,128)', 'rgba(0,128,128)', 'rgba(0,128,128)'])
        loadGraph(graphSoftware, [20, 30, 80], ['Inglês', 'espanhol', 'italiano'], 'polarArea', ['rgba(0,128,128)', 'rgba(0,128,128)', 'rgba(0,128,128)'])

    }, []);

    return (
        <div id="tenico">
            <div className="software">
                <h1>Software</h1>
                <canvas ref={refSoftware} id="content-software"> </canvas>
            </div>
            <div className="idiomas">
                <h1>Idiomas</h1>
                <canvas ref={refIdioma} id="content-idiomas"></canvas>
            </div>
        </div>
    )

}

export default GraphLanguage