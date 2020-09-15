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
      form: false
    };

    this.getBeers = this.getBeers.bind(this);
    this.getWines = this.getWines.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
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

  componentWillMount() {
    this.getBeers();
    this.getWines();
  }

  render() {
    return (
      <main>
        <Form form={this.state.form} onFormToggle={this.toggleForm} />
        <Banner form={this.state.form} onFormToggle={this.toggleForm} />
        <Drinks beers={this.state.beers} wines={this.state.wines} />
      </main>
    );
  }
}

export default App;
