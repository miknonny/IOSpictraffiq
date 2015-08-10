'use strict'
var React = require('react-native');
var Router = require('react-native-router');
var SideBar = require('./SideBar');
var Settings = require('./Settings');

var {
  View,
  Text,
  ScrollView,
  TouchableHighlight
} = React;

var firstRoute = {
  name: 'Settings',
  component: Settings,
  leftCorner: SideBar
};

// The Route wrapper



class SettingsTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <Router firstRoute={firstRoute} />
    )
  }
}
module.exports = SettingsTab;
