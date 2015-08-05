'use strict';

var React = require('react-native');
var {Icon, } = require('react-native-icons');

var {
  Text,
  View,
  ScrollView,
  StyleSheet
} = React;

var BrandColors = {
  Facebook: '#3b5998',
  Twitter: '#55acee'
};

class FavouritesTab extends React.Component {
  render () {
    return (
      <ScrollView>
        <Text>Favourites here...</Text>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({

});

module.exports = FavouritesTab;
