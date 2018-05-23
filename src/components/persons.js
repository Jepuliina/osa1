import axios from 'axios'
// import React from 'react'

const baseUrl = 'https://limitless-citadel-77689.herokuapp.com/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const removeName = (id) => {

    if (window.confirm("Haluatko varmasti poistaa?")) {
        console.log(id)
        axios
            .delete(`${baseUrl}/${id}`)
            .then(response => {
                console.log(response)
            })
            .catch(error => alert("Tietoa ei l�ydy"))
        window.location.reload(true);
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
}





export default { getAll, removeName, updateName}