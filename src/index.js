/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';

// Generate required css
import iconFont from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';

import App from './App';

// https://github.com/oblador/react-native-vector-icons#web-with-webpack
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: MaterialIcons;
}`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';

if (style.styleSheet) {
    style.styleSheet.cssText = iconFontStyles;
} else {
    style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);

ReactDOM.render(<App />, document.getElementById('root'));
