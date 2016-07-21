import React, { Component } from 'react';
import axios from 'axios';

class AjaxSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: 'init',
    };
  }

  componentDidMount() {
    axios.get('/sample.json').then((response) => {
      this.setState({
        sample: response.data.sample,
      });
    }).catch((response) => {
      console.log(response);
    });
  }

  render() {
    return (
      <div>
        {this.state.sample}
      </div>
    );
  }
}

global.T = global.T || {};
global.T.AjaxSample = AjaxSample;
