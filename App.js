import React from 'react';
import { YellowBox } from 'react-native';

import HybridApp from './src/App';

YellowBox.ignoreWarnings(['unknown call: "relay:check"']);

const App = () => <HybridApp />;

export default App;
