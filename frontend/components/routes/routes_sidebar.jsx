import React from 'react';
import { withRouter } from 'react-router-dom';

class RoutesSidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      creator_id: this.props.creator_id,
      name: this.props.name,
      activity: this.props.activity,
      description: this.props.description,
      waypoints: this.props.waypoints,
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.waypoints.length > 1) {
      const waypointsJSON = JSON.stringify(this.state.waypoints)
      this.setState({
        waypoints: waypointsJSON,
        distance: this.props.distance
      }, () => this.props.action(this.state)
        .then(() => this.props.history.push('/')));
    } else {
      alert('You must have at least two points on the map to save a route.')
    }
  }

  render() {
    return (
      <div className='routes-sidebar-container'>
        <h4 className="route-form-title">Route Details</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="name-input-container">
            <input 
              type="text" 
              placeholder="Name this map" 
              onChange={this.update('name')} 
              className="sidebar-name-input"
              value={this.state.name} />
            <span className='required-field'>*</span>
          </div>
          <div className="activity-select-container">
            <select className="sidebar-activity-select" onChange={this.update('activity')} value={this.state.activity}>
              <option disabled>Choose an Activity</option>
              <option value="Run">Run</option>
              <option value="Walk">Walk</option>
              <option value="Winter sport / Activity">Winter sport / Activity</option>
              <option value="Bike Ride">Bike Ride</option>
              <option value="Sport/ Other Activity">Sport / Other Activity</option>
              <option value="Hike">Hike</option>
            </select>
            <span className="fas fa-sort-down select-down-arrow"></span>
            <span className='required-field-select'>*</span>
          </div>
          <button className="save-route-btn">SAVE ROUTE</button>
          <textarea cols="30" rows="2" 
            value={this.state.description} 
            placeholder='Describe this map' 
            onChange={this.update('description')}
            className="sidebar-description-textarea"
          >
          </textarea>
        </form>
        <ul className='route-errors'>
          {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
        </ul>
      </div>
    )
  }
}

export default withRouter(RoutesSidebar);
