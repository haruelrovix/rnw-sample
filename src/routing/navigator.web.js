import { history } from './history';

/**
 * Used with navigator.js to make a universal command to navigate from components
 * This makes our main code platform agnostic
 *
 * @param {string} routeName The screen to navigate to
 * @param {object} params Any extra data you want to pass to the route
 */
const navigate = (routeName, params = {}) => {
    history.push({
        pathname: routeName,
        state: params
    });
};

const currentRoute = () => history.location.pathname.replace(/\//, '');

export default {
    navigate,
    currentRoute
};
