import React from 'react';
import routeMain from './routes';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Actions from 'components/Actions/Actions';

const defaultState = {
    cash: 10,
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD__CASH':
            return {...state, cash: state.cash + action.payload}
        case 'GET__CASH':
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }
}
const store = createStore(reducer)
const Home = () => {
    return (
        <div>
            <Provider store={store}>
                <Actions />
            </Provider>
        </div>
    );
};
export { routeMain };

export default Home;