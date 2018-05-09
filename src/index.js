import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            countries: [],
            filter: '',
        }
    }


    componentWillMount() {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                this.setState({ countries: response.data })
            })
    }

    ShowCountries = () => {
        //const filterCountries = () => {
        //    //return this.state.countries.filter(function (el) {
        //    //    return el.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1

        //    //})
        //}
        const filtered = this.state.countries.filter(country => country.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1)
        if (filtered.length > 10) {
            return (
                <div>
                    Too many matches, specify another filter </div>
            )
        } else if (filtered.length > 1) {
            return (
                <div>
                    {filtered.map(rivi => <li id={rivi.name}>{rivi.name}</li>)}
                </div>
            )
        } else if (filtered.length === 1) {
            return (
                <div>
                    <h1>{filtered[0].name}</h1>
                    <p>Capital: {filtered[0].capital}</p>
                    <p>Population: {filtered[0].population} </p>
                    <p><img src={filtered[0].flag} alt={filtered[0].name}></img></p>
                </div>
            )
        } else {
            return (
                <div>
                No matches </div>
                )
        }
    }

    handleChange = (event) => {
        this.setState({filter: event.target.value})
    }

    render() {
        return (
            <div>
                Find countries: <input value={this.state.filter} onChange={this.handleChange} />
                <this.ShowCountries />
            </div>
            )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)