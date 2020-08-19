import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      email: '',
      first_name: '',
      last_name: '',
      day: '',
      month: '',
      year: '',
      date_of_birth: '',
      gender: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this)
    this.renderSignUpInputs = this.renderSignUpInputs.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.parseDate()

  }

  handleDemoSubmit(e) {
    e.preventDefault();
    this.props.loginDemo()
      .then(() => this.props.history.push('/'))
  }

  parseDate() {
    const combinedBirthdate = `${this.state.day}-${this.state.month}-${this.state.year}`;
    this.setState({
      date_of_birth: combinedBirthdate
    }, () => this.props.processForm(this.state)
        .then(() => this.props.history.push('/')));
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
        <div className='sign-up-inputs'>
          <input type="text"
            onChange={this.update('first_name')}
            value={this.state.first_name}
            placeholder='First Name'
            className='session-form-inputs'
          />
          <input type="text"
            onChange={this.update('last_name')}
            value={this.state.last_name}
            placeholder='Last Name'
            className='session-form-inputs'
          />
          <div className='birthdate-inputs'>
            <select onChange={this.update('day')} value={this.state.day}>
              <option default disabled value="">Day</option>
              {
                days.map((day, i)=> <option key={i} value={day}>{day}</option>)
              }
            </select>
            <select onChange={this.update('month')} value={this.state.month}>
              <option default disabled value="">Month</option>
              {
                months.map((month, i) => <option key={i} value={month}>{month}</option>)
              }
            </select>
            <select onChange={this.update('year')} value={this.state.year}>
              <option default disabled value="">Year</option>
              {
                years.map((year, i) => <option key={i} value={year}>{year}</option>)
              }
            </select>
          </div>
          <div className='gender-inputs'>
            <label>
              <span>Male</span>
              <input type="radio"
                onChange={this.update('gender')}
                value='male'
                checked={this.state.gender === 'male'}
                className='session-form-radio'
              />
              <span className="fas fa-check"></span>
            </label>
            <label>
              <span>Female</span>
              <input type="radio"
                onChange={this.update('gender')}
                value='female'
                checked={this.state.gender === 'female'}
                className='session-form-radio'
              />
              <span className="fas fa-check"></span>
            </label>
          </div>
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
        <button className='demo-user-btn' onClick={this.handleDemoSubmit}><span className="fas fa-user-alt"></span>SIGN IN WITH DEMO USER</button>
        <div className='divider-container'>
          <span className='divider'></span><span className='divider-text'>OR</span><span className='divider'></span>
        </div>
        <form onSubmit={this.handleSubmit} className="session-form">
          <input type="text" 
            onChange={this.update('email')} 
            value={this.state.email}
            placeholder="Email"
            className='session-form-inputs'
          />
          <input type="password" 
            onChange={this.update('password')} 
            value={this.state.password} 
            placeholder="Password"
            className='session-form-inputs'
          />
          {this.renderSignUpInputs()}
          <button className="session-form-btn">{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default SessionForm;