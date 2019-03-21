import React from 'react';
import { connect } from 'react-redux';

import themes from '../themes/themes';

/**
 * Wraps the supplied component with a theme prop that can be used to
 * display a custom color scheme for the app
 */
export const withTheme = (WrappedComponent) => {
    class ThemedComponent extends React.PureComponent {
        render() {
            const { selectedTheme } = this.props;

            return (
                <WrappedComponent
                    theme={themes[selectedTheme].theme}
                    {...this.props}
                />
            );
        }
    }

    const mapStateToProps = (state) => ({
        selectedTheme: 'dark',
    });

    return connect(mapStateToProps)(ThemedComponent);
};
