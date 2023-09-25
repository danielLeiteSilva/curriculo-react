import { useRef, useEffect } from 'react'
import "./styles.css"

function Graphs(props) {

    const refGraphFirst = useRef();
    const refGraphSecond = useRef();
    const refGraphThirty = useRef();

    useEffect(() => {

        const { Chart } = window;

        let graphs = [refGraphFirst.current, refGraphSecond.current, refGraphThirty.current]

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


        props.data_info.perfil.tecnologia.forEach((infos, index) => {
            loadGraph(
                graphs[index],
                [infos.proficiente, 100 - infos.proficiente],
                [infos.tech],
                'doughnut',
                ['rgba(0,128,128)', 'rgba(255,255,255)']
            )
        })

        

    }, [props]);

    return (
        <div id="graph">
            <div class="graph-info">
                <div>{props.data_info.perfil.tecnologia[0].proficiente}%</div>
                <canvas ref={refGraphFirst} id="graph-first" width="0" height="0"></canvas>
            </div>

            <div class="graph-info">
                <div>{props.data_info.perfil.tecnologia[1].proficiente}%</div>
                <canvas ref={refGraphSecond} id="graph-second" width="0" height="0"></canvas>
            </div>

            <div class="graph-info">
                <div>{props.data_info.perfil.tecnologia[2].proficiente}%</div>
                <canvas ref={refGraphThirty} id="graph-thirty" width="0" height="0"></canvas>
            </div>
        </div>
    )
}

export default Graphs