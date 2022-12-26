import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
      const fetchUsers = async () => {
        const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
        setMonsters(users)
      }
      fetchUsers()
      
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchField = event.target.value.toLowerCase();
    setSearchField(searchField);
  };

  return (
    <div className="App">
      <SearchBox placeholder="Search Monster..." onChangeHandler={onSearchChange} className="monster-search-box" />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
