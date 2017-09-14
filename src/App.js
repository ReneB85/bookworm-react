import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./rootReducer";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

const App = () => ( 
    <BrowserRouter>
        <Provider store={store}>
            <div className="ui container">
                <Route path="/" exact component={HomePage} />
                <Route path="/login" exact component={LoginPage} />
            </div>
        </Provider>
    </BrowserRouter>
);

export default App;
