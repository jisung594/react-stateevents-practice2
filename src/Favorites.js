import React, { Component } from "react";
import BeyCard from "./BeyCard"

export default class Favorites extends Component {
  render() {
    let beyCardArray = this.props.beyObjects.map(beyObj => {
      return <BeyCard key={beyObj.id} bey={beyObj} handler={this.props.handler}/>
    })
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {beyCardArray}
      </div>
    );
  }
}
