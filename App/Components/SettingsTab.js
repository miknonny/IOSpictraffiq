'use strict'
var React = require('react-native');

var {
  View,
  Text,
  ScrollView
} = React;

class SettingsTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render () {
    return (
      <ScrollView>
        <Text>App settings here...</Text>
      </ScrollView>
    );
  }
}

module.exports = SettingsTab;
