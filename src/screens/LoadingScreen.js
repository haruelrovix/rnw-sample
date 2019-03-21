/* eslint-disable global-require */
import React from 'react';

import { ActivityIndicator, StyleSheet, Image, View, Text } from 'react-native';

import { withTheme } from '../hocs/withTheme';

import { themePropType } from '../common/prop-types/propTypes';

const appIcon = require('../common/assets/daytracer-logo.png');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 200,
        height: 120
    },
    titleWrapper: {
        flexDirection: 'row'
    },
    title: {
        fontFamily: 'Poppins-Italic',
        fontSize: 55,
        marginTop: 30
    },
    day: {
        color: '#0088DB'
    },
    tracer: {
        color: '#F9A530'
    },
    tagline: {
        fontFamily: 'Poppins-Regular',
        fontSize: 17,
        marginBottom: 20,
        opacity: 0.6
    }
});

class LoadingScreen extends React.PureComponent {
    render() {
        const { theme } = this.props;

        return (
            <View style={[styles.container, theme.background]}>
                <Image style={styles.image} source={appIcon} />
                <View style={styles.titleWrapper}>
                    <Text style={[styles.title, styles.day]}>
                        Day
                    </Text>
                    <Text style={[styles.title, styles.tracer]}>
                        Tracer
                    </Text>
                </View>
                <Text style={[styles.tagline, theme.text]}>
                    The ultimate time tracking solution
                </Text>
                <ActivityIndicator />
            </View>
        );
    }
}

LoadingScreen.propTypes = {
    theme: themePropType.isRequired
};

export default withTheme(LoadingScreen);
