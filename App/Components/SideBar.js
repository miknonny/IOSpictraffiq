var React = require('react-native');
var {Icon,} = require('react-native-icons');

var {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} = React;

class SideBar extends React.Component {
  _openMenu () {
    console.log(this.props.menuActions)
    console.log('menu opened')
  }
  render () {
    return (
      <TouchableHighlight
        onPress={this._openMenu.bind(this)}
        underlayColor='#e3f2fd'
        >
      <Icon
        name='ion|navicon'
        size={30}
        color='#ffffff'
        style={styles.sideBarIcon}
      />
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
