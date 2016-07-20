import React, { Component } from 'react'
import Util from '../util';

class Greet extends Component {
  constructor(props){
    super(props);
    this.state = {};
    Util.hoge();
  }

  render() {
    return (
      <div>
        Hello, {this.props.name}.
      </div>
    );
  }
}

global.T = global.T || {};
T.Greet = Greet;
