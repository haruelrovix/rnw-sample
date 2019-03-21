import React from 'react';

import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { navigationPropType } from '../../common/prop-types/propTypes';

const styles = StyleSheet.create({
    container: {
        marginLeft: 0,
        justifyContent: 'center'
    },
    button: {
        padding: 0,
        backgroundColor: 'transparent'
    }
});

/**
 * Creates the hamburger icon and actions for opening the navigation drawer
 * @param {object} navigation The react-navigation object
 * @returns {*}
 * @constructor
 */
const HeaderMenuButton = ({ navigation }) => (
    <Button
        containerViewStyle={styles.container}
        icon={{
            name: 'menu',
            size: 35,
            margin: 0,
            padding: 0,
            color: 'white'
        }}
        buttonStyle={styles.button}
        onPress={() => navigation.openDrawer()}
    />
);

HeaderMenuButton.propTypes = {
    navigation: navigationPropType.isRequired
};

export default HeaderMenuButton;
