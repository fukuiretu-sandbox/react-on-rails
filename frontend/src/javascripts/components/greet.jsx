import React, { Component } from 'react';
import Util from '../util';

class Greet extends Component {
  static get propTypes() {
    return { name: React.PropTypes.string };
  }

  static get defaultProps() {
    return { name: 'Hogeo' };
  }

  constructor(props) {
    super(props);
    this.state = {};
    // test
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
global.T.Greet = Greet;
