import { combineReducers } from 'redux'
import ImdbReducer from '../ImdbReducer';
import  PlayingNowReducer from '../PlayingNowReducer';
 const RootReducer = combineReducers(
    {
        ImdbReducer,
        PlayingNowReducer
    }
)

export default RootReducer