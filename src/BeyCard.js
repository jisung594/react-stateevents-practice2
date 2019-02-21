import React, { Component } from "react";

class BeyCard extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.bey.name}</h3>
        <img alt="" src={this.props.bey.img} id={this.props.bey.id} onClick={this.props.handler}/>
      </div>
    );
  }
}

export default BeyCard;
