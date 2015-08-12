var React = require('react-native');

var {
  Text,
  TextInput,
  StyleSheet
} = React;

var {
  StyleSheet,
  TextInput
} = React;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <TextInput style={styles.input}
        onChangeText={''}
        autoFocus={true}
        placeholder="Search here" placeholderColor="#FFF"
      />
    )
  }
}

var styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF',
    width: 220,
    height: 32,
    marginTop: 6,
    paddingLeft: 10,
    color: 'black', // Text Color
    borderRadius: 4
  }
});

module.exports = SearchBar;
