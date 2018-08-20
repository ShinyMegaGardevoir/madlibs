import React, { Component } from 'react';

import {
	Col,
	Row
} from 'reactstrap';

class MadlibForm extends Component {
	handleChange = function() {
		console.log("A change")
	}

	render() {
		return <h1>Mad Libs Form Component</h1>;
		return (
			<Row style={{textAlign: 'center', color: 'white'}}>
				<Col md = "3" className = "inputWrapper">
					<Row>
						<Col md = "2">
							<label className = "greenLabel">1</label>
						</Col>
					</Row>
				</Col>
			</Row>
		);
	}
}