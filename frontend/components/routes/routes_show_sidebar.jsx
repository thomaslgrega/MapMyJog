import React from 'react';
import { withRouter } from 'react-router-dom';
import CommentsIndex from '../comments/comments_index';

class RoutesShowSidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      creator_id: this.props.creator_id,
      name: this.props.name,
      activity: this.props.activity,
      description: this.props.description,
      waypoints: this.props.waypoints,
      distance: this.props.distance
    }
  }

  render() {
    return (
      <div className='routes-sidebar-container'>
        <h4 className="route-form-title">Route Details</h4>
        <div className="route-details-container">
          <div className="route-name-container">
            <span className="route-show-title">Route Name</span>
            <span className="route-show-content">{this.state.name}</span>
          </div>
          <div className="route-activity-container">
            <span className="route-show-title">Activity</span>
            <span className="route-show-content">{this.state.activity}</span>
          </div>
          <div className="route-distance-container">
            <span className="route-show-title">Distance</span>
            <span className="route-show-content">{this.state.distance}</span>
          </div>
          <div className="route-description-container">
            <span className="route-show-title">Description</span>
            <span className="route-show-content">{this.state.description}</span>
          </div>
        </div>
        <CommentsIndex routeId={this.props.id} />
      </div>
    )
  }
}

export default withRouter(RoutesShowSidebar);
