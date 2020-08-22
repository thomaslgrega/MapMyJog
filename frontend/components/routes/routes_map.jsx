import React from 'react';

class RoutesMap extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      distance: 0
    }

    this.renderDirections = this.renderDirections.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.undoWaypoint = this.undoWaypoint.bind(this);
    this.clearWaypoints = this.clearWaypoints.bind(this);
    this.updateDistance = this.updateDistance.bind(this);

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

    let request = { 
      origin: this.latLngArr[0],
      destination: this.latLngArr[this.latLngArr.length - 1],
      travelMode: 'WALKING',
      waypoints: wpts
    }

    this.directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(result);
        this.updateDistance(result);
        console.log(result);
        console.log(this.state.distance);
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
    this.directionsDisplay = null;
    this.renderDirections();
  }

  updateDistance(result) {
    this.setState({
      distance: result.routes[0].legs[0].distance.text
    })
  }

  handleMapClick(e) {
    this.latLngArr.push(e.latLng);
    this.renderDirections();
  } 

  render() {
    return (
      <div id="map-container">
        <div id="map" ref={map => this.mapNode = map}></div>
        <div onClick={this.undoWaypoint}>Undo</div>
        <div onClick={this.clearWaypoints}>Clear</div>
      </div>
    )
  }
}

export default RoutesMap;