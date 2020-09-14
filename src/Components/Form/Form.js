import React from 'react';
import BeerFields from '../BeerFields/BeerFields';
import WineFields from '../WineFields/WineFields';
import './Form.css';

class Form extends React.Component {
    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <div className="close">X</div>
                    <h1>What are you drinking?</h1>
                    <div className="tabs">
                        <h2 className="tab active">Beer</h2>
                        <h2 className="tab">Wine</h2>
                    </div>
                    <BeerFields />
                    <WineFields />
                </div>
            </div>
        )
    }
}

export default Form;