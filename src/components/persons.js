import axios from 'axios'
import React from 'react'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const removeName = (id) => {

    if (window.confirm("Haluatko varmasti poistaa?")) {
        console.log(id)
        axios
            .delete(`http://localhost:3001/persons/${id}`)
            .then(response => {
                console.log(response)
            })
            .catch(error => alert("Tietoa ei l�ydy"))

        return (
            <Notification message="Tieto poistettu" />
        )
    }

}

const updateName = (person, id) => {
    console.log(id, "ja", person)
    axios
        .put(`${baseUrl}/${id}`, person)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            alert("Tietoa ei l�ydy")
        })
    return (
        <Notification message="Tieto p�ivitetty" />
        )
}



const Notification = ({ message }) => {
    if (message === null) {
        return null
    }
    return (
        <div className="error">
            {message}
        </div>
    )
}

export default { getAll, removeName, updateName }