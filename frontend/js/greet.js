import React from 'react';

export class Greet extends React.Component {
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
