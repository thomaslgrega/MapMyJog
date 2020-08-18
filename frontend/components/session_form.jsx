import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: '',
      fname: '',
      lname: '',
      dateOfBirth: '',
      gender: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderSignUpInputs = this.renderSignUpInputs.bind(this)
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

  renderSignUpInputs() {
    let SignUpInputs = null;
    if (this.props.formType === 'signup') {
      SignUpInputs = (
        <div>
          <input type="text"
            onChange={this.update('email')}
            value={this.state.email}
            placeholder='Email'
            className='session-form-inputs'
          />
          <input type="text"
            onChange={this.update('fname')}
            value={this.state.fname}
            placeholder='First Name'
            className='session-form-inputs'
          />
          <input type="text"
            onChange={this.update('lname')}
            value={this.state.lname}
            placeholder='Last Name'
            className='session-form-inputs'
          />
          <input type="date"
            onChange={this.update('date')}
            value={this.state.date}
            className='session-form-inputs'
          />
          <label>Male
            <input type="radio"
              onChange={this.update('gender')}
              value='male'
              checked={this.state.gender === 'male'}
              className='session-form-radio'
            />
          </label>
          <label>Female
            <input type="radio"
              onChange={this.update('gender')}
              value='female'
              checked={this.state.gender === 'female'}
              className='session-form-radio'
            />
          </label> 
        </div>
      )
    }
    return SignUpInputs;
  }

  render() {
    return (
      <div className="form-container">
        {this.props.navLink}
        <ul className="errors-list">
          {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
        </ul>

        <form onSubmit={this.handleSubmit} className="session-form">
          <input type="text" 
            onChange={this.update('username')} 
            value={this.state.username}
            placeholder="Username"
            className='session-form-inputs'
          />
          {this.renderSignUpInputs()}
          <input type="password" 
            onChange={this.update('password')} 
            value={this.state.password} 
            placeholder="Password"
            className='session-form-inputs'
          />
          <button className="session-form-btn">{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default SessionForm;