'use strict';
var React = require('react-native');
var CamList = require('./CamList');
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

var firstRoute = {
  name: 'Cams',
  component: CamList,
  leftCorner: SideBar,
  rightCorner: Search
}
class CamListTab extends React.Component {

  render () {
    return (
      <CamList />
    );
  }
}

CamListTab.propTypes = {
  navigator: React.PropTypes.object.isRequired
};

module.exports = CamListTab;
