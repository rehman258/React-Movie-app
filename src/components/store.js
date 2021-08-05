import {createStore} from 'redux';
import RootReducer from './reducers/rootReducer/RootReducer';

export const store = createStore(RootReducer);