import { NavigationActions } from 'react-navigation';
import { getActiveRouteName } from '../common/globalFunctions';

let navigator;

function setTopLevelNavigator(navigatorRef) {
    navigator = navigatorRef;
}

/**
 * Used with navigator.web.js to make a universal command to navigate from components
 * This makes our main code platform agnostic
 *
 * @param {string} routeName The screen to navigate to
 * @param {object} params Any extra data you want to pass to the route
 */
function navigate(routeName, params) {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

function currentRoute() {
    if (navigator) {
        return getActiveRouteName(navigator.state.nav);
    }

    return null;
}

export default {
    navigate,
    currentRoute,
    setTopLevelNavigator,
};
