import { alertTypes } from './alertTypes';
import { alertHandler } from './alertHandler';

export const errorConsoleDump = (error) => {
    console.log(error);
    console.log(error.response);
    console.log(error.message);
};

export const errorHandler = (response) => {
    if (!response.data) {
        return alertHandler(alertTypes.GENERIC_ERROR);
    }

    return alertHandler(alertTypes.ERROR, null, response.data.message);
};
