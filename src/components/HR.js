import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View, ViewPropTypes } from 'react-native';

const styles = StyleSheet.create({
    underline: {
        borderTopWidth: 1,
        marginBottom: 5,
        marginTop: 5,
        marginLeft: 2,
        marginRight: 2
    }
});

/**
 * Generates a generic underline
 * @param color
 * @param style
 * @returns {*}
 * @constructor
 */
const HR = ({ color, style }) => (
    <View style={[styles.underline, { borderColor: color }, style]} />
);

HR.propTypes = {
    color: PropTypes.string,
    style: ViewPropTypes.style
};

HR.defaultProps = {
    color: 'white',
    style: null
};

export default HR;
