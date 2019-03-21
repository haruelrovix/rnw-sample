import React from 'react';

// Components
import { StyleSheet, View } from 'react-native';
import FooterButton from './FooterButton';

// Constants
import {
    boolPropType,
    funcPropType,
    logPropType,
    themePropType
} from '../../common/prop-types/propTypes';

/**
 *  ______NOTE:_____
 * This app is themed.
 * As such all color related styling should be defined within a theme
 * If you style it here it may be overwritten
 */
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftSide: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightSide: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

/**
 * Main Footer component
 */
class Footer extends React.Component {
   render() {
        const { theme } = this.props;

        return (
            <View style={[styles.container, theme.timerBar]}>

                <View style={styles.leftSide}>

                    <FooterButton
                        name="pause"
                        isDisabled={false}
                        onPress={() => {}}
                        onLongPress={() => {}}
                        theme={theme}
                    />

                </View>

                <View style={styles.rightSide}>
                    <FooterButton
                        name="alarm-add"
                        isDisabled={false}
                        onPress={() => {}}
                        onLongPress={() => {}}
                        theme={theme}
                    />
                </View>

            </View>
        );
    }
}

Footer.propTypes = {
    theme: themePropType.isRequired,
};

export default Footer;
