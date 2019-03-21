import { ToastAndroid } from 'react-native';
import { toastTypes } from './alertTypes';

export const toastHandler = (type) => {
    const { LOADING } = toastTypes;
    switch (type) {
        case LOADING:
            ToastAndroid.showWithGravity(toastTypes.LOADING, ToastAndroid.SHORT, ToastAndroid.CENTER);
            break;
        default:
            // fall through
    }
};

export default toastHandler;
