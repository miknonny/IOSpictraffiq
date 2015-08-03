/**
 * Pictraffiq Mobile front end.
 * https://github.com/miknonny/IOSpictraffiq.git
 */
'use strict';

var React = require('react-native');
var Main = require('./App/Components/Main')

var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
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
  render () {
    return ( 
        <NavigatorIOS 
          style={styles.container}
          initialRoute={{
            title: 'CAMS',
            component: Main
          }}
        />
    );  
  }
}

AppRegistry.registerComponent('IOSpictraffiq', () => IOSpictraffiq);
