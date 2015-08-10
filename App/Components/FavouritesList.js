var React = require('react-native');

var {
  View,
  Styles,
  ScrollView,
  StyleSheet,
  Text
} = React;

class FavouritesList extends React.Component {
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

module.exports = FavouritesList;
