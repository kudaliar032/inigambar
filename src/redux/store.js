import {createStore, applyMiddleware, combineReducers} from 'redux';
import quiz from "./reducers/quiz";
import play from "./reducers/play";
import menu from "./reducers/menu";
import thunk from 'redux-thunk';

const reducers = combineReducers({
    quiz,
    play,
    menu
});

const configureStore = (initialState = {}) => {
    const store = createStore(reducers, initialState, applyMiddleware(thunk));
    return store;
};

export default configureStore();
