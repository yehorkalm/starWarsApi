import React, { Component } from 'react';

import Card from '../components/Card';
import Cardlist from '../components/Cardlist';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    console.log('constr');

    this.state = {
      people: [],
    };
  }

  async componentDidMount() {
    console.log('did mount');
    let data = [];
    for (let i = 1; i <= 10; i++) {
      const response = await fetch(`https://swapi.co/api/people/${i}`);
      data.push(await response.json());
    }
    console.log('data', data);
    await this.setState({ people: data });
    console.log('this.state.people', this.state.people);
    console.log('this.state.people[0]', this.state.people[0]);
  }

  render() {
    console.log('render');
    if (this.state.people.length > 0) {
      return (
        <div>
          <Cardlist people={this.state.people} />
        </div>
      );
    } else {
      return <h2>Loading...</h2>;
    }
  }
}

export default App;
