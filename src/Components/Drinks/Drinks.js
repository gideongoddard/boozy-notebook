import React from 'react';
import './Drinks.css';
import Drink from '../Drink/Drink';
import beerImg from './beer.jpg';

class Drinks extends React.Component {
    constructor() {
        super();
        this.handleFormToggle = this.handleFormToggle.bind(this);
    }

    handleFormToggle() {
        this.props.onFormToggle();
    }

    render() {
        if (this.props.beers.length === 0 && this.props.wines.length === 0) {
            return (
                <section className="drinks-intro">
                    <h2>Your Saved Drinks</h2>
                    <p>You don't have any saved drinks - let's get started!</p>
                    <img width="100%" src={beerImg} alt="beer" />
                    <div id="add-drink-2" className="btn btn-primary" onClick={this.handleFormToggle}>Have a drink</div>
                </section>
            )
        } else {
            return (
                <section className="drinks-intro">
                    <h2>Your Saved Drinks</h2>
                    <p>See what you've already saved.</p>
                    <Drink beers={this.props.beers} h3="Beer Fridge" col1="Brewery" col2="Beer" />
                    <Drink wines={this.props.wines} h3="Wine Cellar" col1="Vineyard" col2="Grape" />
                </section>
            )
        }
    }
}

export default Drinks;