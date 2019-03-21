import { Alert } from 'react-native';

import { alertTypes } from './alertTypes';

/**
 * Handles native alerting events
 * @param {string} type The type of message to alert
 * @param {string} title The title of the alert
 * @param {string|object} message The body of the alert
 * @param {function} okCallback The callback function when 'OK' is pressed
 */
export const alertHandler = (type, title = null, message = null, okCallback = () => {}) => {
    const {
        INVALID_CREDENTIALS,
        FORBIDDEN,
        GENERIC_ERROR,
        OFFLINE_ERROR,
        ERROR,
        WARNING,
        BAD_REQUEST,
        VALIDATION_ERROR,
        CONFIRM_ACTION
    } = alertTypes;

    switch (type) {
        case INVALID_CREDENTIALS:
            Alert.alert(
                'Invalid Credentials',
                'Your User Name or Password is incorrect',
                [{ text: 'OK' }]
            );
            break;
        case VALIDATION_ERROR: {
            let messages = '';

            Object.values(message).forEach((error) => {
                messages += error + '\n'; // eslint-disable-line
            });

            Alert.alert(
                'Validation Error',
                messages,
                [{ text: 'OK' }]
            );
            break;
        }
        case BAD_REQUEST:
            Alert.alert(
                'Sorry',
                message,
                [{ text: 'OK' }]
            );
            break;
        case FORBIDDEN:
            Alert.alert(
                'Forbidden',
                'The action you are trying to take is not permitted.',
                [{ text: 'OK' }]
            );
            break;
        case GENERIC_ERROR:
            Alert.alert(
                'Sorry',
                'There was an error. Please contact the administrator if the problem persists.',
                [{ text: 'OK' }]
            );
            break;
        case OFFLINE_ERROR:
            Alert.alert(
                'Network Connection Error',
                'Can\'t connect to servers, make sure you have a network connection and try again.',
                [{ text: 'OK' }]
            );
            break;
        case ERROR:
            Alert.alert(
                title,
                message,
                [{ text: 'OK' }]
            );
            break;
        case WARNING:
            Alert.alert(
                title,
                message,
                [{ text: 'OK' }]
            );
            break;
        case CONFIRM_ACTION:
            Alert.alert(
                title,
                message,
                [
                    { text: 'Cancel' },
                    { text: 'OK', onPress: () => okCallback() },
                ],
                { cancelable: false }
            );
            break;
        default:
            Alert.alert(
                title,
                message,
                [{ text: 'OK' }]
            );
    }
};
