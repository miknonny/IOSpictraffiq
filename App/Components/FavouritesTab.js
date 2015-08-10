'use strict';

var React = require('react-native');
var Router = require('react-native-router');
var FavouritesList = require('./FavouritesList');
var AddFavourites = require('./AddFavourites');
var SideBar = require('./SideBar');
var {Icon, } = require('react-native-icons');

var {
  Text,
  View,
  ScrollView,
  StyleSheet
} = React;

var firstRoute = {
  name: 'Favourites',
  component: FavouritesList,
  rightCorner: AddFavourites,
  leftCorner: SideBar
}

class FavouritesTab extends React.Component {
  render () {
    return (
      <Router firstRoute={firstRoute} />
    );
  }
}

var styles = StyleSheet.create({

});

module.exports = FavouritesTab;
