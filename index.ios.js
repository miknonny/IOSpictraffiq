/**
 * Pictraffiq Mobile front end.
 * https://github.com/miknonny/IOSpictraffiq.git
 */
'use strict';

var React = require('react-native');
var Main = require('./App/Components/Main');
var SideMenu = require('react-native-side-menu');
var Menu = require('./App/Components/Menu');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TabBarIOS,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

/**
 * Navigate to MAIN(Cams) page.
 */
class IOSpictraffiq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'camlist'
    };
  }
  render () {
    return (
      <SideMenu
        menu={<Menu navigator={navigator}/>}
        animation={'spring'}
        touchToClose={true}
        >
        <Main />
      </SideMenu>
    );
  }
}

AppRegistry.registerComponent('IOSpictraffiq', () => IOSpictraffiq);
