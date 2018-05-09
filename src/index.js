import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            countries: [],
            filter: ''
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
                    {filtered.map(rivi => <div onClick={()=>this.HandleShowOne(rivi.name)}>{rivi.name}</div>)}
                </div>
            )
        } else if (filtered.length === 1) {
            return (
                <div>
                    {this.ShowCountry(filtered[0])}
                </div>
                )
        } else {
            return (
                <div>
                No matches </div>
                )
        }
    }

    HandleShowOne = (name) => {
        this.setState({ filter: name })
    }

    ShowCountry = (country) => {
           return (
            <div>
                <h1>{country.name}</h1>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population} </p>
                <p><img src={country.flag} alt={country.name}></img></p>
                </div>
        )
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