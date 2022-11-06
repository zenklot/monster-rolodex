import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return {
        searchField
      };
    });
  }

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filterMonsters = monsters.filter((monster) => monster.name
      .toLowerCase()
      .includes(searchField)
  )

    return (
      <div className="App">
        <SearchBox placeholder="Search Monster..." onChangeHandler={onSearchChange} className="monster-search-box" />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
