import React from 'react';
import ReactDOM from 'react-dom'
import ShowPersons from './components/showPersons'
import Filtteri from './components/filtteri'
import axios from 'axios'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            newName: '',
            newNumber: '',
            filter: '',
        }
    }

    componentWillMount() {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                this.setState({persons:response.data})
            })
    }

    handleNameChange = (event) => {  
        this.setState({ newName: event.target.value })
        console.log("Nappia painettu")
    }

    handleNumberChange = (event) => {
        this.setState({newNumber: event.target.value})
    }

    handleFilter = (value) => {
        this.setState({filter: value})

    }

    addName = (event) => {
        event.preventDefault()
        const namelist = this.state.persons
        if (!namelist.find(person => person.name === this.state.newName)) {
            const nameObject = {
                name: this.state.newName,
                number: this.state.newNumber
            }
            const names = namelist.concat(nameObject)
            this.setState({
                persons: names,
                newName: "",
                newNumber: ""
            })
        } else {
            this.setState({ newName: "" })
            this.setState({ newNumber:""})
            alert("Nimi on jo luettelossa!")
        }
    }

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <Filtteri onChange={this.handleFilter.bind(this)} filter={this.state.filter} />
                <form onSubmit={this.addName}>
                    <div>
                        nimi: <input value={this.state.newName} onChange={this.handleNameChange} /><br/>
                        numero: <input value={this.state.newNumber} onChange={this.handleNumberChange} />
                    </div>
                    <div>
                        <button type="submit">lis&auml;&auml;</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                <ul>
                    {this.state.persons.map(person => <ShowPersons key={person.name} person={person} filter={this.state.filter} />)}
                </ul>
      </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)
