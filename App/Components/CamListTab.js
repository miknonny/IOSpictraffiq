'use strict';
var React = require('react-native');
var CamList = require('./CamList');
var Router = require('react-native-router');
var SideBar = require('./SideBar');
var Search = require('./Search');

var {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
  ScrollView
} = React;


var firstRoute = {
  name: 'Cams', //Title bar
  component: CamList, //default route.
  leftCorner: SideBar,
  rightCorner: Search
}

class CamListTab extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <Router firstRoute={firstRoute} />
    );
  }
}

module.exports = CamListTab;
