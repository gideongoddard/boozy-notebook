import React from 'react';

class Beer extends React.Component {
    render() {
        {this.props.beers.map(beer => (
            <li className="drink" key={beer.id}>
            <span>{beer.brewery}</span><span>{beer.name}</span><span>{beer.rating}</span>
            </li>
        ))}
    }
}

export default Beer;