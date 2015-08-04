'use strict';

var React = require('react-native');


var {
  Text,
  View,
  ScrollView,
  StyleSheet
} = React;

class FavouritesTab extends React.Component {
  render () {
    return (
      <ScrollView>
        <Text>Favourites Page</Text>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({

});

module.exports = FavouritesTab;
