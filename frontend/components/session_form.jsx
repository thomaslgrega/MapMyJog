import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: ''
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
    const otherFormRoute = this.props.formType === 'signup' ? 'login' : 'signup';
    let emailSignUpInput = null;

    if (this.props.formType === 'signup') {
      emailSignUpInput = <label>Email:
        <input type="text" onChange={this.update('email')} value={this.state.email} />
      </label>
    };

    return (
      <div>
        <h1>{this.props.formType} page!</h1>
        <Link to={`/${otherFormRoute}`}>{otherFormRoute}</Link>
        <ul>
          {Object.values(this.props.errors).map((error, i) => <li key={i}>{error}</li>)}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input type="text" onChange={this.update('username')} value={this.state.username}/>
          </label>
          {emailSignUpInput}
          <label>Password:
            <input type="password" onChange={this.update('password')} value={this.state.password} />
          </label>
          <button>{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default SessionForm;