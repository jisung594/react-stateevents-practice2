import React from "react";
import BeyCard from "./BeyCard"

class BeyContainer extends React.Component {
  render() {
    let beyCardArray = this.props.beyObjects.map(beyObj => {
      return <BeyCard key={beyObj.id} bey={beyObj} handler={this.props.handler}/>
    })
    return (
      <div className="index">
        <h1>Index</h1>
        {beyCardArray}
      </div>
    );
  }
}

export default BeyContainer;
