import React from 'react';
import RoutesSidebar from './routes_sidebar';
import RoutesToolPanel from './routes_tool_panel';

class RoutesMap extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.route;
    if (this.state.waypoints.length > 0) {
      this.state.waypoints = JSON.parse(this.state.waypoints);
    }

    this.renderDirections = this.renderDirections.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.undoWaypoint = this.undoWaypoint.bind(this);
    this.clearWaypoints = this.clearWaypoints.bind(this);
    this.updateDistance = this.updateDistance.bind(this);
    this.reverseWaypoints = this.reverseWaypoints.bind(this);
    this.centerMap = this.centerMap.bind(this);
    this.returnToStart = this.returnToStart.bind(this);
    this.handleToolbarClick = this.handleToolbarClick.bind(this);
    
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
    this.map.addListener('click', this.handleMapClick);
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

  undoWaypoint() {
    if (this.latLngArr.length <= 2) {
      this.clearWaypoints()
    } else {
      this.latLngArr.pop();
      this.renderDirections()
    }
  }

  clearWaypoints() {
    if (this.state.waypoints.length > 0) {
      this.latLngArr = [];
      this.directionsDisplay.setDirections({ routes: this.latLngArr });
      this.setState({ distance: '0 MI', waypoints: [] })
    }
  }

  reverseWaypoints() {
    if (this.state.waypoints.length > 1) {
      this.latLngArr.reverse();
      this.renderDirections();
    }
  }

  updateDistance(result) {
    const distanceText = result.routes[0].legs[0].distance.text.toUpperCase()
    this.setState({
      distance: distanceText
    })
  }

  handleMapClick(e) {
    this.latLngArr.push({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    this.renderDirections();
  } 

  centerMap() {
    let bounds;
    if (this.state.waypoints.length > 1) {
      bounds = this.directionsDisplay.getDirections().routes[0].bounds;
      const padding = {
        bottom: 400,
        left: 600,
        right: 600,
        top: 400
      }
  
      this.map.panToBounds(bounds, padding);
    } 
  }

  returnToStart() {
    if (this.state.waypoints.length > 1) {
      this.latLngArr.push(this.latLngArr[0]);
      this.renderDirections();
    }
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

  handleToolbarClick(e) {
    const arrow = document.getElementsByClassName('tools-down-arrow')[0]
    const toolbar = document.getElementsByClassName('button-panel-container')[0]

    if (Array.from(toolbar.classList).includes('hide-toolbar')) {
      arrow.classList.remove('fa-chevron-left')
      arrow.classList.add('fa-chevron-down')
      toolbar.classList.remove('hide-toolbar');
    } else {
      arrow.classList.add('fa-chevron-left')
      arrow.classList.remove('fa-chevron-down')
      toolbar.classList.add('hide-toolbar');
    }
  }

  render() {
    return (
      <div id="map-container">
        <div id="map" ref={map => this.mapNode = map}></div>
        <RoutesSidebar 
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
          type={this.props.type}
        />
        <span className="fas fa-caret-left" onClick={this.handleSidebar}></span>

        <RoutesToolPanel 
          clearWaypoints={this.clearWaypoints}
          undoWaypoint={this.undoWaypoint}
          reverseWaypoints={this.reverseWaypoints}
          centerMap={this.centerMap}
          returnToStart={this.returnToStart}
          distance={this.state.distance}
          handleToolbarClick={this.handleToolbarClick}
        />
      </div>
    )
  }
}

export default RoutesMap;
