var React = require('react-native');
var {Icon,} = require('react-native-icons');
var Menu = require('./Menu');

var {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} = React;

class SideBar extends React.Component {
  _toggleMenu () {
    console.log(Menu.props)
  }
  render () {
    return (
      <TouchableHighlight
        onPress={this._toggleMenu}
        underlayColor='#e3f2fd'>
        <Icon
          name='ion|navicon'
          size={30}
          color='#ffffff'
          style={styles.sideBarIcon} />
      </TouchableHighlight>
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
