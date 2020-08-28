import React from 'react';

class RoutesShow extends React.Component {
  constructor(props) {
    super(props)

    this.renderDirections = this.renderDirections.bind(this);
  }

  componentDidMount() {
    const { routeId } = this.props.match.params;
    this.props.requestRoute(routeId);
    if (Object.keys(this.props.routes).length > 0) {
      this.initMap(this.props.routes[routeId])
    }

    if (Object.keys(this.props.routes).length > 0) {
      this.renderDirections()
    }
  }

  initMap(route) {
    // const sanFran = new google.maps.LatLng(37.7758, -122.435);
    // const center = this.props.waypoints.length > 0 ? this.props.waypoints[0] : sanFran
    const routeWaypoints = JSON.parse(route.waypoints);
    const mapOptions = {
      // center,
      center: routeWaypoints[0],
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

    let routeWaypoints = Object.values(this.props.routes)[0].waypoints;
    routeWaypoints = JSON.parse(routeWaypoints);
    const midLatLngs = routeWaypoints.slice(1, routeWaypoints.length - 1);
    const wpts = midLatLngs.map(latLng => ({
      location: latLng,
      stopover: false
    }));

    const request = {
      origin: routeWaypoints[0],
      destination: routeWaypoints[routeWaypoints.length - 1],
      travelMode: 'WALKING',
      waypoints: wpts
    }

    if (routeWaypoints.length > 0) {
      this.directionsService.route(request, (result, status) => {
        if (status === 'OK') {
          this.directionsDisplay.setDirections(result);
        }
      });
    }

    // this.setState({ waypoints: routeWaypoints.slice() });
  }

  render() {
    this.renderDirections()
    return (
      <div id="map-container">
        <div id="map" ref={map => this.mapNode = map}></div>
      </div>
    )
  }
}

export default RoutesShow;
