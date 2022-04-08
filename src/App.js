import React, { useState, useEffect } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.components";
import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder="Search Monsters" handleChange={handleChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
