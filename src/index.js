import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from '../package.json';
import React from 'react';
import ReactDOM from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);

AppRegistry.registerComponent(appName, () => App);
