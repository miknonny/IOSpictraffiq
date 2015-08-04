'use strict';

var React = require('react-native')
var CamList = require('./CamList');

var {
  StyleSheet,
  View,
  ScrollView,
  Text
} = React;

var styles = StyleSheet.create({
  camView: {
    flex: 1,
    marginTop: 65,
    flexDirection: 'column',
    backgroundColor: '#e3f2fd'
  },
  cam: {
    // flex: 1,
    height: 250,
    backgroundColor: '#212121'
  },
})

class CamView extends React.Component {
  render () {
    return (
      <View style={styles.camView}>
        <View style={styles.cam}>
          <Text>Video showing here.</Text>
        </View>
        <ScrollView>
          <Text>Do an analysis of traffic here, ask users for feedback on current status of traffic.</Text>
        </ScrollView>
      </View>
    )
  }
}

module.exports = CamView;