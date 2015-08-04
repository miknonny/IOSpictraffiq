'use strict';

var React = require('react-native');
var CamListTab = require('./CamListTab');
var FavouritesTab = require('./FavouritesTab');


var {
  StyleSheet,
  TabBarIOS
} = React;

var styles = StyleSheet.create({

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
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'camlist'}
          icon={{uri: 'contacts'}}
          title={'Cams'}
          onPress={() => {
            this.setState({
              selectedTab: 'camlist'
            });
          }} >
            <CamListTab navigator={this.props.navigator}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'favourites'}
          icon={{uri: 'favorites'}}
          title={'Favourites'}
          onPress={() => {
            this.setState({
              selectedTab: 'favourites'
            });
          }} >
            <FavouritesTab />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}


module.exports = Main;
