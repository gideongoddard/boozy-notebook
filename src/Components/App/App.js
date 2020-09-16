import React from 'react';
import './App.css';
import Banner from '../Banner/Banner';
import Drinks from '../Drinks/Drinks';
import Form from '../Form/Form';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      beers: [],
      wines: [],
      form: false,
      newBeer: {
        beer: {
          name: '',
          brewery: '',
          rating: 0,
        }
      },
      newWine: {
        vineyard: '',
        grape: '',
        rating: 0,
      }
    };

    this.getBeers = this.getBeers.bind(this);
    this.getWines = this.getWines.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.updateNewBeerName = this.updateNewBeerName.bind(this);
    this.updateNewBeerBrewery = this.updateNewBeerBrewery.bind(this);
    this.updateNewBeerRating = this.updateNewBeerRating.bind(this);
    this.addBeer = this.addBeer.bind(this);
  }

  toggleForm() {
    if (this.state.form === false) {
      this.setState({form: true});
    } else {
      this.setState({form: false});
    }
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

  getWines() {
    fetch("http://localhost:4000/api/wine")
      .then(res => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          wines: result.wines
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      })
  }

  updateNewBeerName(name) {
    let newBeer = this.state.newBeer;
    newBeer.beer.name = name;
    this.setState({
      newBeer: newBeer
    })
  }

  updateNewBeerBrewery(brewery) {
    let newBeer = this.state.newBeer;
    newBeer.beer.brewery = brewery;
    this.setState({
      newBeer: newBeer
    })
  }

  updateNewBeerRating(rating) {
    let newBeer = this.state.newBeer;
    newBeer.beer.rating = rating;
    this.setState({
      newBeer: newBeer
    })
  }

  addBeer() {
    let newBeer = this.state.newBeer;
    let json = JSON.stringify(newBeer);
    const request = new Request('http://localhost:4000/api/beer', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: json});

    fetch(request)
      .then(res => {
        if (res.status === 201) {
          return res.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(res => {
        console.debug(res);
      }).catch(err => {
        console.error(err);
      })
  }

  componentWillMount() {
    this.getBeers();
    this.getWines();
  }

  render() {
    return (
      <main>
        <Form form={this.state.form} onFormToggle={this.toggleForm} newBeer={this.state.newBeer} newWine={this.state.newWine} onUpdateNewBeerName={this.updateNewBeerName} onUpdateNewBeerBrewery={this.updateNewBeerBrewery} onUpdateNewBeerRating={this.updateNewBeerRating} addBeer={this.addBeer} />
        <Banner form={this.state.form} onFormToggle={this.toggleForm} />
        <Drinks beers={this.state.beers} wines={this.state.wines} />
      </main>
    );
  }
}

export default App;
