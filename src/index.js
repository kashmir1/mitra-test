import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import App from './components/app/App'
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { rootReducer } from "./redux/rootReducer";

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk)
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.Fragment>
                <App/>
            </React.Fragment>
        </BrowserRouter>
    </Provider>
);

