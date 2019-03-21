import React from 'react';

// Navigators
import {
    createStackNavigator,
    createDrawerNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';

// Components
import LogListScreen from '../screens/LogListScreen';
import Header from '../components/header/Header';
import SideMenu from '../components/sidemenu/SideMenu';

// HOC's
import { withTheme } from '../hocs/withTheme';

/**
 * Create the screen stack for the payments side of the app
 */
const AppStack = createStackNavigator({
    LogList: withTheme(LogListScreen),
}, {
    headerMode: 'float',
    defaultNavigationOptions: (
        ({ navigation }) => ({
            // Use a custom header instead of the built in defaults
            header: <Header navigation={navigation} />
        })
    )
});

const Drawer = createDrawerNavigator({
    AppStack: AppStack
}, {
    // Load custom drawer component instead of using default
    contentComponent: withTheme(SideMenu)
});

const SwitchStack = createSwitchNavigator({
    AppStack: Drawer // Drawer wraps our AppStack that's why we use it
}, {
    initialRouteName: 'AppStack',
});

export default createAppContainer(SwitchStack);
