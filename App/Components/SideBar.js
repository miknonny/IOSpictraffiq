var React = require('react-native');
var {Icon,} = require('react-native-icons');

var {
  Text,
  View,
  StyleSheet
} = React;

class SideBar extends React.Component {
  render () {
    return (
      <Icon
        name='ion|navicon'
        size={30}
        color='#ffffff'
        style={styles.sideBarIcon}
      />
    )
  }
}


var styles = StyleSheet.create({
  sideBarIcon: {
    width: 40,
    height: 40
  }
})

module.exports = SideBar;
