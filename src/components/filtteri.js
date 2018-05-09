import React from 'react';


class Filtteri extends React.Component {

    onFieldChange(event) {
        const filter = event.target.value
        this.props.onChange(filter)
    }

    render() {
        return(
            <form>
                Rajaa: <input value={this.props.filter} onChange={this.onFieldChange.bind(this)} />
            </form>
            )
    }
}

export default Filtteri