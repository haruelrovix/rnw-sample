import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

// Components
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HeaderMenuButton from './HeaderMenuButton';
import HeaderBackButton from './HeaderBackButton';

import { withTheme } from '../../hocs/withTheme';

// Actions
import { setModal } from '../../common/actions/uiContext';

import { funcPropType, navigationPropType, themePropType, numPropType } from '../../common/prop-types/propTypes';


/**
 *  ______NOTE:_____
 * This app is themed.
 * As such all color related styling should be defined within a theme
 * If you style it here it may be overwritten
 *
 */
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    date: {
        marginLeft: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    buttons: {
        backgroundColor: 'transparent'
    }
});

/**
 * Render a Header for the app
 * @param {object} navigation The react-navigation object
 * @param {object} theme
 * @returns {*}
 * @constructor
 */
class Header extends React.Component {
    headerButton = () => {
        const { navigation } = this.props;
        const { state } = navigation;
        const { routeName } = state;

        const backButtonRoutes = ['Calendar', 'Settings'];

        if (backButtonRoutes.includes(routeName)) {
            return <HeaderBackButton navigation={navigation} />;
        }

        return <HeaderMenuButton navigation={navigation} />;
    };

    render() {
        const { navigation, theme, calendarSelectedDate } = this.props;
        const { navigate } = navigation;

        return (
            <View style={[styles.header, theme.header]}>
                <View style={styles.leftHeader}>
                    { this.headerButton() }
                    <TouchableOpacity onPress={() => { navigate('Calendar'); }}>
                        <Text style={[styles.date]}>
                            {moment.unix(calendarSelectedDate).format('LL')}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

Header.propTypes = {
    navigation: navigationPropType.isRequired,
    theme: themePropType.isRequired,
    calendarSelectedDate: numPropType.isRequired,
    setModal: funcPropType
};

Header.defaultProps = {
    setModal: null,
};

const mapStateToProps = (state) => ({
    calendarSelectedDate: state.uiContext.calendarSelectedDate
});

export default connect(mapStateToProps, {
    setModal
})(withTheme(Header));
