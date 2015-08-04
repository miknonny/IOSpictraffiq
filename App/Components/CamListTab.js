'use strict';
var React = require('react-native');

var {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
  ScrollView
} = React;

var styles = StyleSheet.create({
  listView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e3f2fd'
  },
  box: {
    flex: 1,
    height: 40,
    width: 200,
    backgroundColor: '#90caf9',
    alignItems: 'flex-start'
  },
  // #c51162 highlighter
  camContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#bbdefb',
    height: 100,
    marginLeft: 10,
    marginBottom: 5
  },
  thumbnail: {
    height: 80,
    width: 110,
    marginLeft: 5,
    marginRight: 5
  },
  moreDetails: {
    height: 30,
    width: 30,
    backgroundColor: '#c51162',
  }
});

var thumbnail = 'http://images.forbes.com/media/2013/07/16/0716_bruce-wayne_197x282.jpg';

class CamListTab extends React.Component {
  goToCamView () {
    var CamView = require('./CamView');
    this.props.navigator.push({
      title: 'Cam View',
      component: CamView,
      passProps: {}
    });
  }
  render () {
    return (
      <ScrollView style={styles.listView}>
        <View style={styles.camContainer}>
          <TouchableHighlight
            underlayColor='#e3f2fd'
            onPress={this.goToCamView.bind(this)}
            >
            <Image
              source={{uri: thumbnail}}
              style={styles.thumbnail}
            />
          </TouchableHighlight>
          <View style={styles.box}>
            <Text>
              Onipan Road
            </Text>
            <Text>
              last updated 3mins ago.
            </Text>
          </View>
          <View style={styles.moreDetails}>
            <Text>D</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

CamListTab.propTypes = {
  navigator: React.PropTypes.object.isRequired
};

module.exports = CamListTab;
