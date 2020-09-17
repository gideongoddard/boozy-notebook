import React from 'react';
import './Fields.css';

class BeerFields extends React.Component {
    constructor() {
        super();
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleBreweryInput = this.handleBreweryInput.bind(this);
        this.handleRatingInput = this.handleRatingInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameInput(e) {
        this.props.onUpdateNewBeerName(e.target.value)
    }

    handleBreweryInput(e) {
        this.props.onUpdateNewBeerBrewery(e.target.value)
    }

    handleRatingInput(e) {
        this.props.onUpdateNewBeerRating(e.target.value)
    }

    handleSubmit(event) {
        this.props.addBeer(event.target.value);
        event.preventDefault();
    }

    render() {
        return (
            <form style={{ display: this.props.display === 'beer' ? 'block' : 'none' }} onSubmit={this.handleSubmit}>
                <label className="bold-label">
                    Beer name
                    <input type="text" name="name" placeholder="What's the name of your beer?" value={this.props.newBeer.name} onChange={this.handleNameInput} required />
                </label>
                <label className="bold-label">
                    Brewery
                    <input type="text" name="brewery" placeholder="What's the name of the brewery?" value={this.props.newBeer.brewery} onChange={this.handleBreweryInput} required />
                </label>
                <p className="bold-label">Rating</p>
                <div className="radio-fields">
                    <input id="1" type="radio" name="rating" value="1" onChange={this.handleRatingInput} required />
                    <label htmlFor="1">1 - disgusting, really just awful</label>
                </div>
                <div className="radio-fields">
                    <input id="2" type="radio" name="rating" value="2" onChange={this.handleRatingInput} />
                    <label htmlFor="2">2 - pretty bad, bleurgh</label>
                </div>
                <div className="radio-fields">
                    <input id="3" type="radio" name="rating" value="3" onChange={this.handleRatingInput} />
                    <label htmlFor="3">3 - not bad but not great</label>
                </div>
                <div className="radio-fields">
                    <input id="4" type="radio" name="rating" value="4" onChange={this.handleRatingInput} />
                    <label htmlFor="4">4 - really good, get me more..</label>
                </div>
                <div className="radio-fields">
                    <input id="5" type="radio" name="rating" value="5" onChange={this.handleRatingInput} />
                    <label htmlFor="5">5 - wow, dangerously tasty!</label>
                </div>
                <input type="submit" className="btn btn-primary" value="Add beer" />
            </form>
        )
    }
}

export default BeerFields;