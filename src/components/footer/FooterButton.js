import React from 'react';

import { Button } from 'react-native-elements';

import { stringPropType, boolPropType, funcPropType, themePropType } from '../../common/prop-types/propTypes';

/**
 * Generates a common button component for the the footer buttons
 * @param {string} name
 * @param {boolean} isDisabled
 * @param {func} onPress
 * @param {func} onLongPress
 * @param {object} theme
 * @returns {*}
 * @constructor
 */
const FooterButton = ({ name, isDisabled, onPress, onLongPress, theme }) => (
    <Button
        icon={{
            name: name,
            size: 30,
            margin: 0,
            padding: 0,
            color: isDisabled
                ? theme.timerBarButtonIconDisabledColor
                : theme.timerBarButtonIconColor
        }}
        onPress={onPress}
        onLongPress={onLongPress}
        disabled={isDisabled}
        disabledStyle={theme.timerBarButton}
        buttonStyle={theme.timerBarButton}
    />
);

FooterButton.propTypes = {
    name: stringPropType.isRequired,
    isDisabled: boolPropType.isRequired,
    onPress: funcPropType.isRequired,
    onLongPress: funcPropType,
    theme: themePropType.isRequired
};

FooterButton.defaultProps = {
    onLongPress: () => {}
};

export default FooterButton;
