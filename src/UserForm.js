import React from 'react';

class UserForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({value: e.target.value});
	}

	handleSubmit(e) {
		alert('yayyyy' + this.state.value);
		e.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
				 Name: 
				 <textarea value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Sign in" />
			</form>
		);
	}
}

export default UserForm;
