var React = require('react-native');
var {Icon,} = require('react-native-icons');
var SearchBar = require('./SearchBar');

var {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TextInput
} = React;

class SearchView extends React.Component {
  render () {
    return (
      <Text>SearchView</Text>
    )
  }
}

class Search extends React.Component {
  _goToSearchView () {
    this.props.toRoute({
      name: '',
      component: SearchView,
      titleComponent: SearchBar
    })
  }
  render () {
    return (
      <TouchableHighlight
        onPress={this._goToSearchView.bind(this)}
        underlayColor='#7bdef9'>
        <Icon
          name='ion|ios-search'
          size={30}
          color='#ffffff'
          style={styles.searchIcon}
        />
      </TouchableHighlight>
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
