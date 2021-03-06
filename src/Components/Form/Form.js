import React from 'react';
import BeerFields from '../BeerFields/BeerFields';
import WineFields from '../WineFields/WineFields';
import './Form.css';

class Form extends React.Component {
    constructor() {
        super();

        this.state = {
            display: "beer"
        };


        this.handleFormToggle = this.handleFormToggle.bind(this);
        this.handleBeerFields = this.handleBeerFields.bind(this);
        this.handleWineFields = this.handleWineFields.bind(this);
    }

    handleFormToggle() {
        this.props.onFormToggle();
    }

    handleBeerFields() {
        if (this.state.display === 'beer') {
            return;
        } else {
            this.setState({display: 'beer'});
        }
    }

    handleWineFields() {
        if (this.state.display === 'wine') {
            return;
        } else {
            this.setState({display: 'wine'});
        }
    }

    render() {
        if (!this.props.form) {
            return null;
        } else {
            return (
                <div className="modal">
                    <div className="modal-content">
                        <div className="close" onClick={this.handleFormToggle}>X</div>
                        <h1>What are you drinking?</h1>
                        <div className="tabs">
                            <h2 className={`tab${this.state.display === 'beer' ? ' active' : ''}`} onClick={this.handleBeerFields}>Beer</h2>
                            <h2 className={`tab${this.state.display === 'wine' ? ' active' : ''}`} onClick={this.handleWineFields}>Wine</h2>
                        </div>
                        <BeerFields display={this.state.display} newBeer={this.props.newBeer} onUpdateNewBeerName={this.props.onUpdateNewBeerName} onUpdateNewBeerBrewery={this.props.onUpdateNewBeerBrewery} onUpdateNewBeerRating={this.props.onUpdateNewBeerRating} addBeer={this.props.addBeer} />
                        <WineFields display={this.state.display} newWine={this.props.newWine} onUpdateNewWineVineyard={this.props.onUpdateNewWineVineyard} onUpdateNewWineGrape={this.props.onUpdateNewWineGrape} onUpdateNewWineRating={this.props.onUpdateNewWineRating} addWine={this.props.addWine} />
                    </div>
                </div>
            )
        }
    }
}

export default Form;