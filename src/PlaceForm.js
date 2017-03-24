import React from 'react';


class PlaceForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			zipcode: ''
		};
	}

	getInitialState() {
		return {
			name: '',
			zipcode: ''
		}
	}

	handleChange(name, e) {
		var change = {};
		change[name] = e.target.value;
		this.setState(change);
	}

	handleSubmit(e) {
		e.preventDefault();
		alert(this.state.name);
	}

	render() {
		const name = this.state.name;
		const zipcode = this.state.zipcode;

		return (
			<div>
				<div>{this.state.zipcode}</div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<label>Name: 
						<textarea type="name" value={name} onChange={this.handleChange.bind(this, 'name')} />
					</label>
					<label>Zipcode: 
					    <input type="zipcode" value={zipcode} onChange={this.handleChange.bind(this, 'zipcode')} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default PlaceForm;
