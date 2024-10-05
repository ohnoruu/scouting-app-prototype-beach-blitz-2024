import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Assuming you have a global CSS file

// Export default navigation functions in index.js to save lines in navigation.jsx
export { default as Home } from './components/navigation/Home';
export { default as Search } from './components/navigation/Search';
export { default as Record } from './components/navigation/Record';
export { default as Settings } from './components/navigation/Settings';

// Export default icon types to use. Refer to https://oblador.github.io/react-native-vector-icons/
export { default as Entypo } from 'react-icons/ent';
export { default as AntDesign } from 'react-icons/ai';
export { default as FontAwesome } from 'react-icons/fa';
export { default as MaterialCommunityIcons } from 'react-icons/md';
export { default as Ionicons } from 'react-icons/io';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);