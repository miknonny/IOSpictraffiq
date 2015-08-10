'use strict'
var React = require('react-native');
var Router = require('react-native-router');

var {
  View,
  Text,
  ScrollView,
  TouchableHighlight
} = React;

class HelloPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <TouchableHighlight
        onPress={this.nextPage}
        underlayColor="transparent">
        <Text>Next page please!</Text>
      </TouchableHighlight>
    );
  }
}

var firstRoute = {
  name: 'Welcome',
  component: HelloPage
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
