import React from 'react';

// Components
import { StyleSheet, View } from 'react-native';

import Footer from '../components/footer/Footer';

// Props
import {
    themePropType
} from '../common/prop-types/propTypes';

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

/**
 * Main screen that launches for app
 * @param {object} logs
 * @param {object} theme
 * @param {func} setModal
 * @param {boolean} compactMode
 * @returns {*}
 * @constructor
 */
class LogListScreen extends React.Component {
    render() {
        const { theme} = this.props;

        return (
            <View style={styles.container}>
                <View style={{flex: 1, backgroundColor: 'black'}} />

                <Footer theme={theme} />
            </View>
        );
    }
}

LogListScreen.propTypes = {
    theme: themePropType.isRequired,
};

LogListScreen.defaultProps = {
    userIntegration: null,
    integrationSettings: null
};

export default LogListScreen;
