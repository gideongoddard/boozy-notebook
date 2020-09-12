import React from 'react';
import './Banner.css';

class Banner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="main-banner">
                <div className="main-banner-content">
                    <h1>Boozy Notebook</h1>
                    <p>Remember those tasty beers & wines that you usually forget!</p>
                    <a className="btn btn-primary" href="#">Add a drink</a>
                </div>
            </section>
        )
    }
}

export default Banner;