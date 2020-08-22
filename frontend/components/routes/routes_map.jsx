import React from 'react';

class RoutesMap extends React.Component {
  constructor(props) {
    super(props);

    this.handleMapClick = this.handleMapClick.bind(this);
    this.initMap = this.initMap.bind(this);
    this.placeMarker = this.placeMarker.bind(this);
    // this.createPolyline = this.createPolyline.bind(this);
    this.undoWaypoint = this.undoWaypoint.bind(this);
    this.renderDirections = this.renderDirections.bind(this);

    this.waypoints = [];
    this.latLngArr = [];
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

  handleMapClick(e) {
    console.log(e.latLng)
    this.placeMarker(e.latLng);
  }

  placeMarker(latLng) {
    // const marker = new google.maps.Marker({
    //   position: latLng,
    //   map: this.map,
    //   title: 'This is a test'
    // });

    const lat = latLng.lat();
    const lng = latLng.lng();
    
    this.latLngArr.push(latLng);
    this.waypoints.push({ lat, lng });
    console.log(this.waypoints);
    // this.createPolyline();
    if (this.waypoints.length > 1) {
      this.renderDirections();
    } else {
      const marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: 'This is a test'
    });
    }
  }

  // createPolyline() {
  //   const runPath = new google.maps.Polyline({
  //     path: this.waypoints,
  //     geodesic: false,
  //     strokeColor: "#FF0000",
  //     strokeOpacity: 1.0,
  //     strokeWeight: 2
  //   });

  //   runPath.setMap(this.map)
  // };

  renderDirections() {
    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer({ preserveViewport: true });
    console.log(this.latLngArr)
    let request = { 
      origin: this.waypoints[this.waypoints.length - 2],
      destination: this.waypoints[this.waypoints.length - 1],
      travelMode: 'WALKING',
      // waypoints: this.latLngArr
    }

    directionsDisplay.setMap(this.map);
    directionsService.route(request, (result, status) => {
      if (status == 'OK') {
        console.log(result);
        directionsDisplay.setDirections(result);
      }
    });
  }

  // clearWaypoints() {

  // }

  undoWaypoint() {
    const lastWaypoint = this.waypoints.pop();
    lastWaypoint.setMap(null);
  }

  render() {
    return (
      <div id="map-container">
        <div id="map" ref={map => this.mapNode = map}></div>
        <div onClick={this.undoWaypoint}>undo</div>

      </div>
    )
  }
}

export default RoutesMap;