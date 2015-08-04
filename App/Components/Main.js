'use strict';

var React = require('react-native');
var CamList = require('./CamList')
var CamView = require('./CamView');
var Favourites = require('./FavouritesTab');


var {
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
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
    console.log(this.props.navigator)
    return (
      <ScrollView style={styles.listView}>
        <CamList
          navigator={this.props.navigator}
        />
      </ScrollView>
    );
  }
}

module.exports = Main;
