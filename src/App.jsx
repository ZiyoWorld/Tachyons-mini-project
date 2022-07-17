import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

import "./App.css";
class App extends React.Component{
    state = {
        robots: [],
        searchField: "",

    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
           .then( (response) => response.json())
           .then( (users)=> this.setState({robots: users}) )
    }

    onSearchChange = (e)=>{
        this.setState({
            searchField: e.target.value
        }) 
    }
    render(){
        const filtered = this.state.robots.filter( (robot => {
            return robot.name
            .toLocaleLowerCase()
            .includes(this.state.searchField.toLowerCase())
            
        }));

        if(this.state.robots.length === 0){
            return <h1>Loading...</h1>
        }
        else{
            return(
                <div className="wrapper tc">
                    <h1 className="titleRobo f2">ROBOTFRIENDS</h1>
                    <SearchBox searchChange = {this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filtered} />
                    </Scroll>
                </div>
            )

        }
        
    }
}
export default App;