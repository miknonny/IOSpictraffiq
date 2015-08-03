'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
  Image
} = React;

var styles = StyleSheet.create({
  listView: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 65,
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
    backgroundColor: '#c51162',  }
});

/**
 * Returns a list of all cams.
 */

var thumbnail = 'http://images.forbes.com/media/2013/07/16/0716_bruce-wayne_197x282.jpg'
class Main extends React.Component {
  constructor (props) {
    super(props) 
    this.state = {
      cams: '',
      isLoading: false,
      error: false
    }
  }
  render () {
    return (
      <View style={styles.listView}>
        <View style={styles.camContainer}>
          <Image 
            source={{uri: thumbnail}}
            style={styles.thumbnail}
          />
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
        <View style={styles.camContainer}>
          <Image 
            source={{uri: thumbnail}}
            style={styles.thumbnail}
          />
          <View style={styles.box}>
            <Text>
              Ikorodu by anthony 
            </Text>
            <Text>
              last updated 2 minutes ago
            </Text>
          </View>
          <View style={styles.moreDetails}>
            <Text>D</Text>
          </View>
        </View>
      </View>
    );
  }
}

module.exports = Main;