import React from 'react';
import './Drink.css';

class Drink extends React.Component {
    render() {
        if (this.props.beers) {
            if (this.props.beers.length === 0) {
                return null;
            } else {
                return (
                    <div className="drinks-container">
                        <div className="dc-head">
                            <h3>{this.props.h3}</h3>
                        </div>
                        <div className="drink-heading"><span>{this.props.col1}</span><span>{this.props.col2}</span><span>Rating</span></div>
                        <ul>
                            {this.props.beers.map(beer => (
                                <li className="drink" key={beer.id}>
                                <span>{beer.brewery}</span><span>{beer.name}</span><span>{beer.rating}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        } else if (this.props.wines) {
            if (this.props.wines.length === 0) {
                return null;
            } else if (this.props.wines) {
                return (
                    <div className="drinks-container">
                        <div className="dc-head">
                            <h3>{this.props.h3}</h3>
                        </div>
                        <div className="drink-heading"><span>{this.props.col1}</span><span>{this.props.col2}</span><span>Rating</span></div>
                        <ul>
                            {this.props.wines.map(wine => (
                                <li className="drink" key={wine.id}>
                                <span>{wine.vineyard}</span><span>{wine.grape}</span><span>{wine.rating}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        }
    }
}

export default Drink;