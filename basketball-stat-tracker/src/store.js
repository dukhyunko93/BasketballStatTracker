import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import manageMatch from './reducer/ManageMatch'
import rootSaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export default createStore(manageMatch, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(rootSaga);

// render the application