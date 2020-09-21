import React from 'react';
import RoutesShowSidebar from './routes_show_sidebar';

class RoutesShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.route;
    if (this.state.waypoints.length > 0) {
      this.state.waypoints = JSON.parse(this.state.waypoints);
    }

    this.renderDirections = this.renderDirections.bind(this);

    this.latLngArr = this.state.waypoints
  }

  componentDidMount() {
    this.initMap()

    if (this.state.waypoints.length > 0) {
      this.renderDirections()
    }
  }

  componentWillUnmount() {
    this.props.clearRouteErrors();
  }

  initMap() {
    const sanFran = new google.maps.LatLng(37.7758, -122.435);
    const center = this.state.waypoints.length > 0 ? this.state.waypoints[0] : sanFran
    const mapOptions = {
      center,
      zoom: 13,
      clickableIcons: false
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  renderDirections() {
    if (!this.directionsService) {
      this.directionsService = new google.maps.DirectionsService();
    }

    if (!this.directionsDisplay) {
      this.directionsDisplay = new google.maps.DirectionsRenderer({ map: this.map, preserveViewport: true });
    }
    const midLatLngs = this.latLngArr.slice(1, this.latLngArr.length - 1);
    const wpts = midLatLngs.map(latLng => ({
      location: latLng,
      stopover: false
    }));

    const request = {
      origin: this.latLngArr[0],
      destination: this.latLngArr[this.latLngArr.length - 1],
      travelMode: 'WALKING',
      waypoints: wpts
    }

    this.directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(result);
        this.updateDistance(result);
      }
    });

    this.setState({ waypoints: this.latLngArr.slice() });
  }

  handleSidebar(e) {
    const sidebar = document.getElementsByClassName('routes-sidebar-container')[0]
    if (Array.from(e.currentTarget.classList).includes('btn-close')) {
      e.currentTarget.classList.remove("fa-caret-right")
      e.currentTarget.classList.remove('btn-close')
      e.currentTarget.classList.add('btn-open')
      e.currentTarget.classList.add("fa-caret-left")
    } else {
      e.currentTarget.classList.add('btn-close')
      e.currentTarget.classList.add("fa-caret-right")
      e.currentTarget.classList.remove("fa-caret-left")
      e.currentTarget.classList.remove('btn-open')
    }

    if (Array.from(sidebar.classList).includes('close')) {
      sidebar.classList.remove('close');
      sidebar.classList.add('open')
    } else {
      sidebar.classList.add('close');
      sidebar.classList.remove('open')
    }
  }

  render() {
    return (
      <div id="map-container">
        <div id="map" ref={map => this.mapNode = map}></div>
        <RoutesShowSidebar
          id={this.state.id}
          name={this.state.name}
          activity={this.state.activity}
          description={this.state.description}
          distance={this.state.distance}
          action={this.props.action}
          creator_id={this.state.creator_id}
          waypoints={this.state.waypoints}
          action={this.props.action}
          errors={this.props.errors}
        />
        <span className="fas fa-caret-left" onClick={this.handleSidebar}></span>
      </div>
    )
  }
}

export default RoutesShow;
