import {combineReducers} from 'redux';
import {todoReducer} from './todoReducer';
import {GIFServiceReducer} from "./GIFServiceReducer";


export const rootReducer = combineReducers({
    todos: todoReducer,
    imageUrl: GIFServiceReducer
});
