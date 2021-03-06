import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';



class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onsearchChange = (event) =>{
		this.setState({searchfield: event.target.value })
		
	}

	render() {
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase)
		})

	return(
		<div className = 'tc'>

		<h1> Robot Friend </h1>
		<input 
		className = ' pa3 ba b--green bg-lightest-blue'
		type = 'search' 
		placeholder = 'search robot' 
		onChange = {this.onsearchChange}
		/>
		<CardList robots={this.state.robots}/>
		</div>

		);
	}

}





export default App;