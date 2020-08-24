import React from 'react';

class RoutesSidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      creator_id: this.props.creator_id,
      name: this.props.name,
      activity: this.props.activity,
      description: this.props.description,
      waypoints: this.props.waypoints,
      distance: this.props.distance
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.anotherTest = this.anotherTest.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  // anotherTest(e) {
  //   e.preventDefault()
  //   console.log(this.state)
  // }
  
  handleSubmit(e) {
    e.preventDefault();
    const waypointsJSON = JSON.stringify(this.state.waypoints)
    this.setState({
      waypoints: waypointsJSON
    }, this.props.action(this.state))
  }

  render() {
    return (
      <div className='routes-sidebar-container'>
        {/* <button onClick={this.anotherTest}>ANOTHER TEST</button> */}
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
      </div>
    )
  }
}

export default RoutesSidebar;
