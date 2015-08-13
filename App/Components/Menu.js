var React = require('react-native');
var Dimensions = require('Dimensions');
var {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableHighlight,
  Navigator
} = React;

var window = Dimensions.get('window');
var uri = 'http://pickaface.net/includes/themes/clean/img/slide2.png';

class Menu extends React.Component {
  _signIn () {
    this.props.menuActions.close();
    console.log(this.props.navigator)
    // this.props.navigator.push({...})
  }
  _settings () {
    this.props.menuActions.close();
  }
  _subscribe () {
    this.props.menuActions.close();
    // this.props.navigator.push({...})
  }
  _feedbackReport () {
    this.props.menuActions.close();
    // this.props.navigator.push({...})
  }

  /**
  * this should be a blurred popup.
  **/
  _about () {
    this.props.menuActions.close()
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
          onPress={this._signIn.bind(this)}>
          <Text style={styles.item}>SignIn/Signout</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor='#e3f2fd'
          onPress={this._settings.bind(this)} >
            <Text style={styles.item}>Settings</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor='#e3f2fd'
          onPress={this._subscribe.bind(this)} >
            <Text style={styles.item}>Subscribe(Premium)</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor='#e3f2fd'
          onPress={this._feedbackReport.bind(this)} >
          <Text style={styles.item}>Feedback/Report A Problem</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor='#e3f2fd'
          onPress={this._about.bind(this)} >
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
