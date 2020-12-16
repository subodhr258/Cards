import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import data from './robots.json';


const App = () => {
    return (
        <div class="container">
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList robots={data.robots}/>
        </div>
    )
}

export default App;