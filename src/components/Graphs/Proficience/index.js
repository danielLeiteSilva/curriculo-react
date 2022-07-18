import { useRef, useEffect } from 'react'
import "./styles.css"

function Graphs() {

    const refGraphFirst = useRef();
    const refGraphSecond = useRef();
    const refGraphThirty = useRef();

    const { Chart } = window;

    useEffect(() => {

        const graphFirst = refGraphFirst.current
        const graphSecond = refGraphSecond.current
        const graphThirty = refGraphThirty.current

        loadGraph(graphFirst, [90, 100 - 90], ['javascript'], 'doughnut', ['rgba(0,128,128)', 'rgba(255,255,255)'])
        loadGraph(graphSecond, [70, 100 - 70], ['python'], 'doughnut', ['rgba(0,128,128)', 'rgba(255,255,255)'])
        loadGraph(graphThirty, [60, 100 - 60], ['java'], 'doughnut', ['rgba(0,128,128)', 'rgba(255,255,255)'])

    }, []);


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

    return (
        <div id="graph">
            <div class="graph-info">
                <div>90%</div>
                <canvas ref={refGraphFirst} id="graph-first" width="0" height="0"></canvas>
            </div>

            <div class="graph-info">
                <div>70%</div>
                <canvas ref={refGraphSecond} id="graph-second" width="0" height="0"></canvas>
            </div>

            <div class="graph-info">
                <div>60%</div>
                <canvas ref={refGraphThirty} id="graph-thirty" width="0" height="0"></canvas>
            </div>
        </div>
    )

}

export default Graphs