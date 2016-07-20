import React from 'react';

class Greet extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>Hello, {this.props.name}.</div>
    );
  }
}

global.T = global.T || {};
T.Greet = Greet;
