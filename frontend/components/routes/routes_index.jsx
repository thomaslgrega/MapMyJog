import React from 'react';
import RouteIndexItem from './route_index_item'

class RoutesIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestRoutes(this.props.currentUser.id);
  }

  render() {
    return (
      <div>
        {/* {
          this.props.routes.map(route => <RouteIndexItem key={route.id} route={route} />)
        } */}
      </div>
    )
  }
}

export default RoutesIndex;