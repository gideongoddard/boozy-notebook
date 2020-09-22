import React from 'react';
import './Fields.css';

class BeerFields extends React.Component {
    constructor() {
        super();

        this.state = {}

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
        switch(e.target.value) {
            case '1':
                this.setState({
                    radioOneChecked: true,
                    radioTwoChecked: false,
                    radioThreeChecked: false,
                    radioFourChecked: false,
                    radioFiveChecked: false,
                })
                break;
            case '2':
                this.setState({
                    radioOneChecked: false,
                    radioTwoChecked: true,
                    radioThreeChecked: false,
                    radioFourChecked: false,
                    radioFiveChecked: false,
                })
                break;
            case '3':
                this.setState({
                    radioOneChecked: false,
                    radioTwoChecked: false,
                    radioThreeChecked: true,
                    radioFourChecked: false,
                    radioFiveChecked: false,
                })
                break;
            case '4':
                this.setState({
                    radioOneChecked: false,
                    radioTwoChecked: false,
                    radioThreeChecked: false,
                    radioFourChecked: true,
                    radioFiveChecked: false,
                })
                break;
            case '5':
                this.setState({
                    radioOneChecked: false,
                    radioTwoChecked: false,
                    radioThreeChecked: false,
                    radioFourChecked: false,
                    radioFiveChecked: true,
                })
                break;
        }
        this.props.onUpdateNewBeerRating(e.target.value)
    }

    handleSubmit(event) {
        this.props.addBeer(event.target.value);
        this.setState({
            radioOneChecked: false,
            radioTwoChecked: false,
            radioThreeChecked: false,
            radioFourChecked: false,
            radioFiveChecked: false,
        })
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
                    <input id="1" type="radio" name="rating" value="1" onChange={this.handleRatingInput} checked={this.state.radioOneChecked} required />
                    <label htmlFor="1">1 - disgusting, really just awful</label>
                </div>
                <div className="radio-fields">
                    <input id="2" type="radio" name="rating" value="2" onChange={this.handleRatingInput} checked={this.state.radioTwoChecked} />
                    <label htmlFor="2">2 - pretty bad, bleurgh</label>
                </div>
                <div className="radio-fields">
                    <input id="3" type="radio" name="rating" value="3" onChange={this.handleRatingInput} checked={this.state.radioThreeChecked} />
                    <label htmlFor="3">3 - not bad but not great</label>
                </div>
                <div className="radio-fields">
                    <input id="4" type="radio" name="rating" value="4" onChange={this.handleRatingInput} checked={this.state.radioFourChecked} />
                    <label htmlFor="4">4 - really good, get me more..</label>
                </div>
                <div className="radio-fields">
                    <input id="5" type="radio" name="rating" value="5" onChange={this.handleRatingInput} checked={this.state.radioFiveChecked} />
                    <label htmlFor="5">5 - wow, dangerously tasty!</label>
                </div>
                <input type="submit" className="btn btn-primary" value="Add beer" />
            </form>
        )
    }
}

export default BeerFields;