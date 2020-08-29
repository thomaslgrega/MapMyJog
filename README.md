<p align="left"><img width="" height="" src="/Users/thomasgrega/Desktop/mapmyjog/app/assets/images/github_photos/mapmyjog_logo.png"></p>

MapMyJog is a fitness app that takes advantage of the google maps and directions api to plot waypoints on a map and create a route. It also allows users to add descriptions and types of activities as well as see the distance of the route. Users can then save those routes, allowing them edit them, or delete them at a later time. To add a social aspect, you can access a friends list and go to their profile and see their routes.

## Live Link: https://tg-mapmyjog.herokuapp.com/

## Technologies Used
### Frontend
* React
* Redux

### Backend
* Ruby on Rails

### 
* Google Maps API

## User Auth

<p align="left"><img width="" height="" src="https://raw.githubusercontent.com/thomaslgrega/MapMyJog/master/app/assets/images/github_photos/maps.png"></p>

Users can sign up with a new account or log in with an account that they've created. A demo login user is also available to allow full testing of the app's features.

<p align="left"><img width="" height="" src="/Users/thomasgrega/Desktop/mapmyjog/app/assets/images/github_photos/maps.png"></p>

Clicking the Create Route button on the dashboard will take users to a google map. By adding a click event listener on the map, users can add waypoints. Using these waypoints and the Google Directions API, the map will create a route from waypoint to waypoint in the order that they're plotted. 

## snippet here!

Storing these waypoints in an array and some simple manipulation, we can do some cool things like undo a marker, reset markers, return the last marker to the first waypoint to make a full circle, and reverse a route with a click of a button. 

## Future Direction

- Add an activities feature where users can add and keep track of a specific workout that they've done or plan to do.
- Add a search feature for finding other users and also searching for routes by other people.
- Add a commenting feature to comment on other people's routes and workouts if they're made public
