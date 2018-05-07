import React from 'react'
import ReactDOM from 'react-dom'

const Kurssi = (props) => {
    const kurssi = props.kurssi
    const Otsikko = () => {
        return (
            <h1>{kurssi.nimi}</h1>
        )
    }

    const Sisalto = () => {

        const rivit = () => kurssi.osat.map(rivi => <Osa nimi={rivi.nimi} tehtavia={rivi.tehtavia} />)
        return (
            rivit()
        )
    }

    const Osa = (props) => {

        return (
            <p>{props.nimi} {props.tehtavia}</p>
        )
    }

    const Yhteensa = () => {
        const tehtavat = kurssi.osat.map(osa => osa.tehtavia)
        /*let lkm = 0
        kurssi.osat.forEach((osanen) => { lkm += osanen.tehtavia })
        */

        let lkm = tehtavat.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        }, 0);

        return (
            <p> yhteensa {lkm} tehtavaa</p>
            )

    }

    return (
        <div>
            <Otsikko teksti={kurssi.nimi} />
            <Sisalto />
            <Yhteensa />
        </div>
    )

}
const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10,
                id: 1
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7,
                id: 2
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14,
                id: 3
            }
        ]
    }

    return (
        <div>
            <Kurssi kurssi={kurssi} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)