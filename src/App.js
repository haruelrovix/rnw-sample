import React from 'react';
import { Provider } from 'react-redux';

import { YellowBox } from 'react-native';

import { PersistGate } from 'redux-persist/integration/react';
import { MenuProvider } from 'react-native-popup-menu';

import { store, persistor } from './common/services/store';
import NavigationService from './routing/navigator';

import AppStack from './routing/router';
import LoadingScreen from './screens/LoadingScreen';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

/*
 * The base for this app was created using these guidelines
 * https://react-native-training.github.io/react-native-elements/blog/2018/12/13/react-native-web.html
 */
const App = () => (
    <Provider store={store}>
        <PersistGate loading={<LoadingScreen />} persistor={persistor}>
            <MenuProvider>
                <AppStack ref={(navigatorRef) => NavigationService.setTopLevelNavigator(navigatorRef)} />
            </MenuProvider>
        </PersistGate>
    </Provider>
);

export default App;
