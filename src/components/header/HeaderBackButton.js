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
const HeaderBackButton = ({ navigation }) => (
    <Button
        containerViewStyle={styles.container}
        icon={{
            name: 'keyboard-backspace',
            size: 35,
            margin: 0,
            padding: 0,
            color: 'white'
        }}
        buttonStyle={styles.button}
        onPress={() => navigation.goBack()}
    />
);

HeaderBackButton.propTypes = {
    navigation: navigationPropType.isRequired
};

export default HeaderBackButton;
