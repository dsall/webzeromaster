import React from 'react';
import './App.css'

class Welcome extends React.Component {
  render() {
    return (
    	<div>
    	<h1>Hello, {this.props.name}</h1>;
    	</div>

    	);
  }
}

export default Welcome;


