import React from 'react';
import RoutesSidebar from './routes_sidebar';
import RoutesToolPanel from './routes_tool_panel';

class RoutesMap extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.route;

    this.renderDirections = this.renderDirections.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.undoWaypoint = this.undoWaypoint.bind(this);
    this.clearWaypoints = this.clearWaypoints.bind(this);
    this.updateDistance = this.updateDistance.bind(this);
    this.reverseWaypoints = this.reverseWaypoints.bind(this);
    this.centerMap = this.centerMap.bind(this);
    this.returnToStart = this.returnToStart.bind(this);

    this.latLngArr = []
  }

  componentDidMount() {
    this.initMap()
  }

  initMap() {
    const sanFran = new google.maps.LatLng(37.7758, -122.435);
    const mapOptions = {
      center: sanFran,
      zoom: 13,
      clickableIcons: false
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.map.addListener('click', this.handleMapClick)
  }

  renderDirections() {
    if (!this.directionsService) 
      this.directionsService = new google.maps.DirectionsService();

    if (!this.directionsDisplay) 
      this.directionsDisplay = new google.maps.DirectionsRenderer({ map: this.map, preserveViewport: true });

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
  }

  undoWaypoint() {
    this.latLngArr.pop();
    if (this.latLngArr.length === 0) this.directionsService = null;
    this.renderDirections();
  }

  clearWaypoints() {
    this.latLngArr = [];
    this.directionsDirections = null;
    this.renderDirections();
  }

  reverseWaypoints() {
    this.latLngArr.reverse();
    this.renderDirections();
  }

  updateDistance(result) {
    const distanceText = result.routes[0].legs[0].distance.text.toUpperCase()
    this.setState({
      distance: distanceText
    })
  }

  handleMapClick(e) {
    this.latLngArr.push({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    console.log(this.latLngArr);
    this.renderDirections();
  } 

  centerMap() {
    const bounds = this.directionsDisplay.getDirections().routes[0].bounds;
    const padding = {
      bottom: 400,
      left: 600,
      right: 600,
      top: 400
    }

    this.map.panToBounds(bounds, padding);
  }

  returnToStart() {
    this.latLngArr.push(this.latLngArr[0]);
    this.renderDirections();
  }

  render() {
    return (
      <div id="map-container">
        <div id="map" ref={map => this.mapNode = map}></div>
        <RoutesSidebar 
          distance={this.state.distance}
          action={this.props.action}
        />

        <RoutesToolPanel 
          clearWaypoints={this.clearWaypoints}
          undoWaypoint={this.undoWaypoint}
          reverseWaypoints={this.reverseWaypoints}
          centerMap={this.centerMap}
          returnToStart={this.returnToStart}
          distance={this.state.distance}
        />
      </div>
    )
  }
}

export default RoutesMap;
