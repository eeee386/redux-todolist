import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from './reducers/rootReducer';
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {PersistGate} from 'redux-persist/lib/integration/react';
import thunk from 'redux-thunk'
import {logger} from './middlewares/logger';
import {crashReporter} from "./middlewares/crashReporter";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, applyMiddleware(thunk, logger, crashReporter));
let persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
