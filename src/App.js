import React, { Component } from "react";
import BeyContainer from "./BeyContainer"
import Favorites from "./Favorites"
import beyObjects from "./beyImages";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    beyObjects: beyObjects
  };

  favoriteBey = (event) => {
    let newBeyObjects = this.state.beyObjects.slice()
    let clicked = newBeyObjects.find(beyObj => beyObj.id === parseInt(event.target.id))
    clicked.favorite = !clicked.favorite
    this.setState({beyObjects: newBeyObjects})
  }

  render() {
    let favoriteBeys = this.state.beyObjects.filter(beyObj => beyObj.favorite)
    return (
      <div className="container">
        <BeyContainer beyObjects={this.state.beyObjects} handler={this.favoriteBey}/>
        <Favorites beyObjects={favoriteBeys} handler={this.favoriteBey}/>
      </div>
    );
  }
}

export default App;
