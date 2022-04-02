import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import "./App.css";

// Hooks are used to convert our class components into stateful functional components
// Only call Hooks from React Functions
// Only call Hooks at the Top Level, don't call inside loops, conditions, or nested functions

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <h1 className="tc">Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
