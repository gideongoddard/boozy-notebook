import React from 'react';
import './Beer.css';

class Beer extends React.Component {
    render() {
        return (
            <div className="drinks-container">
                <div className="dc-head">
                    <h3>Beer Fridge</h3>
                </div>
                <ul>
                    <li className="drink-heading"><span>Brewery</span><span>Beer</span><span>Rating</span></li>
                    {this.props.beers.map(beer => (
                        <li className="drink" key={beer.id}>
                        <span>{beer.brewery}</span><span>{beer.name}</span><span>{beer.rating}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Beer;