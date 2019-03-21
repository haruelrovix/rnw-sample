import React from 'react';
import { Route, Router } from 'react-router-dom';

import { StyleSheet, View } from 'react-native';

import { withTheme } from '../hocs/withTheme';

import LogListScreen from '../screens/LogListScreen';

import { history } from './history';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%'
    }
});

export default () => (
    <Router history={history}>
        <View style={styles.container}>
            <Route
                exact
                path="/"
                render={(props) => {
                    const LogListScreenWithTheme = withTheme(LogListScreen);

                    return <LogListScreenWithTheme {...props} />;
                }}
            />
        </View>
    </Router>
);
