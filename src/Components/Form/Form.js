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
        return (
            <div style={{ display: this.props.form ? 'flex' : 'none' }} className="modal">
                <div className="modal-content">
                    <div className="close" onClick={this.handleFormToggle}>X</div>
                    <h1>What are you drinking?</h1>
                    <div className="tabs">
                        <h2 className={`tab${this.state.display === 'beer' ? ' active' : ''}`} onClick={this.handleBeerFields}>Beer</h2>
                        <h2 className={`tab${this.state.display === 'wine' ? ' active' : ''}`} onClick={this.handleWineFields}>Wine</h2>
                    </div>
                    <BeerFields display={this.state.display} />
                    <WineFields display={this.state.display} />
                </div>
            </div>
        )
    }
}

export default Form;