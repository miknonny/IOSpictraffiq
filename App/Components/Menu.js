var React = require('react-native');
var Dimensions = require('Dimensions');
var {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableHighlight
} = React;

var window = Dimensions.get('window');
var uri = 'http://pickaface.net/includes/themes/clean/img/slide2.png';

class Menu extends React.Component {
  _signIn () {
    console.log('sign in!');
  }
  _settings () {
    console.log('settings');
  }
  _subscribe () {
    console.log('subscribe');
  }
  _feedbackReport () {
    console.log('feedback and report page');
  }

  /**
  * this should be a blurred popup.
  **/
  _about () {
    console.log(navigator);
    console.log('About!')
  }
  render() {
    return (
      <ScrollView style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{ uri, }}/>
          <Text style={styles.name}>Mbah Michael</Text>
        </View>
        <TouchableHighlight
          underlayColor='#e3f2fd'
          onPress={this._signIn}
          >
          <Text style={styles.item}>SignIn/Signout</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor='#e3f2fd'
          onPress={this._settings} >
            <Text style={styles.item}>Settings</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor='#e3f2fd'
          onPress={this._subscribe} >
            <Text style={styles.item}>Subscribe(Premium)</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor='#e3f2fd'
          onPress={this._feedbackReport} >
          <Text style={styles.item}>Feedback/Report A Problem</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor='#e3f2fd'
          onPress={this._about} >
          <Text style={styles.item}>About</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 10,
  },
});

Menu.propTypes = {
  navigator: React.PropTypes.object.isRequired
}

module.exports = Menu;
