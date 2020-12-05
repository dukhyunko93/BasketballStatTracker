import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers/reducerIndex'
import rootSaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(
  reducer, 
  applyMiddleware(sagaMiddleware)
  );

// then run the saga
sagaMiddleware.run(rootSaga);

export default store

// import { createStore } from 'redux'
// import reducer from './reducers/index'

// export function configureStore(){
//   return createStore(
//     reducer, 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
// }

// export const store = configureStore()