import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux' //applyMiddleware
import { Provider } from 'react-redux';
// import createSagaMiddleware from 'redux-saga'
import manageMatch from './reducer/ManageMatch'
// import { rootSaga } from './sagas'

// const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  manageMatch,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // applyMiddleware(sagaMiddleware)
)
// const action = type => store.dispatch({type})

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
