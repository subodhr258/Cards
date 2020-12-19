import React from 'react';
import CardList from './Components/CardList';
import SearchBox from './Components/SearchBox';
import data from './robots.json';
import "./App.css";


const App = () => {
    return (
        <div class="container">
            <h1>RoboFriends</h1>
            <SearchBox />
            <CardList robots={data.robots} />
        </div>
    )
}

export default App;
