import React from 'react';
import './App.css';
import Banner from '../Banner/Banner';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      beers: []
    };
  }

  getBeers() {
    fetch("http://localhost:4000/api/beer")
      .then(res => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          beers: result.beers
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      })
  }

  componentWillMount() {
    this.getBeers();
  }

  render() {
    return (
      <main>
        <Banner />
        <ul>
          {this.state.beers.map(beer => (
            <li key={beer.name}>
              {beer.brewery} {beer.name}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default App;
