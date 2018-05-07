import React from 'react'


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

export default Kurssi