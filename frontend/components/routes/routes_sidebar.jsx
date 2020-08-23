import React from 'react';

class RoutesSidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      activity: '',
      description: '',
      distance: this.props.distance
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }
  
  handleSubmit() {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name this map" onChange={this.update('name')} value={this.state.name} />
          <select onChange={this.update('activity')} value={this.state.activity}>
            <option defaultValue disabled value="">Choose an Activity</option>
            <option value="Jog">Jog</option>
            <option value="Walk">Walk</option>
            <option value="Winter sport / Activity">Winter sport / Activity</option>
            <option value="Bike Ride">Bike Ride</option>
            <option value="Sport/ Other Activity">Sport / Other Activity</option>
            <option value="Hike">Hike</option>
          </select>
          <button>SAVE ROUTE</button>
          <textarea cols="30" rows="2" placeholder='Describe this map'></textarea>
        </form>
      </div>
    )
  }
}

export default RoutesSidebar;

const mSTP = ({ entities, session }) => ({
  currentUser: entities.users[session.id]
});