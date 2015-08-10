'use strict';

var React = require('react-native');
var Router = require('react-native-router');
var SideBar = require('./SideBar');
var Directions = require('./Directions');

var {
  View,
  StyleSheet,
  ScrollView,
  Text
} = React;

var firstRoute = {
  name: 'Directions',
  component: Directions,
  leftCorner: SideBar
}


class DirectionsTab extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }
  render () {
    return (
      <Router firstRoute={firstRoute} />
    );
  }
}

var styles = StyleSheet.create({

});

module.exports = DirectionsTab;
