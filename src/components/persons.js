import axios from 'axios'

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
            .catch(alert("Tietoa ei löydy"))
            })
    }

}


export default { getAll, removeName }