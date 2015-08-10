var React = require('react-native');
var {Icon,} = require('react-native-icons');

var {
  Text,
  StyleSheet,
} = React;

class AddFavourites extends React.Component {
  render () {
    return (
      <Icon
        name='ion|ios-plus-outline'
        style={styles.AddIcon}
        color='#ffffff'
        size={30}
      />
    )
  }
}

var styles = StyleSheet.create({
  AddIcon: {
    width: 40,
    height: 40
  }
})

module.exports = AddFavourites;
