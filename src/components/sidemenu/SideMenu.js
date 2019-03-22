import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import NavigationService from '../../routing/navigator';

import {
    boolPropType,
    funcPropType,
    objectPropType,
    stringPropType,
    themePropType,
} from '../../common/prop-types/propTypes';

import { withTheme } from '../../hocs/withTheme';

/**
 *  ______NOTE:_____
 * This app is themed.
 * As such all color related styling should be defined within a theme
 * If you style it here it may be overwritten
 *
 */
const headerStyles = StyleSheet.create({
    container: {
        height: 57,
        padding: 10,
        flexDirection: 'row'
    },
    iconContainer: {
        marginRight: 10
    },
    headerTitleWrapper: {
        flexDirection: 'row'
    },
    headerTitle: {
        fontFamily: 'Poppins-Italic',
        fontSize: 25
    },
    headerTitleDay: {
        color: '#0088DB'
    },
    headerTitleTracer: {
        color: '#F9A530'
    },
    headerBlurb: {
        fontSize: 10
    },
    imageIcon: {
        width: 35,
        height: 35,
        marginRight: 10
    }
});

const SideMenuHeader = ({ theme }) => (
    <View style={[headerStyles.container, theme.sidebarHeader]}>
        <View style={headerStyles.headerTitleWrapper}>
            <Text style={[headerStyles.headerTitle, headerStyles.headerTitleDay]}>
                Fun
            </Text>
            <Text style={[headerStyles.headerTitle, headerStyles.headerTitleTracer]}>
                Times
            </Text>
        </View>
    </View>
);

SideMenuHeader.propTypes = {
    theme: themePropType.isRequired
};

/**
 *  ______NOTE:_____
 * This app is themed.
 * As such all color related styling should be defined within a theme
 * If you style it here it may be overwritten
 *
 */
const navItemStyles = StyleSheet.create({
    itemRow: {
        padding: 5,
        paddingLeft: 10,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderLeftWidth: 3,
        borderColor: 'transparent'
    },
    text: {
        marginLeft: 10,
        flex: 1
    }
});

/**
 * Generate a drawer nav item with an icon and text inline
 * @param {boolean} selected Is this the option that is currently selected
 * @param {string} name The text to display
 * @param {string} icon The icon to display
 * @param {func} onPress The function to run when you click on the item
 * @param {object} theme
 * @returns {*}
 * @constructor
 */
const NavItem = ({ selected, name, icon, onPress, theme }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={[navItemStyles.itemRow, selected && theme.sidebarActiveScreen]}>
            <Icon
                name={icon}
                color={theme.sidebarIconsColor}
                containerStyle={selected ? theme.sidebarIconActive : theme.sidebarIcon}
                type='material'
            />
            <Text style={[navItemStyles.text, theme.text, theme.sidebarText]}>
                {name}
            </Text>
        </View>
    </TouchableOpacity>
);

NavItem.propTypes = {
    selected: boolPropType.isRequired,
    name: stringPropType.isRequired,
    icon: stringPropType.isRequired,
    onPress: funcPropType.isRequired,
    theme: themePropType.isRequired
};

/**
 *  ______NOTE:_____
 * This app is themed.
 * As such all color related styling should be defined within a theme
 * If you style it here it may be overwritten
 *
 */
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navSection: {
        marginTop: 10
    },
    settings: {
        justifyContent: 'flex-end',
        paddingBottom: 4
    }
});

/**
 * Render a SideMenu for web or Drawer flyout for the Android / iOS
 * @param {object} navigation The react-navigation object
 * @param {object} theme
 * @param {object} style
 * @returns {*}
 * @constructor
 */
const SideMenu = ({ theme, style }) => {
    const currentRoute = NavigationService.currentRoute();

    return (
        <View style={[styles.container, theme.sidebar, style]}>
            <SideMenuHeader theme={theme} />

            <ScrollView>
                <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                    <View style={styles.navSection}>
                        <NavItem
                            selected={currentRoute === 'LogList'}
                            icon="list"
                            name="Timeline"
                            onPress={() => NavigationService.navigate('LogList')}
                            theme={theme}
                        />
                        <NavItem
                            selected={currentRoute === 'Calendar'}
                            icon="today"
                            name="Calendar"
                            onPress={() => NavigationService.navigate('Calendar')}
                            theme={theme}
                        />
                    </View>
                </SafeAreaView>
            </ScrollView>
            <View style={[styles.settings, theme.sidebarHeader]}>
                <NavItem
                    selected={currentRoute === 'Settings'}
                    icon="settings"
                    name="Settings"
                    onPress={() => NavigationService.navigate('Settings')}
                    theme={theme}
                />
            </View>
        </View>
    );
};

SideMenu.propTypes = {
    theme: themePropType.isRequired,
    style: objectPropType
};

SideMenu.defaultProps = {
    style: {}
};


export default withTheme(SideMenu);
