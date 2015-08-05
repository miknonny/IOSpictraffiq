'use strict';

var React = require('react-native');
var CamListTab = require('./CamListTab');
var FavouritesTab = require('./FavouritesTab');
var SettingsTab = require('./SettingsTab');
var DirectionsTab = require('./DirectionsTab');
var {Icon, TabBarIOS} = require('react-native-icons');
var TabBarItemIOS = TabBarIOS.Item;

var {
  StyleSheet,
  // TabBarIOS
} = React;

var styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#dfdfdf', //gray
    flex: 1,
    color: '#ff0000', // red
    tintColor: '#877324' //gold
  }
});


class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedTab: 'camlist'
    };
  }

  render () {
    return (
      // When using system icon title is overidden by the system icon title.
      <TabBarIOS selectedTab={this.state.selectedTab}
        tintColor={'#c1d82f'}
        barTintColor={'#000000'}
        styles={styles.tabBar}>

        <TabBarItemIOS
          name="Camlist"
          iconName={'ion|ios-eye-outline'}
          selected={this.state.selectedTab === 'camlist'}
          title={'Cams'}
          onPress={() => {
            this.setState({
              selectedTab: 'camlist'
            });
          }} >
            <CamListTab navigator={this.props.navigator}/>
        </TabBarItemIOS>

        <TabBarItemIOS
          name="favourites"
          iconName={'ion|ios-heart-outline'}
          selected={this.state.selectedTab === 'favourites'}
          title={'Favourites'}
          onPress={() => {
            this.setState({
              selectedTab: 'favourites'
            });
          }} >
            <FavouritesTab />
        </TabBarItemIOS>

        <TabBarItemIOS
          name="Directions"
          iconName={'ion|arrow-graph-up-right'}
          selected={this.state.selectedTab === 'directions'}
          title={'Directions'}
          onPress={() => {
            this.setState({
              selectedTab: 'directions'
            });
          }} >
            <DirectionsTab />
        </TabBarItemIOS>
        
        <TabBarItemIOS
          name="Settings"
          iconName={'ion|ios-gear-outline'}
          selected={this.state.selectedTab === 'settings'}
          title={'Settings'}
          onPress={() => {
            this.setState({
              selectedTab: 'settings'
            });
          }} >
            <SettingsTab />
        </TabBarItemIOS>

      </TabBarIOS>
    );
  }
}


module.exports = Main;
