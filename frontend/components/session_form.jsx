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
      day: '',
      month: '',
      year: '',
      date_of_birth: '',
      gender: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderSignUpInputs = this.renderSignUpInputs.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  parseDate() {
    
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  renderSignUpInputs() {
    let SignUpInputs = null;
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const years = [];
    for (let i = 2009; i >= 1900; i--) {
      years.push(i);
    }

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
          <div className='birthdate-inputs'>
            <select onChange={this.update('day')} value={this.state.day}>
              {
                days.map((day, i)=> <option key={i} value={day}>{day}</option>)
              }
            </select>
            <select onChange={this.update('month')} value={this.state.month}>
              {
                months.map(month => <option value={month}>{month}</option>)
              }
            </select>
            <select onChange={this.update('year')} value={this.state.year}>
              {
                years.map(year => <option value={year}>{year}</option>)
              }
            </select>
          </div>
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