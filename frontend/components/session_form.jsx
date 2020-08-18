import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  render() {
        

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.props.formType} page!</h1>
        <ul>
          {this.props.errors.map(error => <li>{error}</li>)}
        </ul>
        <label>Username:
          <input type="text" onChange={this.update('username')} />
        </label>
        <label>Password:
          <input type="password" onChange={this.update('password')} />
        </label>
        <button>{this.props.formType}</button>
      </form>
    )
  }
}

export default SessionForm;