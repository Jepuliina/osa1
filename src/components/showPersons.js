import React from 'react';

const ShowPersons = (props) => {
    const name = props.person.name.toUpperCase()
    if (props.filter === '' || name.indexOf(props.filter.toUpperCase()) >= 0) {
        return (
            <li>{props.person.name} {props.person.number}</li>
        )
    } else {
        return null
    }
}

export default ShowPersons