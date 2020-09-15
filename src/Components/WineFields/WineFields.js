import React from 'react';

class WineFields extends React.Component {
    render() {
        return (
            <form style={{ display: this.props.display === 'wine' ? 'block' : 'none' }}>
                <label className="bold-label">
                    Vineyard
                    <input type="text" name="vineyard" placeholder="What's the name of the vineyard?" required />
                </label>
                <label className="bold-label">
                    Grape
                    <input type="text" name="brewery" placeholder="What's the name of the grape or grape blend?" required />
                </label>
                <p className="bold-label">Rating</p>
                <div className="radio-fields">
                    <input id="1" type="radio" name="rating" value="1" />
                    <label htmlFor="1">1 - disgusting, really just awful</label>
                </div>
                <div className="radio-fields">
                    <input id="2" type="radio" name="rating" value="2" />
                    <label htmlFor="2">2 - pretty bad, bleurgh</label>
                </div>
                <div className="radio-fields">
                    <input id="3" type="radio" name="rating" value="2" />
                    <label htmlFor="3">3 - not bad but not great</label>
                </div>
                <div className="radio-fields">
                    <input id="4" type="radio" name="rating" value="2" />
                    <label htmlFor="4">4 - really good, get me more..</label>
                </div>
                <div className="radio-fields">
                    <input id="5" type="radio" name="rating" value="2" />
                    <label htmlFor="5">5 - wow, dangerously tasty!</label>
                </div>
                <input type="submit" className="btn btn-primary" value="Add wine" />
            </form>
        )
    }
}

export default WineFields;