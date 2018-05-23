import React from 'react';
import persons from './persons'


const handleRemove = (objButton) => {
    objButton.preventDefault()
    console.log("taalla", objButton.target.value)
    persons.removeName(objButton.target.value)
   
}
const ShowPersons = (props) => {
    const name = props.person.name.toUpperCase()
    if (name && (props.filter === '' || name.indexOf(props.filter.toUpperCase()) >= 0)) {
        return (
            <li key={name}>{props.person.name} {props.person.number} <button name="remove" onClick={handleRemove.bind(this)} value={props.person.id}>Poista</button></li>
        )
    } else {
        return null
    }
}

export default ShowPersons


    