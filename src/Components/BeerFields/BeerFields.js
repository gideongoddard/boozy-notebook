import React from 'react';
import './Fields.css';

class BeerFields extends React.Component {
    render() {
        return (
            <form style={{ display: this.props.display === 'beer' ? 'block' : 'none' }}>
                <label className="bold-label">
                    Beer name
                    <input type="text" name="name" placeholder="What's the name of your beer?" required />
                </label>
                <label className="bold-label">
                    Brewery
                    <input type="text" name="brewery" placeholder="What's the name of the brewery?" required />
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
                <input type="submit" className="btn btn-primary" value="Add beer" />
            </form>
        )
    }
}

export default BeerFields;