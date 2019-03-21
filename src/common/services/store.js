/* eslint-disable */
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    blacklist: ['uiContext'] // uiContext will not be persisted
};

const enhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    enhancers
);

export const persistor = persistStore(store);


/**
 * As per react-native-web
 */
// const initialState = {};
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export default createStore(
//     rootReducer,
//     initialState,
//     composeEnhancers(applyMiddleware(thunk))
// );


/**
 * As per previous projects
 */
// export default createStore(
//     rootReducer,
//     initialState,
//     compose(
//         applyMiddleware(thunk),
//         process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : (f) => f
//     )
// );
