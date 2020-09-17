import React from 'react';

class WineFields extends React.Component {
    constructor() {
        super();
        this.handleVineyardInput = this.handleVineyardInput.bind(this);
        this.handleGrapeInput = this.handleGrapeInput.bind(this);
        this.handleRatingInput = this.handleRatingInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleVineyardInput(e) {
        this.props.onUpdateNewWineVineyard(e.target.value);
    }

    handleGrapeInput(e) {
        this.props.onUpdateNewWineGrape(e.target.value);
    }

    handleRatingInput(e) {
        this.props.onUpdateNewWineRating(e.target.value);
    }

    handleSubmit(event) {
        this.props.addWine(event.target.value);
        event.preventDefault();
    }

    render() {
        return (
            <form style={{ display: this.props.display === 'wine' ? 'block' : 'none' }} onSubmit={this.handleSubmit}>
                <label className="bold-label">
                    Vineyard
                    <input type="text" name="vineyard" placeholder="What's the name of the vineyard?" onChange={this.handleVineyardInput} required />
                </label>
                <label className="bold-label">
                    Grape
                    <input type="text" name="brewery" placeholder="What's the name of the grape or grape blend?" onChange={this.handleGrapeInput} required />
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
                <input type="submit" className="btn btn-primary" value="Add wine" />
            </form>
        )
    }
}

export default WineFields;