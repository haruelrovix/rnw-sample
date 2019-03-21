import React from 'react';
import { Provider } from 'react-redux';

import { StyleSheet, View } from 'react-native';

import { PersistGate } from 'redux-persist/integration/react';
import { MenuProvider } from 'react-native-popup-menu';

import { store, persistor } from './common/services/store';

import AppStack from './routing/router';
import LoadingScreen from './screens/LoadingScreen';

import SideMenu from './components/sidemenu/SideMenu';

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    content: {
        flex: 1,
        flexDirection: 'row'
    },
    sideMenu: {
        maxWidth: 300
    }
});

/*
 * The base for this app was created using these guidelines
 * https://react-native-training.github.io/react-native-elements/blog/2018/12/13/react-native-web.html
 */
const App = () => (
    <View style={styles.container}>
        <Provider store={store}>
            <PersistGate loading={<LoadingScreen />} persistor={persistor}>
                <MenuProvider>
                    <View style={styles.content}>
                        <SideMenu style={styles.sideMenu} />
                        <AppStack />
                    </View>
                </MenuProvider>
            </PersistGate>
        </Provider>
    </View>
);

export default App;
