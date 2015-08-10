var React = require('react-native');
var {Icon,} = require('react-native-icons');

var {
  Text,
  View,
  StyleSheet
} = React;

class Search extends React.Component {
  render () {
    return (
      <Icon
        name='ion|ios-search'
        size={30}
        color='#ffffff'
        style={styles.searchIcon}
      />
    )
  }
}

var styles = StyleSheet.create({
  searchIcon: {
    width: 40,
    height: 40
  }
})
module.exports = Search;
