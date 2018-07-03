import RCTWebRTCDemo from './main';
import {AppRegistry} from 'react-native';

if (!window.navigator.userAgent) {
  window.navigator.userAgent = "react-native";
}
AppRegistry.registerComponent('RCTWebRTCDemo', () => RCTWebRTCDemo);
