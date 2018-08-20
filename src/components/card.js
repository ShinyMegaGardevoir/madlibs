import React, { Component } from 'react';

import Input from './input';

class Card extends Component {
	constructor() {
		super()

		this.state = {
			color: '',
			pluralNoun: '',
		}

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		this.setState({ color: event.target.value })
		console.log(this.state.color);
	}

	render() {
		return (
			<div className = "card">
			<h1>{this.state.color}</h1>
			{ Input("Color", this.state.color, this.handleInputChange) }
			{ Input("Plural Noun", this.state.pluralNoun, this.handleInputChange) }
			</div>
			)
	}
}

export default Card;