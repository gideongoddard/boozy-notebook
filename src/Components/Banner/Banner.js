import React from 'react';
import './Banner.css';

class Banner extends React.Component {
    constructor() {
        super()
        this.handleFormToggle = this.handleFormToggle.bind(this);
    }

    handleFormToggle() {
        this.props.onFormToggle();
    }

    render() {
        return (
            <section className="main-banner">
                <div className="main-banner-content">
                    <h1>Boozy Notebook</h1>
                    <p>Remember those tasty beers & wines that you usually forget!</p>
                    <div className="btn btn-primary" onClick={this.handleFormToggle}>Add a drink</div>
                </div>
            </section>
        )
    }
}

export default Banner;