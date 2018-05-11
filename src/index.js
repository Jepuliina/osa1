import React from 'react';
import ReactDOM from 'react-dom'
import ShowPersons from './components/showPersons'
import Filtteri from './components/filtteri'
import persons from './components/persons'
import axios from 'axios'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            newName: '',
            newNumber: '',
            filter: '',
            showOne: {}
        }
    }

    componentDidMount() {
        persons.getAll()
            .then(response => {
                this.setState({persons:response})
            })
    }

    handleNameChange = (event) => {  
        this.setState({ newName: event.target.value })
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

            console.log(nameObject)

            axios
                .post('http://localhost:3001/persons', nameObject)
                .then(response => {
                    console.log(response)
                })

            this.setState({
                persons: namelist.concat(nameObject),
                newName: "",
                newNumber: ""
            })
            window.location.refresh()

        } else {
            if (window.confirm(`${this.state.newName} on jo luettelossa, korvataanko vanha numero uudella?`)) {
                const listofnames = this.state.persons.map(person => person.name)
                const nameindex = listofnames.indexOf(this.state.newName)
                const newPerson = this.state.persons[nameindex]
                newPerson.number = this.state.newNumber
                persons.updateName(newPerson, newPerson.id)
            }
            this.setState({ newName: "" })
            this.setState({ newNumber:""})
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
                    {this.state.persons.map(person => <ShowPersons id={person.id} person={person} filter={this.state.filter} />)}
                </ul>
      </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)
