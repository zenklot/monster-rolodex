import { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      "monsters" : [
        {
          "id": 1,
          "name": "One"
        },
        {
          "id" : 2,
          "name": "Two"
        }
      ]
    }

  }

  render() {
    return (
      <div className='App'>
        {
          this.state.monsters.map(monster => {
            return ( <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>)
          }) 
        }
      </div>
    )
  }
}

export default App;
