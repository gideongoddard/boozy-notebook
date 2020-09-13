import React from 'react';
import './Wine.css';

class Wine extends React.Component {
    render() {
        return (
            <div className="drinks-container">
                <div className="dc-head">
                    <h3>Wine Cellar</h3>
                </div>
                <ul>
                    <li className="drink-heading"><span>Vineyard</span><span>Grape(s)</span><span>Rating</span></li>
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

export default Wine;