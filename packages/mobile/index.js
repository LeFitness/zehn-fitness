/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import fetchInitialAppProps from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => fetchInitialAppProps);
