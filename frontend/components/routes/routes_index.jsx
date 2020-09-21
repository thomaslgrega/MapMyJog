import React from 'react';
import RouteIndexItem from './route_index_item'

class RoutesIndex extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.requestRoutes(this.props.currentUser.id);
  }

  render() {
    if (!this.props.routes) {
      return null
    } else {
      return (
        <div className='routes-table-container'>
          <table className='routes-table'>
            <thead>
              <tr>
                <th className='table-header'>Route Name</th>
                <th className='table-header'>Created</th>
                <th className='table-header'>Distance</th>
                <th className='table-header'>Activity</th>
                <th className='table-header'>Options</th>
              </tr>
            </thead>
            <tbody>
              {this.props.routes.map(route => <RouteIndexItem 
                                                key={route.id} 
                                                route={route} 
                                                deleteRoute={this.props.deleteRoute}
                                                updateRoute={this.props.updateRoute}/>)}
            </tbody>
          </table>
        </div>
      )
    }
  }
}

export default RoutesIndex;