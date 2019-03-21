import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import fuzzysort from 'fuzzysort';

export const dayLength = 8 * 60; // minutes in a day

/**
 * Calculate the height of log entry details displayed on the timeline
 * @param {number} duration The duration in seconds for the entry
 * @returns {number}
 *
 * // .03125 = 1/32 day = 15min = 900 sec
 * // .0625 = 1/16 day = 30 min = 1800 sec
 * // .125 = 1/8 day = 60 min = 3600 sec
 * // .25 = 1/4 day = 120 min = 7200 sec
 * // .5 = 1/2 day = 240 min =
 * // .75 = 3/4 day = 360 min =
 * // 1 = 1 day = 480 min = 28800 = dayLength
 */
export const calculateLogDetailsHeight = (duration) => {
    const fraction = duration / dayLength;

    return fraction * 480 / 60; // 8 hour log will fill the viewport
};

/**
 * Gets the current screen from react-navigation
 * @param {object} navigationState
 * @returns {*}
 */
export const getActiveRouteName = (navigationState) => {
    if (isEmpty(navigationState)) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getActiveRouteName(route);
    }
    return route.routeName;
};

/**
 * Converts seconds to 1h 30m 45s format
 * @param {number} seconds
 * @returns {string}
 */
export const secondsToHMS = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds / 60) % 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
};

export const secondsToHM = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds / 60) % 60);
    return `${h}h ${m}m`;
};

/**
 * Converts seconds to hours (decimal); ie. 4500 = 1.25
 * @param {number} seconds
 * @returns {string}
 */
export const secondsToHours = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.round(((seconds / 60) % 60) / 60 * 100);
    return `${h}.${m}`;
};

/**
 * Outputs a human readable format for the duration of a log entry
 * @param {number} duration Time in seconds that this entry was running
 * @returns {string}
 */
export const getTimeSpentFromDuration = (duration) => {
    // If less than a minute just give a general indication
    if (duration < 60) {
        return '> 1m';
    }

    const h = Math.floor(duration / 3600);
    const m = Math.floor((duration / 60) % 60);

    return `${h}h ${m}m`;
};

/**
 * Find the duration between the timestamp and NOW()
 * @param {number} timestamp
 * @returns {string}
 */
export const getTimeSpentFromTimestamp = (timestamp) => {
    const duration = moment().unix() - timestamp;
    return getTimeSpentFromDuration(duration);
};

/**
 * Fuzzy search of the options provided, reducing the options in the list
 * @param {string} query The string to find
 * @param {array} options The array of options that are possible
 * @returns {*}
 */
export const filterOptions = (query, options) => {
    if (isEmpty(query)) {
        return [];
    }

    // https://github.com/farzher/fuzzysort
    const filteredOptions = fuzzysort.go(query, options, {
        allowTypo: false,
        limit: 20,
        key: 'label'
    });

    // We don't want this mucking up our select option list
    // fuzzysort returns an array of objects and total as the final array element.
    delete filteredOptions.total;

    // fuzzysort's array of objects contains a bunch of information we are not using
    // only return our option object and ignore score, target and indexes
    return filteredOptions.map((option) => option.obj);
};

/**
 * Returns an array of timestamps sorted from lowest to highest
 * @param {object} logs
 * @returns {Array}
 */
export const getSortedTimestamps = (logs) => {
    const logsArray = [];

    // Loop through the object and build an array
    Object.keys(logs).forEach((timestamp) => {
        logsArray.push(timestamp);
    });

    // Order the timestamps from lowest to highest value
    logsArray.sort((b, a) => b - a);

    return logsArray;
};

/**
 * Gets the time boundaries around a selected timestamp
 * This is defined as one minute after the previous log entry and one minute before the next log entry
 * If there is no next log entry then the limit should be NOW()
 * @param {object} logs The object we want to get timestamp keys from
 * @param {number|null} selectedTimestamp The current timestamp of the selected entry - if it exists
 * @returns {object}
 */
export const getTimeBoundaries = (logs, selectedTimestamp = null) => {
    // Get array or timestamps sorted from lowest to highest
    const logsArray = getSortedTimestamps(logs);
    let currentArrayPosition = null;
    let prevEntry = null;
    let nextEntry = null;

    if (isEmpty(logsArray)) {
        return {
            currentEntry: selectedTimestamp,
            prevEntry,
            nextEntry,
            min: 0,
            max: moment().unix()
        };
    }

    if (selectedTimestamp === null) {
        prevEntry = parseInt(logsArray[logsArray.length - 1], 10);
    } else {
        currentArrayPosition = logsArray.indexOf(selectedTimestamp.toString());

        // If the timestamp doesn't exist in our current logs we can assume its new
        // If it is new then the "previous" log is the most recent
        if (currentArrayPosition === -1) {
            if (selectedTimestamp > logs[logsArray[logsArray.length - 1]].logTimestamp) {
                prevEntry = parseInt(logsArray[logsArray.length - 1], 10);
            }
        } else {
            if (currentArrayPosition > 0) {
                prevEntry = parseInt(logsArray[currentArrayPosition - 1], 10);
            }

            if (logsArray[currentArrayPosition + 1]) {
                nextEntry = parseInt(logsArray[currentArrayPosition + 1], 10);
            }
        }
    }

    return {
        currentEntry: selectedTimestamp,
        prevEntry,
        nextEntry,
        min: prevEntry !== null && !isNaN(prevEntry)
            ? parseInt(prevEntry, 10) + 60
            : 0, // Any time in the past is valid
        max: nextEntry !== null && !isNaN(nextEntry)
            ? parseInt(nextEntry, 10) - 60
            : moment().unix()
    };
};

/**
 * Converts a flat object with key value pairs into an array of key: value, key:label
 * @param {object} object
 * @returns {{label: any, key: string}[]}
 */
export const mapObjectToOptions = (object) => (
    Object.entries(object).map(([key, label]) => (
        {
            key,
            label
        }
    ))
);

/**
 * Returns the key of an object based on its value match
 * @param {object} object
 * @param {string} value
 * @returns {string}
 */
export const getKeyByValue = (object, value) => Object.keys(object).find((key) => object[key] === value);
