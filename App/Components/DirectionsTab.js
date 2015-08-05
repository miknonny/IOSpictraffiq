'use strict';

var React = require('react-native');

var {
  View,
  StyleSheet,
  ScrollView,
  Text
} = React;

var styles = StyleSheet.create({

});

class DirectionsTab extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }
  render () {
    return (
      <ScrollView>
        <Text>Directions here...</Text>
      </ScrollView>
    );
  }
}

module.exports = DirectionsTab;
